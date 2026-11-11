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
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

const out = {};
try {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForSelector('#start-button', { timeout: 8000 });
  await page.click('#start-button');
  await page.waitForFunction(() => window.game && window.game.wave >= 1, { timeout: 6000 }).catch(() => {});
  await page.waitForTimeout(250);

  // 剧情横幅：第一波应显示第一章；推进到第 3 波应切换到第二章
  out.storyWave1Active = await page.evaluate(() => document.querySelector('#story-banner').classList.contains('active'));
  out.storyWave1Text = await page.$eval('#story-banner strong', (e) => e.textContent).catch(() => '');
  await page.evaluate(() => { window.game.startWave(); window.game.startWave(); });
  await page.waitForTimeout(250);
  out.storyWave3Text = await page.$eval('#story-banner strong', (e) => e.textContent).catch(() => '');

  // 强制进入整备页
  await page.evaluate(() => { window.game.offerUpgrades(); });
  await page.waitForTimeout(400);

  out.upgradeActive = await page.evaluate(() => document.querySelector('#upgrade-screen').classList.contains('active'));
  out.freeCount = await page.$$eval('#free-choices [data-free]', (els) => els.length);
  out.shopCells = await page.$$eval('#shop-panel .shop-cell', (els) => els.length);
  out.rerollLabel = await page.$eval('#reroll-label', (e) => e.textContent);
  out.deployDisabledBefore = await page.$eval('#deploy-button', (e) => e.disabled);
  out.creditsBefore = await page.evaluate(() => window.game.credits);

  // 领取第一项免费强化
  await page.click('#free-choices [data-free="0"]');
  await page.waitForTimeout(200);
  out.deployDisabledAfter = await page.$eval('#deploy-button', (e) => e.disabled);
  out.pickedHasClass = await page.$eval('#free-choices [data-free="0"]', (e) => e.classList.contains('picked'));
  out.freePickedState = await page.evaluate(() => window.game.freePicked);

  // 锁定第一项货架（非已售）
  out.firstShopSoldBefore = await page.$$eval('#shop-panel .shop-item', (els) =>
    els.map((e) => e.classList.contains('sold')));
  await page.click('#shop-panel .lock-btn');
  await page.waitForTimeout(150);
  out.firstLocked = await page.$eval('#shop-panel .lock-btn', (e) => e.classList.contains('locked'));

  // 出击
  await page.click('#deploy-button');
  await page.waitForTimeout(300);
  out.stateAfterDeploy = await page.evaluate(() => window.game.state);

  // 重新整备测试刷新
  await page.evaluate(() => { window.game.offerUpgrades(); });
  await page.waitForTimeout(200);
  out.freeNamesBeforeReroll = await page.$$eval('#free-choices .free-card h3', (els) => els.map((e) => e.textContent));
  out.creditsBeforeReroll = await page.evaluate(() => window.game.credits);
  out.rerollDisabledBefore = await page.$eval('#reroll-button', (e) => e.disabled);
  if (!out.rerollDisabledBefore) {
    await page.click('#reroll-button');
    await page.waitForTimeout(200);
    out.freeNamesAfterReroll = await page.$$eval('#free-choices .free-card h3', (els) => els.map((e) => e.textContent));
    out.creditsAfterReroll = await page.evaluate(() => window.game.credits);
    out.deployDisabledAfterReroll = await page.$eval('#deploy-button', (e) => e.disabled);
  } else {
    out.freeNamesAfterReroll = 'reroll-disabled-unaffordable';
  }

  // 购买一件可负担物品（先领取免费以解锁部署无关，直接买）
  await page.click('#free-choices [data-free="0"]');
  await page.waitForTimeout(150);
  // 找到第一个未售且可购买的物品下标
  const buyIdx = await page.evaluate(() => {
    const items = window.game.currentShop;
    for (let i = 0; i < items.length; i++) {
      if (!items[i].sold && items[i].price <= window.game.credits) return i;
    }
    return -1;
  });
  out.buyIdx = buyIdx;
  if (buyIdx >= 0) {
    const before = await page.evaluate(() => window.game.credits);
    await page.click(`#shop-panel [data-shop="${buyIdx}"]`);
    await page.waitForTimeout(150);
    out.creditsAfterBuy = await page.evaluate(() => window.game.credits);
    out.boughtSold = await page.evaluate((i) => window.game.currentShop[i].sold, buyIdx);
    out.creditsDrop = before - out.creditsAfterBuy;
  }

  // ===== 作弊面板（手机 / 鼠标点按）=====
  // 先退出整备页回到游戏中，再开启作弊面板（避免 upgrade-screen 遮挡）
  await page.evaluate(() => { if (window.game.state === 'upgrade') window.game.deploy(); });
  await page.waitForTimeout(400);
  // 直接调用开启，验证 active 类与按钮网格渲染
  await page.evaluate(() => window.game.toggleCheatConsole(true));
  await page.waitForTimeout(200);
  out.cheatActive = await page.evaluate(() => document.querySelector('#cheat-console').classList.contains('active'));
  out.cheatBtnCount = await page.$$eval('#cheat-buttons [data-cheat]', (els) => els.length);
  out.cheatToggleCount = await page.$$eval('#cheat-buttons [data-cheat-key]', (els) => els.length);
  // 点按「无敌」开关，验证高亮 + 状态同步（用 JS 派发，规避卡片内 overflow 滚动导致的坐标拦截）
  await page.evaluate(() => document.querySelector('#cheat-buttons [data-cheat="godmode"]').click());
  await page.waitForTimeout(150);
  out.godActive = await page.evaluate(() => window.game.cheats.god);
  out.godBtnActive = await page.$eval('#cheat-buttons [data-cheat-key="god"]', (e) => e.classList.contains('active'));
  // 点按 OVERBOUND 全开，验证 6 个切换键全部高亮
  await page.evaluate(() => document.querySelector('#cheat-buttons [data-cheat="overbound"]').click());
  await page.waitForTimeout(150);
  out.allCheatOn = await page.evaluate(() => Object.values(window.game.cheats).every(Boolean));
  out.activeToggleBtns = await page.$$eval('#cheat-buttons [data-cheat-key].active', (els) => els.length);
  await page.evaluate(() => window.game.toggleCheatConsole(false));
  await page.waitForTimeout(150);
  out.cheatClosedActive = await page.evaluate(() => document.querySelector('#cheat-console').classList.contains('active'));

} catch (e) {
  out.fatal = e.message;
}

out.errors = errors;
console.log('SMOKE_RESULT ' + JSON.stringify(out, null, 2));

await browser.close();
server.close();
