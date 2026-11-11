import { chromium } from 'playwright-core';
import { existsSync, statSync } from 'fs';
const exe = 'C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const url = 'http://localhost:4173/';
const b = await chromium.launch({ executablePath: exe });
const shots = [];
async function shot(name, opts, fn){
  const ctx = await b.newContext(opts);
  const p = await ctx.newPage();
  const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text())}); p.on('pageerror',e=>errs.push('PAGEERR:'+e.message));
  await p.goto(url,{waitUntil:'domcontentloaded'});
  await p.waitForSelector('#start-button',{timeout:8000});
  await p.click('#start-button');
  await p.waitForFunction(()=>window.game&&window.game.wave>=1,{timeout:6000}).catch(()=>{});
  await p.waitForTimeout(500);
  await fn(p);
  await p.waitForTimeout(300);
  const fp='/c/Users/ASUS/WorkBuddy/2026-10-31-20-15-00/shots/'+name+'.png';
  try { await p.screenshot({path:fp}); console.log(name,'shot ok', existsSync(fp)?statSync(fp).size:'NO'); } catch(e){ console.log(name,'shot ERR', e.message); }
  console.log(name, 'errors:', errs.length);
  await ctx.close();
}
// desktop normal
await shot('desktop', {width:1280,height:800}, async(p)=>{
  await p.evaluate(()=>{ window.game.hitCombo=7; window.game.updateHUD(); });
});
// desktop cheat badge
await shot('desktop-cheat', {width:1280,height:800}, async(p)=>{
  await p.evaluate(()=>{ try{ window.game.applyCheat('arsenal'); }catch(e){} window.game.refreshCheatBadge(); });
});
// mobile portrait with skill
await shot('mobile-portrait', {width:390,height:844,isMobile:true,hasTouch:true}, async(p)=>{
  await p.evaluate(()=>{ document.documentElement.setAttribute('data-device','mobile'); window.game.credits=9999; window.game.offerUpgrades(); window.game.gotoShop(); });
  // buy a skill then deploy
  await p.evaluate(()=>{ const i=window.game.currentShop.findIndex(s=>s.category==='skill'); if(i>=0) window.game.buyShopItem(i); window.game.deploy(); });
  await p.waitForTimeout(400);
});
// mobile portrait upgrade screen (two-phase shop)
await shot('mobile-shop', {width:390,height:844,isMobile:true,hasTouch:true}, async(p)=>{
  await p.evaluate(()=>{ document.documentElement.setAttribute('data-device','mobile'); window.game.credits=99999; window.game.offerUpgrades(); });
});
await b.close();
console.log('done');
