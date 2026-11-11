import './style.css';
import './board.css';
import { Game, ACHIEVEMENTS, detectProfile, WEAPONS, WEAPON_CATEGORY_LABEL, DIFFICULTY } from './game/Game.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const pad = (number, size = 2) => String(Math.max(0, Math.floor(number))).padStart(size, '0');
const formatScore = (number) => Math.floor(number).toLocaleString('en-US').replaceAll(',', ',');

// 设备档位必须在 Game 实例化之前确定：渲染分辨率、阴影与输入方式都依赖它。
const deviceProfile = detectProfile();
document.documentElement.dataset.device = deviceProfile;
const deviceNames = { desktop: 'DEVICE / DESKTOP', mobile: 'DEVICE / MOBILE', board: 'DEVICE / SEEWO BOARD' };
$('#device-badge').textContent = deviceNames[deviceProfile];

let selectedMode = 'campaign';
let selectedDifficulty = 'standard';
let selectedStartWeapon = 0;
let lastMode = 'campaign';
let game;
let announceTimer;
let toastTimer;
let achievementTimer;
let storyTimer;
let lastDamageNumber = 0;

const modalTemplates = {
  briefing: `
    <div class="eyebrow">OPERATION / NEON ASHES</div><h2 id="modal-title">作战简报<span>.</span></h2>
    <p class="modal-lead">02:17，第七区战术网络遭到不明机械军团入侵。你是最后一名仍可链接的「幽灵」作战员。以下为 1.0 正式版的完整作战流程。</p>
    <div class="briefing-grid"><div><b>01</b><strong>自定装备</strong><p>开局从手枪 / 步枪 / 狙击三选一，武器库共 15 把，按 1–6 切换已持有武器。</p></div><div><b>02</b><strong>战后补给</strong><p>首波结束即开放补给站：用信用点购买武器与补给，再从肉鸽模块中三选一强化。</p></div><div><b>03</b><strong>战术任务</strong><p>每波随机任务与章节剧情推进；第 3 / 6 / 9 波出现流动商人，靠近按 G 交易。</p></div><div><b>04</b><strong>摧毁核心</strong><p>难度决定通关波数（10 / 15 / 20 / 25 波），最终波迎战守望者；通关后解锁极限难度与战场事件。</p></div></div>
    <div class="intel-row v2"><span>红色敌人擅长突袭</span><span>紫色敌人远程攻击</span><span>橙色重装移动缓慢</span><span>青色幽影会相位隐形</span><span>黄色蜂群贴近后自毁</span><span>绿色单元会修复友军</span><span>琥珀炮台定点轰炸</span><span>青柠游隼高速俯冲</span><span>油桶可被引爆</span></div>`,
  armory: `
    <div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">六把武器均在行动中按波次自动解锁。按 1–6 或滚轮快速切换。</p>
    <div class="armory-list"><article><div class="weapon-silhouette rifle">VX-9</div><div><small>01 / 初始装备</small><h3>VX-9 脉冲</h3><p>稳定的全自动脉冲步枪，适合中距离持续压制。</p><span>伤害 24　·　射速 9/s　·　弹匣 30</span></div></article><article><div class="weapon-silhouette shotgun">SG-12</div><div><small>02 / 第 2 波解锁</small><h3>SG-12 裂解</h3><p>八枚高能弹丸同时释放，近距离可造成毁灭性伤害。</p><span>伤害 14×8　·　射速 1.2/s　·　弹匣 6</span></div></article><article><div class="weapon-silhouette rail">R-01</div><div><small>03 / 第 4 波解锁</small><h3>R-01 磁轨</h3><p>高精度磁轨射线，贯穿一条直线上的所有敌人。</p><span>伤害 135　·　射速 0.8/s　·　弹匣 5</span></div></article><article class="v2"><div class="weapon-silhouette rail">ARC-7</div><div><small>04 / 第 6 波解锁</small><h3>ARC-7 弧光</h3><p>发射链式电弧，命中后自动跳跃到附近敌人，最多连锁 3 个目标。</p><span>伤害 46　·　射速 3.4/s　·　弹匣 24</span></div></article><article class="v2"><div class="weapon-silhouette rocket">WN-5</div><div><small>05 / 第 8 波解锁</small><h3>WN-5 蜂巢</h3><p>六管制导发射器，导弹自动锁定最近敌人，命中后产生范围爆炸，可连爆油桶。</p><span>伤害 120　·　射速 1.1/s　·　弹匣 4</span></div></article><article class="v2"><div class="weapon-silhouette frost">LN-3</div><div><small>06 / 第 9 波解锁</small><h3>LN-3 寒霜</h3><p>低温步枪，命中使敌人减速 50%，是控场与切断冲锋的核心手段。</p><span>伤害 30　·　射速 4.2/s　·　弹匣 22</span></div></article></div>`,
  controls: `
    <div class="eyebrow">NEURAL INTERFACE / MANUAL</div><h2 id="modal-title">操作指南<span>.</span></h2>
    <div class="controls-grid"><div><h3>键鼠操作</h3><p><kbd>W A S D</kbd><span>移动</span></p><p><kbd>鼠标</kbd><span>观察 / 瞄准</span></p><p><kbd>左键 / 右键</kbd><span>射击 / 精确瞄准</span></p><p><kbd>Shift</kbd><span>疾跑（武器下沉）</span></p><p><kbd>Space</kbd><span>跳跃</span></p><p><kbd>Ctrl / C</kbd><span>滑铲</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载（能量满时）</span></p><p><kbd>G</kbd><span>靠近 NPC 商人时交易</span></p><p><kbd>R / 1–6</kbd><span>装填 / 切换已持有武器</span></p><p><kbd>ESC / P</kbd><span>暂停</span></p></div><div><h3>触屏操作</h3><p><kbd>左侧摇杆</kbd><span>移动</span></p><p><kbd>右侧滑动</kbd><span>观察 / 瞄准</span></p><p><kbd>FIRE</kbd><span>按住连续射击</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载</span></p><p><kbd>R / ⇄</kbd><span>装填 / 切换武器</span></p><p><kbd>Ⅱ</kbd><span>暂停</span></p><small>手机端会自动辅助瞄准近距离目标。</small></div></div>
    <p class="modal-lead" style="margin-top:16px">首页「威胁校准」共四档：新兵 10 波、标准 15 波、噩梦 20 波，通关任意战役后解锁「极限」25 波。难度同时影响敌人强度、掉落率、积分倍率与通关波数。</p>
    <div class="board-note"><h3>希沃白板 / 教学一体机</h3><p>首页「设备适配」选择「白板大屏」：左下角<strong>「移动 / MOVE」高对比圆形摇杆</strong>常显（含方向箭头与中心十字），右侧滑动转向，右下 <kbd>FIRE</kbd> 开火，底部技能排含跳跃 / 滑铲 / 冲刺 / 脉冲 / 超载 / 切枪 / 瞄准 / 演示。全部按钮 ≥64px，支持红外多点触控，弹药打空自动装填，无需键盘鼠标。点 <kbd>AUTO</kbd> 开启课堂演示（自动锁敌开火）；<kbd>◎</kbd> 为精确瞄准。</p></div>
    <div class="board-note" style="border-color:#ff4d6d44"><h3>越界协议 // OVERBOUND 作弊码</h3><p>单机训练用外挂。游戏中直接敲字母触发（大小写均可）：<kbd>LOCKON</kbd> 锁头、<kbd>AUTOFIRE</kbd> 自动射击、<kbd>GODMODE</kbd> 无敌、<kbd>INFINITY</kbd> 无限弹药、<kbd>XRAY</kbd> 透视、<kbd>TIMESLIP</kbd> 子弹时间、<kbd>PURGE</kbd> 清场、<kbd>ARSENAL</kbd> 全武器、<kbd>RECHARGE</kbd> 回满、<kbd>OVERBOUND</kbd> 全开、<kbd>STANDDOWN</kbd> 全关。按 <kbd>&#96;</kbd> 或 <kbd>↑↑↓↓←→←→BA</kbd> 展开作弊清单。</p></div>`
};

