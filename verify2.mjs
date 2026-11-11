import { chromium } from 'playwright-core';

const EXE = 'C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const URL = 'http://127.0.0.1:4173/';

const SELS = [
  '.wave-info', '.weapon-hud', '.hud-top-right', '.score-box', '#radar',
  '.mobile-fire', '.mobile-small.reload', '.mobile-small.switch',
  '.mobile-small.dash', '.mobile-small.pulse', '.mobile-small.jump',
  '.mobile-small.slide', '.mobile-small.cheat', '.mobile-small.scope',
  '.mobile-small.pause', '.mobile-small.overdrive', '.touch-stick',
  '.mobile-skills', '.energy-block', '.combo-display', '.kill-feed',
  '.announcer', '.hud-pause',
];

const MODES = [
  { name: 'desktop', device: 'desktop', ctx: { viewport: { width: 1280, height: 720 } } },
  { name: 'mobile-portrait', device: 'mobile', ctx: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } },
  { name: 'mobile-landscape', device: 'mobile', ctx: { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } },
];

function overlap(a, b) {
  const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return { ix, iy, area: ix * iy };
}

const browser = await chromium.launch({ executablePath: EXE, headless: true });

for (const mode of MODES) {
  const ctx = await browser.newContext(mode.ctx);
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  // simulate what Game.js detectProfile sets on real devices
  await page.evaluate((dev) => {
    document.documentElement.setAttribute('data-device', dev);
    const hud = document.querySelector('.hud');
    if (hud) hud.classList.add('active');
  }, mode.device);
  await page.waitForTimeout(200);

  const data = await page.evaluate((SELS) => {
    const out = [];
    for (const sel of SELS) {
      const el = document.querySelector(sel);
      if (!el) { out.push({ sel, missing: true }); continue; }
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const visible = cs.display !== 'none' && r.width > 0 && r.height > 0;
      out.push({ sel, display: cs.display, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }, visible });
    }
    return out;
  }, SELS);

  console.log(`\n========== MODE: ${mode.name} (${mode.ctx.viewport.width}x${mode.ctx.viewport.height}, data-device=${mode.device}) ==========`);
  const visible = data.filter((d) => d.visible && !d.missing);
  for (const d of data) {
    if (d.missing) { console.log(`  ${d.sel.padEnd(24)} MISSING`); continue; }
    console.log(`  ${d.sel.padEnd(22)} ${d.visible ? 'VIS' : 'hid'} rect=${JSON.stringify(d.rect)}`);
  }
  console.log('  --- overlaps (>=4px both axes, excluding parent/child) ---');
  let found = 0;
  for (let i = 0; i < visible.length; i++) {
    for (let j = i + 1; j < visible.length; j++) {
      const a = visible[i], b = visible[j];
      // skip parent/child containment (e.g. hud-top-right contains score-box/radar)
      const parent = a.sel === '.hud-top-right' || b.sel === '.hud-top-right' ||
                     a.sel === '.weapon-hud' || b.sel === '.weapon-hud';
      const o = overlap(a.rect, b.rect);
      if (o.ix >= 4 && o.iy >= 4 && !parent) {
        console.log(`  ⚠ ${a.sel} ∩ ${b.sel}  overlap ${o.ix}x${o.iy}px`);
        found++;
      }
    }
  }
  if (found === 0) console.log('  ✅ no real overlaps');
  await ctx.close();
}
await browser.close();
console.log('\nDONE');
