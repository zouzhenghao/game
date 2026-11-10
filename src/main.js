import './style.css';
import './board.css';
import { Game, ACHIEVEMENTS, detectProfile } from './game/Game.js';

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
let lastMode = 'campaign';
let game;
let announceTimer;
let toastTimer;
let achievementTimer;
let lastDamageNumber = 0;

const modalTemplates = {
  briefing: `
    <div class="eyebrow">OPERATION / NEON ASHES</div><h2 id="modal-title">作战简报<span>.</span></h2>
    <p class="modal-lead">02:17，第七区战术网络遭到不明机械军团入侵。你是最后一名仍可链接的「幽灵」作战员。</p>
    <div class="briefing-grid"><div><b>01</b><strong>突破包围</strong><p>清理每一波敌对单位，利用掩体与冲刺避免被集火。</p></div><div><b>02</b><strong>适应战场</strong><p>每波结束从 15 种战术模块中三选一，逐步构筑专属打法。</p></div><div><b>03</b><strong>摧毁核心</strong><p>命中与击毁积攒能量，按 F 释放超载；第 10 波击败守望者。</p></div></div>
    <div class="intel-row v2"><span>红色敌人擅长突袭</span><span>紫色敌人远程攻击</span><span>橙色重装移动缓慢</span><span>青色幽影会相位隐形</span><span>黄色蜂群贴近后自毁</span><span>绿色单元会修复友军</span><span>琥珀炮台定点轰炸</span><span>油桶可被引爆</span></div>`,
  armory: `
    <div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">五把武器均在行动中按波次自动解锁。按 1–5 或滚轮快速切换。</p>
    <div class="armory-list"><article><div class="weapon-silhouette rifle">VX-9</div><div><small>01 / 初始装备</small><h3>VX-9 脉冲</h3><p>稳定的全自动脉冲步枪，适合中距离持续压制。</p><span>伤害 24　·　射速 9/s　·　弹匣 30</span></div></article><article><div class="weapon-silhouette shotgun">SG-12</div><div><small>02 / 第 2 波解锁</small><h3>SG-12 裂解</h3><p>八枚高能弹丸同时释放，近距离可造成毁灭性伤害。</p><span>伤害 14×8　·　射速 1.2/s　·　弹匣 6</span></div></article><article><div class="weapon-silhouette rail">R-01</div><div><small>03 / 第 4 波解锁</small><h3>R-01 磁轨</h3><p>高精度磁轨射线，贯穿一条直线上的所有敌人。</p><span>伤害 135　·　射速 0.8/s　·　弹匣 5</span></div></article><article class="v2"><div class="weapon-silhouette rail">ARC-7</div><div><small>04 / 第 6 波解锁</small><h3>ARC-7 弧光</h3><p>发射链式电弧，命中后自动跳跃到附近敌人，最多连锁 3 个目标。</p><span>伤害 46　·　射速 3.4/s　·　弹匣 24</span></div></article><article class="v2"><div class="weapon-silhouette rocket">WN-5</div><div><small>05 / 第 8 波解锁</small><h3>WN-5 蜂巢</h3><p>六管制导发射器，导弹自动锁定最近敌人，命中后产生范围爆炸，可连爆油桶。</p><span>伤害 120　·　射速 1.1/s　·　弹匣 4</span></div></article></div>`,
  controls: `
    <div class="eyebrow">NEURAL INTERFACE / MANUAL</div><h2 id="modal-title">操作指南<span>.</span></h2>
    <div class="controls-grid"><div><h3>键鼠操作</h3><p><kbd>W A S D</kbd><span>移动</span></p><p><kbd>鼠标</kbd><span>观察 / 瞄准</span></p><p><kbd>左键 / 右键</kbd><span>射击 / 精确瞄准</span></p><p><kbd>Shift</kbd><span>疾跑</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载（能量满时）</span></p><p><kbd>R / 1–5</kbd><span>装填 / 切换五把武器</span></p><p><kbd>ESC / P</kbd><span>暂停</span></p></div><div><h3>触屏操作</h3><p><kbd>左侧摇杆</kbd><span>移动</span></p><p><kbd>右侧滑动</kbd><span>观察 / 瞄准</span></p><p><kbd>FIRE</kbd><span>按住连续射击</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>F</kbd><span>核心超载</span></p><p><kbd>R / ⇄</kbd><span>装填 / 切换武器</span></p><p><kbd>Ⅱ</kbd><span>暂停</span></p><small>手机端会自动辅助瞄准近距离目标。</small></div></div>
    <p class="modal-lead" style="margin-top:16px">首页「威胁校准」可选择新兵 / 标准 / 噩梦三档难度，影响敌人强度、掉落率与积分倍率。</p>
    <div class="board-note"><h3>希沃白板 / 教学一体机</h3><p>首页「设备适配」选择「白板大屏」：全部按钮放大到适合手指点击，支持红外多点触控（一人移动、一人开火），弹药打空自动装填，无需键盘鼠标。点 <kbd>AUTO</kbd> 开启课堂演示，自动锁定最近目标并持续开火，适合投屏讲解；<kbd>◎</kbd> 为精确瞄准。</p></div>`
};

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
  $('#modal-content').innerHTML = type === 'career' ? careerTemplate() : modalTemplates[type];
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
  $$('.difficulty-chip').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  selectedDifficulty = button.dataset.difficulty;
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
  $('#hud').classList.toggle('active', ['playing', 'paused', 'upgrade'].includes(state));
  $('#pause-screen').classList.toggle('active', state === 'paused');
  $('#upgrade-screen').classList.toggle('active', state === 'upgrade');
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
  $('#wave-total').textContent = data.mode === 'campaign' ? '/ 10' : '/ ∞';
  $('#mode-label').textContent = { campaign: '核心行动', endless: '无尽裂隙', training: '模拟训练' }[data.mode];
  $('#difficulty-label').textContent = data.difficulty;
  $('#enemy-count').textContent = data.intermission ? '区域暂时安全' : `${data.enemies} 个敌对信号`;
  $('#score-value').textContent = pad(data.score, 6);
  $('#combo-value').textContent = `× ${data.combo.toFixed(1)}`;
  $('#weapon-name').innerHTML = data.weapon.label;
  $('#weapon-class').textContent = data.weapon.className;
  $('#ammo-value').textContent = pad(data.ammo);
  $('#reserve-value').textContent = data.reserve;
  $('#reload-hint').classList.toggle('visible', data.ammo === 0 || data.reloading);
  $('#reload-hint').textContent = data.reloading ? '正在装填…' : '按 R 装填弹药';
  $('#crosshair').classList.toggle('reloading', data.reloading);
  $$('.weapon-slots span').forEach((slot, index) => {
    slot.classList.toggle('active', index === data.weaponIndex);
    slot.classList.toggle('locked', index > data.unlockedWeapon);
  });
  updateAbility('#ability-dash', data.dashCooldown, data.dashMax);
  updateAbility('#ability-pulse', data.pulseCooldown, data.pulseMax);
  const energyPct = data.overdrive > 0 ? 100 : data.energy / data.energyMax * 100;
  $('#energy-fill').style.width = `${Math.max(0, Math.min(100, energyPct))}%`;
  const ready = data.energy >= data.energyMax && data.overdrive <= 0;
  $('#energy-block').classList.toggle('ready', ready);
  $('#energy-block').classList.toggle('active', data.overdrive > 0);
  $('#overdrive-status').textContent = data.overdrive > 0 ? `超载 ${data.overdrive.toFixed(1)}s` : ready ? '就绪 · 按 F 释放' : `充能 ${Math.floor(energyPct)}%`;
  $('#mobile-overdrive')?.classList.toggle('ready', ready);
  $('#boss-hud').classList.toggle('active', Boolean(data.boss));
  if (data.boss) $('#boss-fill').style.width = `${Math.max(0, data.boss.health / data.boss.maxHealth * 100)}%`;
  $('#objective').classList.toggle('hidden', data.wave > 1 || data.elapsed > 12);
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