/** 武器库：按手枪 / 步枪 / 狙击 / 特殊四类展示全部 15 把，标注价格与获取方式。 */
function armoryTemplate() {
  const groups = ['pistol', 'rifle', 'sniper', 'special'].map((category) => {
    const items = WEAPONS.map((w, i) => ({ ...w, i })).filter((w) => w.category === category);
    const cards = items.map((w) => `<article class="${w.i >= 6 ? 'v2' : ''}"><div class="weapon-silhouette ${category}">${w.name.split(' ')[0]}</div><div><small>${w.i >= 6 ? 'V1.0 新增' : '制式装备'} · ${w.price} CR</small><h3>${w.name}</h3><p>${w.desc}</p><span>伤害 ${w.damage}　·　射速 ${w.fireRate}/s　·　弹匣 ${w.magazine}</span></div></article>`).join('');
    return `<div class="armory-group"><h3>${WEAPON_CATEGORY_LABEL[category]}<small>${items.length} 把</small></h3><div class="armory-list">${cards}</div></div>`;
  }).join('');
  return `<div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">15 把武器分为手枪 / 步枪 / 狙击 / 特殊四类。开局任选一把作为起始装备，其余在战后补给站购买或按波次配发。按 1–6 切换已持有武器。</p>${groups}`;
}

