import './style.css';
import { Game } from './game/Game.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const pad = (number, size = 2) => String(Math.max(0, Math.floor(number))).padStart(size, '0');
const formatScore = (number) => Math.floor(number).toLocaleString('en-US').replaceAll(',', ',');

let selectedMode = 'campaign';
let lastMode = 'campaign';
let game;
let announceTimer;
let toastTimer;

const modalTemplates = {
  briefing: `
    <div class="eyebrow">OPERATION / NEON ASHES</div><h2 id="modal-title">作战简报<span>.</span></h2>
    <p class="modal-lead">02:17，第七区战术网络遭到不明机械军团入侵。你是最后一名仍可链接的「幽灵」作战员。</p>
    <div class="briefing-grid"><div><b>01</b><strong>突破包围</strong><p>清理每一波敌对单位，利用掩体与冲刺避免被集火。</p></div><div><b>02</b><strong>适应战场</strong><p>每波结束后选择强化模块。击毁敌人可能掉落生命、护盾与弹药。</p></div><div><b>03</b><strong>摧毁核心</strong><p>在核心行动第 10 波击败守望者。无尽裂隙则会持续提高威胁。</p></div></div>
    <div class="intel-row"><span>情报：红色敌人擅长突袭</span><span>紫色敌人远程攻击</span><span>橙色重装单位移动缓慢</span></div>`,
  armory: `
    <div class="eyebrow">TACTICAL LOADOUT / NX SERIES</div><h2 id="modal-title">武器库<span>.</span></h2><p class="modal-lead">所有武器均在行动中自动解锁。按 1 / 2 / 3 或滚轮快速切换。</p>
    <div class="armory-list"><article><div class="weapon-silhouette rifle">VX-9</div><div><small>01 / 初始装备</small><h3>VX-9 脉冲</h3><p>稳定的全自动脉冲步枪，适合中距离持续压制。</p><span>伤害 24　·　射速 9/s　·　弹匣 30</span></div></article><article><div class="weapon-silhouette shotgun">SG-12</div><div><small>02 / 第 2 波解锁</small><h3>SG-12 裂解</h3><p>八枚高能弹丸同时释放，近距离可造成毁灭性伤害。</p><span>伤害 14×8　·　射速 1.2/s　·　弹匣 6</span></div></article><article><div class="weapon-silhouette rail">R-01</div><div><small>03 / 第 4 波解锁</small><h3>R-01 磁轨</h3><p>高精度磁轨射线，贯穿一条直线上的所有敌人。</p><span>伤害 135　·　射速 0.8/s　·　弹匣 5</span></div></article></div>`,
  controls: `
    <div class="eyebrow">NEURAL INTERFACE / MANUAL</div><h2 id="modal-title">操作指南<span>.</span></h2>
    <div class="controls-grid"><div><h3>键鼠操作</h3><p><kbd>W A S D</kbd><span>移动</span></p><p><kbd>鼠标</kbd><span>观察 / 瞄准</span></p><p><kbd>左键 / 右键</kbd><span>射击 / 精确瞄准</span></p><p><kbd>Shift</kbd><span>疾跑</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>R / 1 2 3</kbd><span>装填 / 切换武器</span></p><p><kbd>ESC / P</kbd><span>暂停</span></p></div><div><h3>触屏操作</h3><p><kbd>左侧摇杆</kbd><span>移动</span></p><p><kbd>右侧滑动</kbd><span>观察 / 瞄准</span></p><p><kbd>FIRE</kbd><span>按住连续射击</span></p><p><kbd>Q / E</kbd><span>冲刺 / 电磁脉冲</span></p><p><kbd>R / ⇄</kbd><span>装填 / 切换武器</span></p><p><kbd>Ⅱ</kbd><span>暂停</span></p><small>手机端会自动辅助瞄准近距离目标。</small></div></div>`
};

function showModal(type) {
  $('#modal-content').innerHTML = modalTemplates[type];
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
  updateAbility('#ability-dash', data.dashCooldown, 5);
  updateAbility('#ability-pulse', data.pulseCooldown, 12);
  $('#boss-hud').classList.toggle('active', Boolean(data.boss));
  if (data.boss) $('#boss-fill').style.width = `${Math.max(0, data.boss.health / data.boss.maxHealth * 100)}%`;
  $('#objective').classList.toggle('hidden', data.wave > 1 || data.elapsed > 12);
}

function updateAbility(selector, cooldown, max) {
  const element = $(selector);
  const ready = cooldown <= 0;
  element.classList.toggle('cooldown', !ready);
  element.querySelector('.ability-status').textContent = ready ? '就绪' : `${cooldown.toFixed(1)}s`;
  element.querySelector('.ability span i').style.width = `${100 - Math.min(100, cooldown / max * 100)}%`;
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
  game.start(mode);
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
