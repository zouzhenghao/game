import { chromium } from 'playwright-core';
const exe='C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const b=await chromium.launch({executablePath:exe});
const url='http://127.0.0.1:4173/';
const SEL=['.wave-info','#combo-display','.cheat-badge','.weapon-hud','.hud-top-right','.mobile-skills','.mobile-fire','.touch-stick','#mobile-pause','.mobile-small.reload','.mobile-small.switch','.mobile-small.dash','.mobile-small.pulse'];
async function run(name,opts,setup){
  const ctx=await b.newContext(opts);const p=await ctx.newPage();
  await p.goto(url,{waitUntil:'domcontentloaded'});
  await p.waitForSelector('#start-button',{timeout:8000});
  await p.click('#start-button');
  await p.waitForFunction(()=>window.game&&window.game.wave>=1,{timeout:6000}).catch(()=>{});
  await setup(p);
  await p.waitForTimeout(300);
  const info=await p.evaluate((sels)=>{const vw=innerWidth,vh=innerHeight;const dd=document.documentElement.getAttribute('data-device');const coarse=matchMedia('(pointer:coarse)').matches;const m760=matchMedia('(max-width:760px)').matches;const o={vw,vh,dd,coarse,m760};for(const s of sels){const el=document.querySelector(s);if(!el)continue;let n=el,h=false;while(n){const cs=getComputedStyle(n);if(cs.display==='none'||cs.visibility==='hidden'){h=true;break;}n=n.parentElement;}if(h)continue;const r=el.getBoundingClientRect();if(r.width===0&&r.height===0)continue;o[s]={x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),b:Math.round(r.bottom),r:Math.round(r.right)};}return o;},SEL);
  console.log('=== '+name+' ===', JSON.stringify({vw:info.vw,vh:info.vh,dd:info.dd,coarse:info.coarse,m760:info.m760}));
  for(const k of Object.keys(info)){if(['vw','vh','dd','coarse','m760'].includes(k))continue;console.log(k.padEnd(20),JSON.stringify(info[k]));}
  await ctx.close();
}
await run('mobile-portrait',{viewport:{width:390,height:844},isMobile:true,hasTouch:true},async(p)=>{
  await p.evaluate(()=>{window.game.credits=9999;window.game.offerUpgrades();window.game.gotoShop();const i=window.game.currentShop.findIndex(s=>s.category==='skill');if(i>=0)window.game.buyShopItem(i);window.game.deploy();window.game.hitCombo=8;window.game.updateHUD();});
});
await run('mobile-landscape',{viewport:{width:844,height:390},isMobile:true,hasTouch:true},async(p)=>{
  await p.evaluate(()=>{window.game.credits=9999;window.game.offerUpgrades();window.game.gotoShop();const i=window.game.currentShop.findIndex(s=>s.category==='skill');if(i>=0)window.game.buyShopItem(i);window.game.deploy();window.game.hitCombo=8;window.game.updateHUD();});
});
await b.close();