function careerTemplate() {
  let career = { runs: 0, kills: 0, wins: 0, bestCombo: 1, achievements: [] };
  try { career = { ...career, ...JSON.parse(localStorage.getItem('nexus-career') || '{}') }; } catch (_) { /* Ignore corrupted storage. */ }
  const unlocked = new Set(career.achievements || []);
  return `
    <div class="eyebrow">OPERATIVE RECORD / ARCHIVE</div><h2 id="modal-title">生涯档案<span>.</span></h2>
    <p class="modal-lead">战绩仅保存在本机浏览器，不会上传。挑战噩梦难度，解锁全部战术徽章。</p>
    <div class="career-grid"><div><small>出击次数</small><strong>${career.runs}</strong></div><div><small>累计击毁</small><strong>${career.kills}</strong></div><div><small>通关次数</small><strong>${career.wins}</strong></div><div><small>最高连击</small><strong>×${Number(career.bestCombo || 1).toFixed(1)}</strong></div></div>
    <div class="eyebrow">战术徽章 · ${unlocked.size} / ${ACHIEVEMENTS.length}</div>
    <div class="achievement-list">${ACHIEVEMENTS.map((item) => `<div class="achievement-item ${unlocked.has(item.id) ? 'unlocked' : ''}"><i>${unlocked.has(item.id) ? '◆' : '◇'}</i><div><strong>${item.name}</strong><small>${item.desc}</small></div></div>`).join('')}</div>`;
}

function showModal(type) {
  $('#modal-content').innerHTML = type === 'career' ? careerTemplate()
    : type === 'armory' ? armoryTemplate()
      : modalTemplates[type];
  $('#modal-backdrop').classList.add('active');
}
function closeModal() { $('#modal-backdrop').classList.remove('active'); }
$$('[data-modal]').forEach((button) => button.addEventListener('click', () => showModal(button.dataset.modal)));
$('#modal-close').addEventListener('click', closeModal);
$('#modal-backdrop').addEventListener('click', (event) => { if (event.target === $('#modal-backdrop')) closeModal(); });

$$('.mode-card').forEach((button) => button.addEventListener('click', () => {
  $$('.mode-card').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  selectedMode = button.dataset.mode;
  game?.audio.ui();
}));

$$('.difficulty-chip').forEach((button) => button.addEventListener('click', () => {
  if (button.dataset.difficulty === 'apex' && localStorage.getItem('nexus-cleared') !== '1') {
    toast('「极限」难度需先通关核心行动（≥ 10 波）', 3200);
    button.classList.add('locked-chip');
    return;
  }
  $$('.difficulty-chip').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  selectedDifficulty = button.dataset.difficulty;
  game?.audio.ui();
}));

function updateUnlockBanner() {
  const cleared = localStorage.getItem('nexus-cleared') === '1';
  $('#unlock-banner').innerHTML = cleared
    ? '<b>◆ 基础战役已通关</b><span>已解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容</span>'
    : '<b>◇ 战役进度</b><span>通关 ≥ 10 波后解锁极限难度、军需官与战场事件</span>';
  $('.locked-chip')?.classList.toggle('unlocked', cleared);
}

$$('.start-weapon-chip').forEach((button) => button.addEventListener('click', () => {
  $$('.start-weapon-chip').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  selectedStartWeapon = Number(button.dataset.start);
  game?.audio.ui();
}));

// 切换设备档位后重载，让渲染器与输入层按新档位重新初始化。
let savedDevice = null;
try { savedDevice = localStorage.getItem('nexus-device'); } catch (_) { /* Storage may be unavailable. */ }
const urlDevice = new URLSearchParams(location.search).get('device');
const forcedDevice = ['desktop', 'mobile', 'board'].includes(urlDevice) ? urlDevice : null;
const activeDevice = forcedDevice || (['desktop', 'mobile', 'board'].includes(savedDevice) ? savedDevice : 'auto');
$$('.device-chip').forEach((button) => {
  button.classList.toggle('selected', button.dataset.device === activeDevice);
  button.addEventListener('click', () => {
    const value = button.dataset.device;
    try {
      if (value === 'auto') localStorage.removeItem('nexus-device');
      else localStorage.setItem('nexus-device', value);
    } catch (_) { /* Storage may be unavailable. */ }
    game?.audio.ui();
    setTimeout(() => location.reload(), 140);
  });
});

function setState(state, data = {}) {
  $('#menu-screen').classList.toggle('active', state === 'menu');
  $('#hud').classList.toggle('active', ['playing', 'paused', 'upgrade', 'shop'].includes(state));
  $('#pause-screen').classList.toggle('active', state === 'paused');
  $('#upgrade-screen').classList.toggle('active', state === 'upgrade');
  $('#shop-screen').classList.toggle('active', state === 'shop');
  $('#end-screen').classList.toggle('active', state === 'ended');
  if (state === 'menu') {
    updateRecords();
    document.exitPointerLock?.();
  }
  if (state === 'ended') showEnd(data);
}

