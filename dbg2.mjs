import { chromium } from 'playwright-core';
import { existsSync, statSync } from 'fs';
const exe='C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const b=await chromium.launch({executablePath:exe});
const ctx=await b.newContext({width:1280,height:800});
const p=await ctx.newPage();
const errs=[]; p.on('pageerror',e=>errs.push('PE:'+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('http://127.0.0.1:4173/',{waitUntil:'domcontentloaded'});
await p.waitForSelector('#start-button',{timeout:8000});
await p.click('#start-button');
await p.waitForFunction(()=>window.game&&window.game.wave>=1,{timeout:6000}).catch(()=>{});
await p.waitForTimeout(600);
const path='C:/Users/ASUS/WorkBuddy/2026-10-31-20-15-00/shots/dbg2.png';
try{ await p.screenshot({path}); console.log('shot ok'); }catch(e){ console.log('shot ERR', e.message); }
console.log('exists:', existsSync(path), existsSync(path)?statSync(path).size:0, 'errs:', errs.length);
await b.close();
