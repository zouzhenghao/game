import { chromium } from 'playwright-core';
const exe='C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const b=await chromium.launch({executablePath:exe});
const url='http://127.0.0.1:4173/';
const SEL=['.wave-info','#combo-display','.cheat-badge','.skill-bar','.mobile-skills','.weapon-hud','.hud-bottom-left','.hud-top-left','.hud-top-right','.mobile-fire','.touch-stick','#mobile-pause','.mobile-small.reload','.mobile-small.switch','.mobile-small.dash','.mobile-small.pulse','.objective','#gauntlet-timer'];
function rects(p){return p.evaluate((sels)=>{const o={};for(const s of sels){const el=document.querySelector(s);if(!el)continue;let n=el,h=false;while(n){const cs=getComputedStyle(n);if(cs.display==='none'||cs.visibility==='hidden'){h=true;break;}n=n.parentElement;}if(h)continue;const r=el.getBoundingClientRect();if(r.width===0&&r.height===0)continue;o[s]={x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),b:Math.round(r.bottom),r:Math.round(r.right)};}return o;},SEL);}
function overlap(a,b){return !(a.right<=b.x||b.right<=a.x||a.bottom<=b.y||b.bottom<=a.y);}
async function run(name,opts,setup){
  const ctx=await b.newContext(opts);const p=await ctx.newPage();
  await p.goto(url,{waitUntil:'domcontentloaded'});
  await p.waitForSelector('#start-button',{timeout:8000});
  await p.click('#start-button');
  await p.waitForFunction(()=>window.game&&window.game.wave>=1,{timeout:6000}).catch(()=>{});
  await setup(p);
  await p.waitForTimeout(350);
  const R=await rects(p);
  const keys=Object.keys(R);const hits=[];
  for(let i=0;i<keys.length;i++)for(let j=i+1;j<keys.length;j++){const a=keys[i],cb=keys[j];
    if(a==='.look-zone'||cb==='.look-zone')continue;
    if(overlap(R[a],R[cb]))hits.push(a+' × '+cb);}
  console.log('=== '+name+' ===  visible:'+keys.length+'  OVERLAPS:',hits.length?hits.join(' | '):'NONE');
  await ctx.close();
}
// 桌面：作弊徽章 + 连击 + 技能
await run('desktop-1280',{viewport:{width:1280,height:800}},async(p)=>{
  await p.evaluate(()=>{window.game.hitCombo=8;window.game.updateHUD();try{window.game.applyCheat('arsenal');}catch(e){}window.game.refreshCheatBadge();document.querySelector('.cheat-badge')?.classList.add('show');window.game.player.skills.push({id:'x',name:'X',icon:'⚡',cooldown:0,max:10});window.game.renderSkills&&window.game.renderSkills();});
});
// 竖屏：作弊徽章 + 连击 + 技能
await run('mobile-portrait',{viewport:{width:390,height:844},isMobile:true,hasTouch:true},async(p)=>{
  await p.evaluate(()=>{window.game.hitCombo=8;window.game.updateHUD();try{window.game.applyCheat('arsenal');}catch(e){}window.game.refreshCheatBadge();document.querySelector('.cheat-badge')?.classList.add('show');window.game.credits=9999;window.game.offerUpgrades();window.game.gotoShop();const i=window.game.currentShop.findIndex(s=>s.category==='skill');if(i>=0)window.game.buyShopItem(i);window.game.deploy();});
});
// 横屏：作弊徽章 + 连击 + 技能
await run('mobile-landscape',{viewport:{width:844,height:390},isMobile:true,hasTouch:true},async(p)=>{
  await p.evaluate(()=>{window.game.hitCombo=8;window.game.updateHUD();try{window.game.applyCheat('arsenal');}catch(e){}window.game.refreshCheatBadge();document.querySelector('.cheat-badge')?.classList.add('show');window.game.credits=9999;window.game.offerUpgrades();window.game.gotoShop();const i=window.game.currentShop.findIndex(s=>s.category==='skill');if(i>=0)window.game.buyShopItem(i);window.game.deploy();});
});
await b.close();