function updateHUD(data) {
  $('#health-fill').style.width = `${Math.max(0, data.health / data.maxHealth * 100)}%`;
  $('#health-value').textContent = Math.ceil(Math.max(0, data.health));
  $('#shield-fill').style.width = `${Math.max(0, data.shield / data.maxShield * 100)}%`;
  $('#shield-value').textContent = Math.ceil(Math.max(0, data.shield));
  $('#wave-value').textContent = pad(data.wave);
  $('#wave-total').textContent = data.mode === 'endless' ? '/ ∞' : `/ ${data.waveTotal || 15}`;
  $('#mode-label').textContent = { campaign: '核心行动', endless: '无尽裂隙', training: '模拟训练', gauntlet: '限时歼灭' }[data.mode] || '核心行动';
  const timer = $('#gauntlet-timer');
  timer.textContent = data.mode === 'gauntlet' ? `剩余 ${Math.ceil(data.waveTimeLeft || 0)}s · 击杀续时` : '';
  timer.classList.toggle('urgent', data.mode === 'gauntlet' && data.waveTimeLeft < 12);
  $('#difficulty-label').textContent = data.difficulty;
  $('#enemy-count').textContent = data.intermission ? '区域暂时安全' : `${data.enemies} 个敌对信号`;
  $('#score-value').textContent = pad(data.score, 6);
  $('#combo-value').textContent = `× ${data.combo.toFixed(1)}`;
  const comboDisplay = $('#combo-display');
  if (comboDisplay) {
    const count = data.comboCount || 0;
    if (Number(comboDisplay.dataset.prev || 0) < count) { comboDisplay.classList.remove('pulse'); void comboDisplay.offsetWidth; comboDisplay.classList.add('pulse'); }
    comboDisplay.dataset.prev = count;
    $('#combo-count').textContent = count;
    $('#combo-mult').textContent = `× ${data.combo.toFixed(1)}`;
    comboDisplay.classList.toggle('hot', count >= 10);
    comboDisplay.classList.toggle('active', count >= 2);
  }
  $('#weapon-name').innerHTML = data.weapon.label;
  $('#weapon-class').textContent = data.weapon.className;
  const scopeEl = $('#scope-readout');
  if (scopeEl) {
    if (data.aiming && data.scopeType === 'sniper') { scopeEl.textContent = `${data.sniperZoom}×`; scopeEl.classList.add('visible'); }
    else scopeEl.classList.remove('visible');
  }
  $('#ammo-value').textContent = pad(data.ammo);
  $('#reserve-value').textContent = data.reserve;
  $('#reload-hint').classList.toggle('visible', data.ammo === 0 || data.reloading);
  $('#reload-hint').textContent = data.reloading ? '正在装填…' : '按 R 装填弹药';
  $('#crosshair').classList.toggle('reloading', data.reloading);
  const slotsHost = $('.weapon-slots');
  const loadout = data.loadout || [0];
  const signature = loadout.join(',');
  if (slotsHost.dataset.signature !== signature) {
    slotsHost.dataset.signature = signature;
    slotsHost.innerHTML = loadout.slice(0, 6).map((absolute, i) => `<span data-slot="${absolute}">${i + 1}</span>`).join('');
  }
  $$('.weapon-slots span').forEach((slot) => slot.classList.toggle('active', Number(slot.dataset.slot) === data.weaponIndex));
  $('#credits-value').textContent = `${Math.floor(data.credits || 0)} CR`;
  updateAbility('#ability-dash', data.dashCooldown, data.dashMax);
  updateAbility('#ability-pulse', data.pulseCooldown, data.pulseMax);
  renderSkills(data.skills, data.skillBuff);
  const energyPct = data.overdrive > 0 ? 100 : data.energy / data.energyMax * 100;
  $('#energy-fill').style.width = `${Math.max(0, Math.min(100, energyPct))}%`;
  const ready = data.energy >= data.energyMax && data.overdrive <= 0;
  $('#energy-block').classList.toggle('ready', ready);
  $('#energy-block').classList.toggle('active', data.overdrive > 0);
  $('#overdrive-status').textContent = data.overdrive > 0 ? `超载 ${data.overdrive.toFixed(1)}s` : ready ? '就绪 · 按 F 释放' : `充能 ${Math.floor(energyPct)}%`;
  $('#mobile-overdrive')?.classList.toggle('ready', ready);
  $('#boss-hud').classList.toggle('active', Boolean(data.boss));
  if (data.boss) $('#boss-fill').style.width = `${Math.max(0, data.boss.health / data.boss.maxHealth * 100)}%`;
  if (data.mission) {
    $('#objective-label').textContent = data.mission.done ? '任务完成' : '战术任务';
    $('#objective-title').textContent = data.mission.text;
    $('#objective-sub').textContent = data.mission.done
      ? `奖励已发放 · +${Math.round(data.mission.reward * (data.missionBonus || 1))} CR`
      : `进度 ${Math.min(data.mission.progress, data.mission.target)} / ${data.mission.target} · 奖励 ${data.mission.reward} CR`;
    $('#objective').classList.toggle('mission-done', data.mission.done);
  }
  $('#objective').classList.toggle('hidden', !data.mission && (data.wave > 1 || data.elapsed > 12));
  if (data.vendorNearby) $('#objective-sub').textContent = '按 G 与流动商人交易 · 可购买武器与补给';
  if (data.board) {
    $('#board-badge').classList.toggle('demo', Boolean(data.demo));
    $('#board-demo-state').textContent = data.demo ? '自动演示中' : '手动操作';
  }
}