function showDamageNumber({ amount, x, y, critical, kill }) {
  const container = $('#damage-numbers');
  const now = performance.now();
  if (container.children.length > 18 || now - lastDamageNumber < 18) return;
  lastDamageNumber = now;
  const element = document.createElement('div');
  element.className = `damage-number${kill ? ' kill' : critical ? ' critical' : ''}`;
  element.textContent = amount;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  container.appendChild(element);
  setTimeout(() => element.remove(), 820);
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

function showUpgrades(upgrades) {
  $('#upgrade-options').innerHTML = upgrades.map((upgrade, index) => `
    <button class="upgrade-card" data-upgrade="${index}"><span class="upgrade-number">0${index + 1}</span><div class="upgrade-icon">${upgrade.icon}</div><small>${upgrade.type}</small><h3>${upgrade.name}</h3><p>${upgrade.description}</p><b>安装模块 ↗</b></button>`).join('');
  $$('[data-upgrade]').forEach((button) => button.addEventListener('click', () => game.chooseUpgrade(Number(button.dataset.upgrade))));
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
  game.start(mode, selectedDifficulty);
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
  onDamage: damage,
  onBuild: showBuild,
  onAchievement: showAchievement,
  onDamageNumber: showDamageNumber,
  onDemo: (active) => {
    $('#board-badge').classList.toggle('demo', active);
    $('#board-demo-state').textContent = active ? '自动演示中' : '手动操作';
  },
});
window.nexusGame = game;

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
  if ($('#upgrade-screen').classList.contains('active') && ['Digit1', 'Digit2', 'Digit3'].includes(event.code)) {
    game.chooseUpgrade(Number(event.code.slice(-1)) - 1);
  }
});

updateRecords();
