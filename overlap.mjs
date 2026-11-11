import { chromium } from 'playwright-core';
const exe='C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const b=await chromium.launch({executablePath:exe});
const url='http://127.0.0.1:4173/';
const SEL=['.wave-info','#combo-display','.cheat-badge','.skill-bar','.weapon-hud','.hud-bottom-left','.hud-top-left','.hud-top-right','.mobile-skills','.mobile-fire','.touch-stick','#mobile-pause','.mobile-small.reload','.mobile-small.switch','.mobile-small.dash','.mobile-small.pulse','.objective','#gauntlet-timer'];
function rects(p){return p.evaluate((sels)=>{const o={};for(const s of sels){const el=document.querySelector(s);if(!el)continue;
  // 祖先隐藏则跳过
  let n=el,hidden=false;while(n){const cs=getComputedStyle(n);if(cs.display==='none'||cs.visibility==='hidden'){hidden=true;break;}n=n.parentElement;}
  if(hidden)continue;
  const r=el.getBoundingClientRect();if(r.width===0&&r.height===0)continue;
  o[s]={x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),bottom:Math.round(r.bottom),right:Math.round(r.right)};}
  return o;},SEL);}
function overlap(a,b){return !(a.right<=b.x||b.right<=a.x||a.bottom<=b.y||b.bottom<=a.y);}
async function run(name,opts,setup){
  const ctx=await b.newContext(opts);const p=await ctx.newPage();
  await p.goto(url,{waitUntil:'domcontentloaded'});
  await p.waitForSelector('#start-button',{timeout:8000});
  await p.click('#start-button');
  await p.waitForFunction(()=>window.game&&window.game.wave>=1,{timeout:6000}).catch(()=>{});
  await setup(p);
  await p.waitForTimeout(300);
  const R=await rects(p);
  const keys=Object.keys(R);const hits=[];
  for(let i=0;i<keys.length;i++)for(let j=i+1;j<keys.length;j++){
    // 排除透明瞄准层 look-zone 的误报
    const a=keys[i],cb=keys[j];
    if(a==='.look-zone'||cb==='.look-zone')continue;
    if(overlap(R[a],R[cb]))hits.push(a+' × '+cb);
  }
  console.log('=== '+name+' ===');
  console.log('visible:',keys.join(', '));
  console.log('OVERLAPS:',hits.length?hits.join('  |  '):'NONE');
  await ctx.close();
}
await run('desktop-1280',{width:1280,height:800},async(p)=>{
  await p.evaluate(()=>{window.game.hitCombo=8;window.game.updateHUD();try{window.game.applyCheat('arsenal');}catch(e){}window.game.refreshCheatBadge();window.game.player.skills.push({id:'x',name:'X',icon:'⚡',cooldown:0,max:10});window.game.callbacks.onHUD&&window.game.updateHUD();});
});
await run('desktop-1024',{width:1024,height:640},async(p)=>{
  await p.evaluate(()=>{window.game.hitCombo=8;window.game.updateHUD();window.game.player.skills.push({id:'x',name:'X',icon:'⚡',cooldown:0,max:10});});
});
await run('mobile-portrait',{width:390,height:844,isMobile:true,hasTouch:true},async(p)=>{
  await p.evaluate(()=>{document.documentElement.setAttribute('data-device','mobile');window.game.credits=9999;window.game.offerUpgrades();window.game.gotoShop();const i=window.game.currentShop.findIndex(s=>s.category==='skill');if(i>=0)window.game.buyShopItem(i);window.game.deploy();window.game.hitCombo=8;window.game.updateHUD();});
});
await run('mobile-landscape',{width:844,height:390,isMobile:true,hasTouch:true},async(p)=>{
  await p.evaluate(()=>{document.documentElement.setAttribute('data-device','mobile');window.game.credits=9999;window.game.offerUpgrades();window.game.gotoShop();const i=window.game.currentShop.findIndex(s=>s.category==='skill');if(i>=0)window.game.buyShopItem(i);window.game.deploy();window.game.hitCombo=8;window.game.updateHUD();});
});
await b.close();
