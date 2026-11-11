import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const CHROME = 'C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(DIST, p);
  if (!fp.startsWith(DIST) || !fs.existsSync(fp)) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
  fs.createReadStream(fp).pipe(res);
});
await new Promise((r) => server.listen(0, r));
const port = server.address().port;
const url = `http://localhost:${port}/`;

const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
const out = {};
const errors = [];

async function newPage(viewport) {
  const page = await browser.newPage({ viewport });
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  return page;
}

// ============ DESKTOP ============
try {
  const page = await newPage({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('#start-button', { timeout: 8000 });
  await page.click('#start-button');
  await page.waitForFunction(() => window.game && window.game.wave >= 1, { timeout: 6000 }).catch(() => {});
  await page.waitForTimeout(300);

  // 剧情横幅
  out.storyWave1Active = await page.evaluate(() => document.querySelector('#story-banner').classList.contains('active'));
  out.storyWave1Text = await page.$eval('#story-banner strong', (e) => e.textContent).catch(() => '');
  await page.evaluate(() => { window.game.startWave(); window.game.startWave(); });
  await page.waitForTimeout(300);
  out.storyWave3Text = await page.$eval('#story-banner strong', (e) => e.textContent).catch(() => '');

  // 进入整备页
  await page.evaluate(() => { window.game.offerUpgrades(); });
  await page.waitForTimeout(400);

  out.upgradeActive = await page.evaluate(() => document.querySelector('#upgrade-screen').classList.contains('active'));
  out.freePhaseVisible = await page.evaluate(() => { const el = document.querySelector('#free-phase'); return el && getComputedStyle(el).display !== 'none'; });
  out.shopPhaseHidden = await page.evaluate(() => { const el = document.querySelector('#shop-phase'); return el && getComputedStyle(el).display === 'none'; });
  out.freeCount = await page.$$eval('#free-choices [data-free]', (els) => els.length);
  out.shopCells = await page.$$eval('#shop-panel .shop-cell', (els) => els.length);
  out.deployDisabledBefore = await page.$eval('#deploy-button', (e) => e.disabled);
  out.rerollFreeEnabledBefore = await page.$eval('#reroll-free-button', (e) => !e.disabled);
  out.creditsAtUpgrade = await page.evaluate(() => window.game.credits);

  // BUG FIX 验证：领取免费后，reroll-free 必须禁用
  await page.click('#free-choices [data-free="0"]');
  await page.waitForTimeout(200);
  out.deployDisabledAfterPick = await page.$eval('#deploy-button', (e) => e.disabled);
  out.freePickedState = await page.evaluate(() => window.game.freePicked);
  out.rerollFreeDisabledAfterPick = await page.$eval('#reroll-free-button', (e) => e.disabled);
  out.freePickedClass = await page.$eval('#free-choices [data-free="0"]', (e) => e.classList.contains('picked'));

  // 阶段一刷新在“已领取”后点击不应再给一次免费（rerollFree 被 freePicked 拦截）
  const creditsBeforeBadReroll = await page.evaluate(() => window.game.credits);
  await page.evaluate(() => window.game.rerollFree());
  await page.waitForTimeout(150);
  out.creditsUnchangedAfterBlockedReroll = (await page.evaluate(() => window.game.credits)) === creditsBeforeBadReroll;

  // 阶段二：前往补给商店
  await page.click('#to-shop-button');
  await page.waitForTimeout(300);
  out.shopPhaseVisible = await page.evaluate(() => { const el = document.querySelector('#shop-phase'); return el && getComputedStyle(el).display !== 'none'; });
  out.freePhaseHiddenAfterGoto = await page.evaluate(() => { const el = document.querySelector('#free-phase'); return el && getComputedStyle(el).display === 'none'; });
  out.shopCreditsText = await page.$eval('#shop-credits', (e) => e.textContent);

  // 阶段二刷新货架（保留锁定）
  const namesBeforeReroll = await page.$$eval('#shop-panel .shop-item strong', (els) => els.map((e) => e.textContent));
  const creditsBeforeReroll = await page.evaluate(() => window.game.credits);
  await page.click('#reroll-shop-button');
  await page.waitForTimeout(200);
  const namesAfterReroll = await page.$$eval('#shop-panel .shop-item strong', (els) => els.map((e) => e.textContent));
  out.shopRerollCreditsDrop = creditsBeforeReroll - (await page.evaluate(() => window.game.credits));
  out.shopRerollChanged = JSON.stringify(namesBeforeReroll) !== JSON.stringify(namesAfterReroll);

  // 购买一件可负担物品
  const buyIdx = await page.evaluate(() => {
    const items = window.game.currentShop;
    for (let i = 0; i < items.length; i++) if (!items[i].sold && items[i].price <= window.game.credits) return i;
    return -1;
  });
  out.buyIdx = buyIdx;
  if (buyIdx >= 0) {
    const before = await page.evaluate(() => window.game.credits);
    await page.click(`#shop-panel [data-shop="${buyIdx}"]`);
    await page.waitForTimeout(150);
    out.creditsAfterBuy = await page.evaluate(() => window.game.credits);
    out.boughtSold = await page.evaluate((i) => window.game.currentShop[i].sold, buyIdx);
    out.creditsDropBuy = before - out.creditsAfterBuy;
  }

  // 出击
  await page.click('#deploy-button');
  await page.waitForTimeout(300);
  out.stateAfterDeploy = await page.evaluate(() => window.game.state);

  // 连击 HUD：模拟连续命中
  await page.evaluate(() => { window.game.hitCombo = 7; window.game.hitComboTimer = 3; window.game.combo = 2.4; });
  await page.waitForTimeout(200);
  out.comboCount = await page.$eval('#combo-count', (e) => e.textContent);
  out.comboMult = await page.$eval('#combo-mult', (e) => e.textContent);
  out.comboDisplayActive = await page.evaluate(() => document.querySelector('#combo-display').classList.contains('active'));

  // ===== 作弊面板 =====
  await page.evaluate(() => window.game.toggleCheatConsole(true));
  await page.waitForTimeout(200);
  out.cheatActive = await page.evaluate(() => document.querySelector('#cheat-console').classList.contains('active'));
  out.cheatToggleCount = await page.$$eval('#cheat-buttons [data-cheat-key]', (els) => els.length);
  out.cheatActionCount = await page.$$eval('#cheat-buttons [data-cheat]:not([data-cheat-key])', (els) => els.length);
  out.cheatDisclaimer = await page.$eval('.cheat-disclaimer', (e) => e.textContent.trim().slice(0, 12)).catch(() => '');

  // 点按「无敌」→ 高亮 + cheated → 徽章显示非正规对局
  await page.evaluate(() => document.querySelector('#cheat-buttons [data-cheat="godmode"]').click());
  await page.waitForTimeout(150);
  out.godActive = await page.evaluate(() => window.game.cheats.god);
  out.godBtnActive = await page.$eval('#cheat-buttons [data-cheat-key="god"]', (e) => e.classList.contains('active'));
  out.badgeUnranked = await page.evaluate(() => { const el = document.querySelector('#cheat-badge'); return el.classList.contains('show') && /UNRANKED/.test(el.textContent); });

  // OVERBOUND 全开 → 切换键全部高亮
  await page.evaluate(() => document.querySelector('#cheat-buttons [data-cheat="overbound"]').click());
  await page.waitForTimeout(150);
  out.allCheatOn = await page.evaluate(() => Object.values(window.game.cheats).every(Boolean));
  out.activeToggleBtns = await page.$$eval('#cheat-buttons [data-cheat-key].active', (els) => els.length);
  await page.evaluate(() => window.game.toggleCheatConsole(false));
  await page.waitForTimeout(150);
  out.cheatClosed = await page.evaluate(() => !document.querySelector('#cheat-console').classList.contains('active'));
  await page.close();
} catch (e) {
  out.fatalDesktop = e.message;
}

// ============ MOBILE ============
try {
  const m = await newPage({ width: 844, height: 390, isMobile: true, hasTouch: true });
  await m.goto(url, { waitUntil: 'networkidle' });
  await m.waitForSelector('#start-button', { timeout: 8000 });
  await m.click('#start-button');
  await m.waitForFunction(() => window.game && window.game.wave >= 1, { timeout: 6000 }).catch(() => {});
  await m.waitForTimeout(300);
  // 真实手机：Game.js 设 data-device=mobile（竖屏走 pointer:coarse 定位，横屏走 board.css 定位）。
  // 无头环境判定成 desktop，这里手动补 data-device=mobile + 横屏以验证移动控件与暂停按钮的点击路径。
  out.touchDetected = await m.evaluate(() => window.game.isTouch);
  await m.evaluate(() => document.documentElement.setAttribute('data-device', 'mobile'));

  out.mobileControlsVisible = await m.evaluate(() => { const el = document.querySelector('#mobile-controls'); return el && getComputedStyle(el).display !== 'none'; });
  out.hudPauseHiddenOnMobile = await m.evaluate(() => { const el = document.querySelector('#pause-button'); return getComputedStyle(el).display === 'none'; });
  out.mobilePauseVisible = await m.evaluate(() => { const el = document.querySelector('#mobile-pause'); return el && getComputedStyle(el).display !== 'none'; });

  // 手机暂停按钮坐标与层级诊断
  out.mobilePauseRect = await m.evaluate(() => { const r = document.querySelector('#mobile-pause').getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }; });
  out.elementAtPauseBtn = await m.evaluate(() => { const r = document.querySelector('#mobile-pause').getBoundingClientRect(); const el = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); return el ? (el.id || el.className || el.tagName) : 'none'; });
  out.canvasZ = await m.evaluate(() => getComputedStyle(document.querySelector('#game-canvas')).zIndex);
  out.hudZ = await m.evaluate(() => getComputedStyle(document.querySelector('#hud')).zIndex);
  // 验证手机暂停按钮处理器（elementFromPoint 已确认该坐标顶层即 mobile-pause，等于真实点按命中该按钮）
  await m.evaluate(() => document.querySelector('#mobile-pause').click());
  await m.waitForTimeout(300);
  out.statePaused = await m.evaluate(() => window.game.state);
  out.pauseScreenActive = await m.evaluate(() => document.querySelector('#pause-screen').classList.contains('active'));

  // 点击继续行动 → 回到游戏
  await m.evaluate(() => document.querySelector('#resume-button').click());
  await m.waitForTimeout(300);
  out.stateResumed = await m.evaluate(() => window.game.state);
  await m.close();
} catch (e) {
  out.fatalMobile = e.message;
}

out.errors = errors;
console.log('SMOKE_RESULT ' + JSON.stringify(out, null, 2));

await browser.close();
server.close();