function updateAbility(selector, cooldown, max) {
  const element = $(selector);
  const ready = cooldown <= 0;
  element.classList.toggle('cooldown', !ready);
  element.querySelector('.ability-status').textContent = ready ? '就绪' : `${cooldown.toFixed(1)}s`;
  element.querySelector('.ability span i').style.width = `${100 - Math.min(100, cooldown / Math.max(0.1, max) * 100)}%`;
}

// 技能槽：桌面显示 #skill-bar（键盘 Z/X/V/B），触屏显示 #mobile-skills。结构随拥有技能变化时才重建，冷却每帧更新。
let skillSig = '';
function renderSkills(skills, skillBuff) {
  const bar = $('#skill-bar');
  const mob = $('#mobile-skills');
  if (!bar || !mob) return;
  const list = skills || [];
  const ids = list.map((s) => s.id).join(',');
  const touch = game && game.isTouch;
  if (ids !== skillSig) {
    skillSig = ids;
    const keys = ['Z', 'X', 'V', 'B'];
    bar.innerHTML = list.map((s, i) => `<button class="skill-slot" data-skill="${i}"><kbd>${keys[i] || ''}</kbd><div class="skill-ic">${s.icon}</div><span class="skill-cd"></span></button>`).join('');
    mob.innerHTML = list.map((s, i) => `<button class="mobile-skill" data-skill="${i}">${s.icon}</button>`).join('');
    bar.style.display = (!touch && list.length) ? 'flex' : 'none';
    mob.style.display = (touch && list.length) ? 'flex' : 'none';
  }
  list.forEach((s, i) => {
    const ready = s.cooldown <= 0;
    const el = bar.children[i];
    if (el) {
      el.classList.toggle('cooldown', !ready);
      el.querySelector('.skill-cd').textContent = ready ? '' : s.cooldown.toFixed(1);
      el.style.setProperty('--p', ready ? '100%' : `${100 - Math.min(100, s.cooldown / Math.max(0.1, s.max) * 100)}%`);
    }
    const me = mob.children[i];
    if (me) me.classList.toggle('cooldown', !ready);
  });
}

function announce(title, subtitle = '', eyebrow = 'COMBAT UPDATE', duration = 2200) {
  clearTimeout(announceTimer);
  const element = $('#announcer');
  element.querySelector('small').textContent = eyebrow;
  element.querySelector('strong').textContent = title;
  element.querySelector('p').textContent = subtitle;
  element.classList.add('active');
  announceTimer = setTimeout(() => element.classList.remove('active'), duration);
}

function toast(message, duration = 1800) {
  clearTimeout(toastTimer);
  $('#interact-toast').textContent = message;
  $('#interact-toast').classList.add('active');
  toastTimer = setTimeout(() => $('#interact-toast').classList.remove('active'), duration);
}

/** 剧情档案横幅：每进入新章节时弹出，独立于战斗提示，确保剧情清晰可读。 */
function showStory(chapter) {
  clearTimeout(storyTimer);
  const element = $('#story-banner');
  if (!element || !chapter) return;
  element.querySelector('small').textContent = '剧情 // STORY LOG';
  element.querySelector('strong').textContent = chapter.title;
  element.querySelector('p').textContent = chapter.text;
  element.classList.remove('active');
  void element.offsetWidth;
  element.classList.add('active');
  storyTimer = setTimeout(() => element.classList.remove('active'), 6500);
}

/** 绝区零式横幅：失衡突破 / 极限闪避。 */
function combatBanner(kind, small, strongText, paragraph) {
  const element = $('#combat-banner');
  element.className = `combat-banner ${kind}`;
  element.querySelector('small').textContent = small;
  element.querySelector('strong').textContent = strongText;
  element.querySelector('p').textContent = paragraph;
  void element.offsetWidth;
  element.classList.add('show');
}

/** 绝区零式故障闪屏：strong（破防）/ light（极限闪避）。 */
function glitchFlash(level = 'light') {
  const element = $('#glitch-flash');
  element.className = 'glitch-flash';
  void element.offsetWidth;
  element.classList.add(level);
}

/** 时停暗角开关。 */
function setSlowmo(active) {
  $('#slowmo-vignette').classList.toggle('active', active);
}

function showAchievement(achievement) {
  const element = $('#achievement-toast');
  element.querySelector('strong').textContent = achievement.name;
  element.querySelector('p').textContent = achievement.desc;
  element.classList.remove('active');
  void element.offsetWidth;
  element.classList.add('active');
  clearTimeout(achievementTimer);
  achievementTimer = setTimeout(() => element.classList.remove('active'), 3000);
}

function showDamageNumber({ amount, x, y, critical, kill, combo }) {
  const container = $('#damage-numbers');
  const now = performance.now();
  if (container.querySelectorAll('.damage-number').length > 18 || now - lastDamageNumber < 18) return;
  lastDamageNumber = now;
  const element = document.createElement('div');
  element.className = `damage-number${kill ? ' kill' : critical ? ' critical' : ''}`;
  element.textContent = amount;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  container.appendChild(element);
  setTimeout(() => element.remove(), 820);
  // 绝区零式：命中后在敌人头顶弹出连续命中数
  if (combo >= 2) {
    const badge = document.createElement('div');
    badge.className = `combo-popup${combo >= 10 ? ' hot' : ''}`;
    badge.innerHTML = `<b>${combo}</b><span>HIT</span>`;
    badge.style.left = `${x}px`;
    badge.style.top = `${y - 48}px`;
    container.appendChild(badge);
    setTimeout(() => badge.remove(), 900);
  }
}

