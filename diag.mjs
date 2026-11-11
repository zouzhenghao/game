import { chromium } from 'playwright-core';
const exe='C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const b=await chromium.launch({executablePath:exe});
async function probe(name,opts){
  const ctx=await b.newContext(opts);const p=await ctx.newPage();
  await p.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
  await p.waitForSelector('#start-button',{timeout:8000});
  await p.click('#start-button');
  await p.waitForFunction(()=>window.game&&window.game.wave>=1,{timeout:6000}).catch(()=>{});
  await p.waitForTimeout(300);
  const info=await p.evaluate(()=>{
    const dd=document.documentElement.getAttribute('data-device');
    const coarse=matchMedia('(pointer:coarse)').matches;
    const touch=matchMedia('(hover:none)').matches;
    const mtp=navigator.maxTouchPoints;
    const disp=(s)=>{const el=document.querySelector(s);if(!el)return 'MISSING';const cs=getComputedStyle(el);return cs.display+'/vis:'+cs.visibility+'/z:'+cs.zIndex;};
    return {dd,coarse,touch,mtp,
      mobileControls:disp('.mobile-controls'),
      waveInfo:disp('#wave-info'), weaponHud:disp('#weapon-hud'),
      hud:disp('#hud'), skillBar:disp('#skill-bar'),
      gameIsTouch:window.game?.isTouch, gameState:window.game?.state};
  });
  console.log('=== '+name+' ===', JSON.stringify(info));
  await ctx.close();
}
await probe('desktop',{width:1280,height:800});
await probe('mobile-portrait',{width:390,height:844,isMobile:true,hasTouch:true});
await b.close();
