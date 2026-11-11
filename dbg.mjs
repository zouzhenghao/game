import { chromium } from 'playwright-core';
import { existsSync, statSync } from 'fs';
const exe='C:/Users/ASUS/AppData/Local/ms-playwright/chromium-1134/chrome-win/chrome.exe';
const b=await chromium.launch({executablePath:exe});
const p=await b.newContext({width:800,height:600}).then(c=>c.newPage());
await p.setContent('<h1 style="color:red">hello</h1>');
const path='C:/Users/ASUS/WorkBuddy/2026-10-31-20-15-00/shots/dbg.png';
try{ await p.screenshot({path}); console.log('shot ok'); }catch(e){ console.log('shot ERR', e.message); }
console.log('exists:', existsSync(path), existsSync(path)?statSync(path).size:0);
await b.close();