function showBuild(data) {
  const modules = data.upgrades.length
    ? data.upgrades.map((item) => `<span>${item.icon} ${item.name}</span>`).join('')
    : '<span class="pause-build-empty">尚未安装战术模块</span>';
  $('#pause-build').innerHTML = `
    <div class="pause-build-head"><span>当前作战配置</span><span>${data.difficulty}难度</span></div>
    <div class="pause-build-stats"><span>伤害 +${data.damage}%</span><span>暴击 ${data.crit}%</span><span>击毁 ${data.kills}</span><span>波次 ${pad(data.wave)}</span></div>
    <div class="pause-build-modules">${modules}</div>`;
}

function addKillFeed(name, score) {
  const item = document.createElement('div');
  item.innerHTML = `<span>目标清除</span><strong>${name}</strong><b>+${score}</b>`;
  $('#kill-feed').prepend(item);
  setTimeout(() => item.remove(), 3500);
  while ($('#kill-feed').children.length > 4) $('#kill-feed').lastChild.remove();
}

function hit(kill = false) {
  const marker = $('#hitmarker');
  marker.classList.remove('active', 'kill');
  void marker.offsetWidth;
  marker.classList.add('active');
  if (kill) marker.classList.add('kill');
}

function renderShop(shop, credits, containerId, creditsId) {
  const container = $(containerId);
  if (!container || !shop) return;
  if ($(creditsId)) $(creditsId).textContent = `${Math.floor(credits)} CR`;
  container.innerHTML = shop.map((item, index) => {
    const disabled = item.sold || credits < item.price;
    const catLabel = item.category === 'skill' ? (item.kind === 'active' ? '主动技能' : '被动技能') : (item.category === 'supply' ? '战场补给' : (WEAPON_CATEGORY_LABEL[item.category] || '武器'));
    const rarityBadge = item.rarity ? `<span class="rarity-badge rarity-${item.rarity}">${'◆'.repeat(item.rarity)} R${item.rarity}</span>` : '';
    const lockBtn = item.sold ? '' : `<button class="lock-btn${item.locked ? ' locked' : ''}" data-lock="${index}" title="锁定后刷新不替换">${item.locked ? '🔒' : '🔓'}</button>`;
    return `<div class="shop-cell">
      <button class="shop-item${item.sold ? ' sold' : ''}${item.locked ? ' locked' : ''}" data-shop="${index}" ${disabled ? 'disabled' : ''}>
        <small>${catLabel}${rarityBadge}</small>
        <strong>${item.name}</strong><p>${item.desc}</p><b>${item.sold ? '已购入' : `${item.price} CR`}</b>
      </button>${lockBtn}
    </div>`;
  }).join('');
  container.querySelectorAll('[data-shop]').forEach((button) => button.addEventListener('click', () => game.buyShopItem(Number(button.dataset.shop))));
  container.querySelectorAll('[data-lock]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); game.lockShopItem(Number(button.dataset.lock)); }));
}

function showUpgrades(payload) {
  const { freeChoices, shop, credits, rerollCost, freePicked, freePickIndex, shopPhase } = payload;
  const isShop = shopPhase === 'shop';
  // 两阶段切换：① 免费强化 ② 补给商店
  const freePhaseEl = $('#free-phase');
  const shopPhaseEl = $('#shop-phase');
  if (freePhaseEl) freePhaseEl.style.display = isShop ? 'none' : '';
  if (shopPhaseEl) shopPhaseEl.style.display = isShop ? '' : 'none';
  $$('.upgrade-step').forEach((b) => b.classList.toggle('active', b.dataset.step === (isShop ? 'shop' : 'free')));
  // 阶段一：免费基础强化 · 三选一（不消耗信用点）
  $('#free-choices').innerHTML = freeChoices.map((up, index) => {
    const picked = freePicked && freePickIndex === index;
    const dimmed = freePicked && freePickIndex !== index;
    return `<button class="free-card${picked ? ' picked' : ''}${dimmed ? ' dimmed' : ''}" data-free="${index}" ${freePicked && !picked ? 'disabled' : ''}>
      <span class="free-num">0${index + 1}</span>
      <div class="free-icon">${up.icon}</div>
      <h3>${up.name}</h3>
      <p>${up.desc}</p>
      ${picked ? '<b class="free-done">已领取 ✓</b>' : '<b class="free-pick">领取 ↗</b>'}
    </button>`;
  }).join('');
  $$('[data-free]').forEach((button) => button.addEventListener('click', () => game.chooseFreeUpgrade(Number(button.dataset.free))));
  // 阶段二：货架
  renderShop(shop, credits, '#shop-panel', '#shop-credits');
  // 阶段一刷新（重抽免费三选一）：领取后不可再刷，避免重复白嫖
  const rerollFreeBtn = $('#reroll-free-button');
  if (rerollFreeBtn) {
    $('#reroll-free-label').textContent = `刷新选项 · ${Math.floor(rerollCost)} CR`;
    rerollFreeBtn.disabled = freePicked || credits < rerollCost;
  }
  // 阶段二刷新（重抽货架）
  const rerollBtn = $('#reroll-shop-button');
  if (rerollBtn) {
    $('#reroll-label').textContent = `刷新货架 · ${Math.floor(rerollCost)} CR`;
    rerollBtn.disabled = credits < rerollCost;
  }
  // 出击按钮：须先领取一项免费基础强化
  const deployBtn = $('#deploy-button');
  if (deployBtn) deployBtn.disabled = !freePicked;
}

function showEnd(data) {
  const victory = data.victory;
  $('#end-eyebrow').textContent = victory ? 'CORE DESTROYED / OPERATION COMPLETE' : 'SIGNAL LOST / OPERATION FAILED';
  $('#end-title').innerHTML = victory ? '黎明已至<span>.</span>' : '连接中断<span>.</span>';
  $('#end-desc').textContent = victory ? '守望者核心已摧毁。第七区的天空，再次属于人类。' : '你的作战信号已消失，但裂隙仍在扩张。';
  $('#end-score').textContent = formatScore(data.score);
  $('#end-wave').textContent = pad(data.wave);
  $('#end-kills').textContent = data.kills;
  $('#end-accuracy').textContent = `${Math.round(data.accuracy)}%`;
  $('#new-record').classList.toggle('active', data.newRecord);
  $('#end-career').textContent = data.career
    ? `生涯累计 // 出击 ${data.career.runs} 次 · 击毁 ${data.career.kills} · 通关 ${data.career.wins} · 徽章 ${data.career.achievements.length}/${ACHIEVEMENTS.length} · ${data.difficulty}难度`
    : '';
  updateRecords();
}

function updateRecords() {
  const best = Number(localStorage.getItem('nexus-best-score') || 0);
  const wave = Number(localStorage.getItem('nexus-best-wave') || 0);
  $('#best-score').textContent = pad(best, 6).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  $('#best-wave').textContent = `最高波次 ${pad(wave)}`;
  updateUnlockBanner();
}

function damage(direction) {
  $('#damage-vignette').classList.remove('active');
  void $('#damage-vignette').offsetWidth;
  $('#damage-vignette').classList.add('active');
  if (Number.isFinite(direction)) {
    $('#damage-direction').style.transform = `translate(-50%, -50%) rotate(${direction}rad)`;
    $('#damage-direction').classList.remove('active');
    void $('#damage-direction').offsetWidth;
    $('#damage-direction').classList.add('active');
  }
}

function start(mode) {
  lastMode = mode;
  closeModal();
  game.start(mode, selectedDifficulty, selectedStartWeapon);
  $('#mobile-demo')?.classList.toggle('active', game.demoMode);
  $('#mobile-aim')?.classList.toggle('active', game.aiming);
}

game = new Game($('#game-canvas'), $('#radar'), {
  onState: setState,
  onHUD: updateHUD,
  onAnnounce: announce,
  onToast: toast,
  onKill: addKillFeed,
  onHit: hit,
  onUpgrades: showUpgrades,
  onShop: (payload) => {
    if (payload.standalone) renderShop(payload.shop, payload.credits, '#shop-options', '#field-shop-credits');
    else {
      renderShop(payload.shop, payload.credits, '#shop-panel', '#shop-credits');
      renderShop(payload.shop, payload.credits, '#shop-options', '#field-shop-credits');
    }
  },
  onDamage: damage,
  onBuild: showBuild,
  onAchievement: showAchievement,
  onDamageNumber: showDamageNumber,
  onPerfect: () => combatBanner('perfect', 'PERFECT DODGE', '极限闪避', '完美时机 · 时停反击窗口'),
  onGlitch: (level) => glitchFlash(level),
  onSlowmo: (active) => setSlowmo(active),
  onStory: (chapter) => showStory(chapter),
  onDemo: (active) => {
    $('#board-badge').classList.toggle('demo', active);
    $('#board-demo-state').textContent = active ? '自动演示中' : '手动操作';
  },
});
// 便于调试与控制台试验：暴露当前对局实例。
window.game = game;
window.__game = game;
window.nexusGame = game;

// 越界协议 // OVERBOUND 作弊清单面板关闭
$('#cheat-close').addEventListener('click', () => game.toggleCheatConsole(false));
$('#shop-close').addEventListener('click', () => game.closeShopStandalone());
// 整备页两阶段：阶段一刷新免费选项 / 前往商店 / 阶段二刷新货架 / 出击
if ($('#reroll-free-button')) $('#reroll-free-button').addEventListener('click', () => game.rerollFree());
if ($('#reroll-shop-button')) $('#reroll-shop-button').addEventListener('click', () => game.rerollShop());
if ($('#to-shop-button')) $('#to-shop-button').addEventListener('click', () => game.gotoShop());
if ($('#deploy-button')) $('#deploy-button').addEventListener('click', () => game.deploy());
// 阶段切换步骤条
$$('.upgrade-step').forEach((btn) => btn.addEventListener('click', () => {
  if (btn.dataset.step === 'shop') game.gotoShop();
  else { const fp = $('#free-phase'); const sp = $('#shop-phase'); if (fp) fp.style.display = ''; if (sp) sp.style.display = 'none'; $$('.upgrade-step').forEach((b) => b.classList.toggle('active', b.dataset.step === 'free')); }
}));
// 点击作弊清单空白处也可关闭（仅当点击的是遮罩本身）
$('#cheat-console').addEventListener('click', (event) => { if (event.target === $('#cheat-console')) game.toggleCheatConsole(false); });
// 手机端暂停 / 菜单按钮（桌面用右上角暂停键）
const mobilePause = $('#mobile-pause');
if (mobilePause) mobilePause.addEventListener('click', () => { if (game.state === 'playing') game.pause(); });
// 技能槽点击释放（桌面 / 触屏统一走事件委托，避免每帧重建丢失监听）
$('#skill-bar')?.addEventListener('click', (event) => { const b = event.target.closest('[data-skill]'); if (b) game.activateSkill(Number(b.dataset.skill)); });
$('#mobile-skills')?.addEventListener('click', (event) => { const b = event.target.closest('[data-skill]'); if (b) game.activateSkill(Number(b.dataset.skill)); });

// 作弊面板：手机 / 鼠标可直接点按的开挂按钮（无需键盘输入密语）
function buildCheatButtons() {
  const root = document.getElementById('cheat-buttons');
  if (!root) return;
  const toggles = [
    { code: 'lockon', key: 'lock', label: '锁头', desc: 'LOCKON' },
    { code: 'autofire', key: 'auto', label: '自动射击', desc: 'AUTOFIRE' },
    { code: 'godmode', key: 'god', label: '无敌', desc: 'GODMODE' },
    { code: 'infinity', key: 'ammo', label: '无限弹药', desc: 'INFINITY' },
    { code: 'xray', key: 'wall', label: '透视', desc: 'XRAY' },
    { code: 'timeslip', key: 'slow', label: '子弹时间', desc: 'TIMESLIP' },
  ];
  const actions = [
    { code: 'purge', label: '清场', desc: 'PURGE' },
    { code: 'arsenal', label: '全武器', desc: 'ARSENAL' },
    { code: 'recharge', label: '回满', desc: 'RECHARGE' },
    { code: 'overbound', label: '协议全开', desc: 'OVERBOUND' },
    { code: 'standdown', label: '解除全部', desc: 'STANDDOWN' },
  ];
  root.innerHTML =
    '<div class="cheat-btn-group"><span class="cheat-btn-label">切换类 // TOGGLE</span><div class="cheat-btn-grid">' +
    toggles.map((t) => `<button class="cheat-btn" data-cheat="${t.code}" data-cheat-key="${t.key}"><b>${t.label}</b><small>${t.desc}</small></button>`).join('') +
    '</div></div>' +
    '<div class="cheat-btn-group"><span class="cheat-btn-label">指令类 // ACTION</span><div class="cheat-btn-grid">' +
    actions.map((a) => `<button class="cheat-btn action" data-cheat="${a.code}"><b>${a.label}</b><small>${a.desc}</small></button>`).join('') +
    '</div></div>';
  root.querySelectorAll('[data-cheat]').forEach((btn) => {
    btn.addEventListener('click', () => game.applyCheat(btn.dataset.cheat));
  });
}
buildCheatButtons();


$('#start-button').addEventListener('click', () => start(selectedMode));
$('#training-button').addEventListener('click', () => start('training'));
$('#resume-button').addEventListener('click', () => game.resume());
$('#pause-button').addEventListener('click', () => game.pause());
$('#restart-button').addEventListener('click', () => start(lastMode));
$('#retry-button').addEventListener('click', () => start(lastMode));
$('#quit-button').addEventListener('click', () => game.quit());
$('#end-quit-button').addEventListener('click', () => game.quit());
$('#audio-toggle').addEventListener('click', () => {
  const enabled = game.audio.toggle();
  $('#audio-toggle').classList.toggle('muted', !enabled);
  localStorage.setItem('nexus-audio', enabled ? '1' : '0');
});
if (localStorage.getItem('nexus-audio') === '0') {
  game.audio.enabled = false;
  $('#audio-toggle').classList.add('muted');
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape' && $('#modal-backdrop').classList.contains('active')) closeModal();
  if ($('#upgrade-screen').classList.contains('active')) {
    if (['Digit1', 'Digit2', 'Digit3'].includes(event.code)) game.chooseFreeUpgrade(Number(event.code.slice(-1)) - 1);
    else if (event.code === 'Enter') game.deploy();
  }
});

updateRecords();
