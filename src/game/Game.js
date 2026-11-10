import * as THREE from 'three';
import { AudioSystem } from './Audio.js';
import { createWeaponModel, buildEnemyModel } from './Models.js';
import { buildWorld } from './World.js';

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const random = (min, max) => min + Math.random() * (max - min);

/**
 * 设备档位：
 * - desktop：键鼠（含普通笔记本）
 * - mobile：手机 / 小尺寸触屏（多为竖屏）
 * - board：希沃白板等大屏横屏触控一体机（16:9、红外多点触控、常无键盘）
 * 支持 ?device=board 与首页手动切换，结果写入 localStorage。
 */
export function detectProfile() {
  let saved = null;
  try { saved = localStorage.getItem('nexus-device'); } catch (_) { /* Storage may be unavailable. */ }
  const forced = new URLSearchParams(location.search).get('device');
  if (['desktop', 'mobile', 'board'].includes(forced)) return forced;
  if (['desktop', 'mobile', 'board'].includes(saved)) return saved;
  const coarse = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  const longSide = Math.max(innerWidth, innerHeight);
  const landscape = innerWidth > innerHeight;
  if (coarse && landscape && (longSide >= 1000 || navigator.maxTouchPoints >= 5)) return 'board';
  if (coarse) return 'mobile';
  return 'desktop';
}

const WEAPONS = [
  { id: 'rifle', name: 'VX-9 脉冲', label: 'VX-9 <span>脉冲</span>', className: '突击步枪 // AUTO', damage: 24, fireRate: 9, magazine: 30, reserve: 180, reload: 1.45, spread: 0.009, pellets: 1, auto: true, range: 90 },
  { id: 'shotgun', name: 'SG-12 裂解', label: 'SG-12 <span>裂解</span>', className: '战术霰弹枪 // PUMP', damage: 14, fireRate: 1.2, magazine: 6, reserve: 42, reload: 1.8, spread: 0.065, pellets: 8, auto: false, range: 42 },
  { id: 'rail', name: 'R-01 磁轨', label: 'R-01 <span>磁轨</span>', className: '磁轨精确步枪 // SEMI', damage: 135, fireRate: 0.8, magazine: 5, reserve: 25, reload: 2.1, spread: 0.001, pellets: 1, auto: false, range: 130, pierce: true },
  { id: 'arc', name: 'ARC-7 弧光', label: 'ARC-7 <span>弧光</span>', className: '链式电弧 // CHAIN', damage: 46, fireRate: 3.4, magazine: 24, reserve: 120, reload: 1.7, spread: 0.014, pellets: 1, auto: true, range: 62, chain: 3 },
  { id: 'rocket', name: 'WN-5 蜂巢', label: 'WN-5 <span>蜂巢</span>', className: '制导导弹 // HOMING', damage: 120, fireRate: 1.1, magazine: 4, reserve: 16, reload: 2.2, spread: 0, pellets: 1, auto: false, range: 130, rocket: true, aoe: 6 },
];

const ENEMY_DATA = {
  runner: { name: '猎犬突击体', health: 65, speed: 4.7, damage: 13, score: 120, radius: 0.55, color: 0xff4658 },
  drone: { name: '蜂群射手', health: 90, speed: 2.7, damage: 10, score: 180, radius: 0.65, color: 0xb367ff },
  tank: { name: '重装碾压者', health: 310, speed: 1.35, damage: 16, score: 420, radius: 0.95, color: 0xff8a3d },
  phantom: { name: '相位幽影', health: 58, speed: 6.4, damage: 12, score: 240, radius: 0.5, color: 0x5ce1ff },
  bomber: { name: '自毁蜂群', health: 46, speed: 5.5, damage: 28, score: 210, radius: 0.52, color: 0xffc24d },
  medic: { name: '维生单元', health: 75, speed: 2.3, damage: 0, score: 200, radius: 0.6, color: 0x47e0a0 },
  turret: { name: '定点炮台', health: 240, speed: 0, damage: 14, score: 300, radius: 0.9, color: 0xffb24d },
  boss: { name: '守望者核心', health: 2600, speed: 1.45, damage: 18, score: 5000, radius: 2.1, color: 0xff593d },
};

const DIFFICULTY = {
  recruit: { id: 'recruit', label: '新兵', hp: 0.78, damage: 0.68, score: 0.85, drop: 1.35, spawn: 0.85 },
  standard: { id: 'standard', label: '标准', hp: 1, damage: 1, score: 1, drop: 1, spawn: 1 },
  nightmare: { id: 'nightmare', label: '噩梦', hp: 1.4, damage: 1.45, score: 1.5, drop: 0.82, spawn: 1.18 },
};

export const ACHIEVEMENTS = [
  { id: 'first-blood', name: '首次接触', desc: '击毁第一个敌对单位' },
  { id: 'combo-master', name: '连锁反应', desc: '连击倍率达到 2.5' },
  { id: 'flawless', name: '无损作战', desc: '无伤清除一整波敌人' },
  { id: 'crit-10', name: '精准打击', desc: '单局造成 10 次暴击' },
  { id: 'overdrive', name: '核心超载', desc: '首次释放超载模式' },
  { id: 'defuser', name: '拆弹专家', desc: '在自毁蜂群引爆前将其击毁' },
  { id: 'arc-chain', name: '雷霆万钧', desc: '弧光一次连锁 3 个以上目标' },
  { id: 'victory', name: '黎明已至', desc: '完成核心行动' },
  { id: 'nightmare', name: '噩梦终结', desc: '在噩梦难度下通关' },
  { id: 'hive', name: '蜂群覆盖', desc: '使用制导导弹击毁至少一个目标' },
  { id: 'medic-down', name: '断援', desc: '击毁一台维生单元' },
  { id: 'barrel', name: '连环爆破', desc: '用爆炸油桶一次清除多个目标' },
];

const UPGRADES = [
  { id: 'damage', icon: '↟', type: 'FIREPOWER', name: '超载弹药', description: '所有武器伤害提高 22%。让每一次命中都更具威胁。', apply: (g) => { g.player.damageMultiplier *= 1.22; } },
  { id: 'firerate', icon: '≫', type: 'FIREPOWER', name: '高速枪机', description: '射击间隔缩短 15%，装填速度提高 10%。', apply: (g) => { g.player.fireRateMultiplier *= 1.15; g.player.reloadMultiplier *= 1.1; } },
  { id: 'health', icon: '✚', type: 'SURVIVAL', name: '纳米修复', description: '最大生命值提高 30，并立即恢复全部生命。', apply: (g) => { g.player.maxHealth += 30; g.player.health = g.player.maxHealth; } },
  { id: 'shield', icon: '◇', type: 'SURVIVAL', name: '电容护盾', description: '最大护盾提高 25，护盾恢复速度提高 30%。', apply: (g) => { g.player.maxShield += 25; g.player.shield = g.player.maxShield; g.player.shieldRegen *= 1.3; } },
  { id: 'speed', icon: '⌁', type: 'MOBILITY', name: '动力肌腱', description: '移动速度提高 12%，相位冲刺冷却缩短 20%。', apply: (g) => { g.player.speedMultiplier *= 1.12; g.player.dashMax *= 0.8; } },
  { id: 'pulse', icon: '◎', type: 'ABILITY', name: '脉冲增幅', description: '电磁脉冲范围扩大 25%，伤害提高 35%，冷却缩短 15%。', apply: (g) => { g.player.pulseRadius *= 1.25; g.player.pulseDamage *= 1.35; g.player.pulseMax *= 0.85; } },
  { id: 'ammo', icon: '▤', type: 'UTILITY', name: '战场回收', description: '立刻补满备用弹药，后续弹药拾取量提高 50%。', apply: (g) => { g.weaponState.forEach((w, i) => { w.reserve = WEAPONS[i].reserve; }); g.player.ammoMultiplier *= 1.5; } },
  { id: 'leech', icon: '⟁', type: 'SURVIVAL', name: '猎手协议', description: '每次击毁敌人恢复 4 点生命与 3 点护盾。', apply: (g) => { g.player.killHeal += 4; } },
  { id: 'crit', icon: '✦', type: 'FIREPOWER', name: '弱点解析', description: '暴击率提高 12%，暴击伤害提高 30%。', apply: (g) => { g.player.critChance += 0.12; g.player.critMultiplier += 0.3; } },
  { id: 'execute', icon: '⌖', type: 'FIREPOWER', name: '终结协议', description: '对生命值低于 35% 的敌人额外造成 50% 伤害。', apply: (g) => { g.player.executeBonus += 0.5; } },
  { id: 'overcharge', icon: 'ϟ', type: 'ABILITY', name: '核心共振', description: '超载能量获取提高 40%，超载持续时间延长 2.5 秒。', apply: (g) => { g.player.energyGain *= 1.4; g.player.overdriveMax += 2.5; } },
  { id: 'chain', icon: '≈', type: 'UTILITY', name: '电弧分流', description: '弧光额外跳跃 1 个目标，连锁伤害提高 25%。', apply: (g) => { g.player.chainBonus += 1; g.player.chainDamage *= 1.25; } },
  { id: 'magnet', icon: '⊙', type: 'UTILITY', name: '磁场牵引', description: '拾取范围扩大 1 倍，补给效果提高 35%。', apply: (g) => { g.player.pickupRadius *= 2; g.player.pickupPower *= 1.35; } },
  { id: 'dashwave', icon: '↝', type: 'MOBILITY', name: '冲击冲刺', description: '冲刺结束时释放冲击波，对周围敌人造成 55 点伤害。', apply: (g) => { g.player.dashWave += 55; } },
  { id: 'regen', icon: '♻', type: 'SURVIVAL', name: '自适应回路', description: '护盾恢复延迟缩短 2 秒，恢复速度提高 45%。', apply: (g) => { g.player.shieldDelay = Math.max(1.5, g.player.shieldDelay - 2); g.player.shieldRegen *= 1.45; } },
];

export class Game {
  constructor(canvas, radar, callbacks) {
    this.canvas = canvas;
    this.radar = radar;
    this.radarContext = radar.getContext('2d');
    this.callbacks = callbacks;
    this.audio = new AudioSystem();
    this.profile = detectProfile();
    this.isBoard = this.profile === 'board';
    this.isTouch = this.profile !== 'desktop';
    this.lowPower = this.isBoard;
    this.maxParticles = this.isBoard ? 16 : this.isTouch ? 25 : 80;
    this.demoMode = false;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x03080b);
    this.scene.fog = new THREE.Fog(0x071115, 24, 112);
    this.camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.05, 220);
    this.camera.rotation.order = 'YXZ';
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(innerWidth, innerHeight);
    this.applyQuality();
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.55;
    this.renderer.shadowMap.enabled = !this.isTouch && !this.lowPower;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.state = 'menu';
    this.mode = 'campaign';
    this.keys = {};
    this.firing = false;
    this.aiming = false;
    this.shotThisHold = false;
    this.yaw = 0;
    this.pitch = 0;
    this.menuTime = 0;
    this.elapsed = 0;
    this.enemies = [];
    this.enemyHitMeshes = [];
    this.projectiles = [];
    this.pickups = [];
    this.particles = [];
    this.tracers = [];
    this.effects = [];
    this.obstacles = [];
    this.barrels = [];
    this.barrelMeshes = [];
    this.barrelBoxes = new Set();
    this.worldColliders = [];
    this.animatedWorld = [];
    this.spawnQueue = [];
    this.waveClearPending = false;
    this.hudTimer = 0;
    this.radarTimer = 0;
    this.shake = 0;
    this.weaponRecoil = 0;
    this.muzzleTimer = 0;
    this.currentUpgradeChoices = [];
    this.difficulty = DIFFICULTY.standard;
    this.appliedUpgrades = [];
    this.runAchievements = new Set();
    this.critCount = 0;
    this.comboPeak = 1;
    this.waveDamageTaken = 0;
    this.dashActive = false;
    this.sharedParticleGeometry = new THREE.BoxGeometry(0.055, 0.055, 0.055);
    this.sharedProjectileGeometry = new THREE.SphereGeometry(0.11, 8, 8);
    this.createWorld();
    this.createViewModel();
    this.bindEvents();
    this.resetPlayer();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  createWorld() {
    buildWorld(this);
  }

  applyQuality() {
    // 希沃白板常见 3840×2160 面板 + 集显，主动降低内部渲染分辨率保证稳定帧率。
    const cap = this.isBoard ? (innerWidth > 2200 ? 0.7 : 1) : this.isTouch ? 1.25 : 1.65;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, cap));
  }

  createViewModel() {
    this.weaponRoot = new THREE.Group();
    this.camera.add(this.weaponRoot);
    this.scene.add(this.camera);
    this.weaponRoot.position.set(0.36, -0.31, -0.62);
    this.applyWeaponScale();
    const viewLight = new THREE.PointLight(0xa8eadc, 1.35, 3.6);
    viewLight.position.set(0.2, 0.25, 0.25);
    this.camera.add(viewLight);
    this.muzzleLight = new THREE.PointLight(0x72ffda, 0, 3);
    this.weaponRoot.add(this.muzzleLight);
    this.buildWeaponModel(0);
  }

  applyWeaponScale() {
    if (!this.weaponRoot) return;
    const portrait = this.isTouch && innerHeight > innerWidth;
    this.weaponRoot.scale.setScalar(this.isBoard ? 0.92 : portrait ? 0.68 : 0.8);
  }

  buildWeaponModel(index) {
    if (this.weaponModel) this.weaponRoot.remove(this.weaponModel);
    const model = createWeaponModel(index);
    this.weaponRoot.add(model.group);
    this.weaponModel = model.group;
    this.weaponParts = model;
    this.muzzleLight.position.set(0, 0.02, model.muzzleZ + 0.12);
  }

  updateWeaponParts(dt) {
    const parts = this.weaponParts;
    if (!parts) return;
    const reload = this.reloadTimer > 0;
    const reloadProgress = reload ? 1 - this.reloadTimer / Math.max(0.001, WEAPONS[this.weaponIndex].reload / this.player.reloadMultiplier) : 0;
    const dip = reload ? Math.sin(reloadProgress * Math.PI) : 0;
    parts.magazine.position.y = lerp(parts.magazine.position.y, (this.weaponIndex === 1 ? -0.19 : -0.19) - dip * 0.22, 1 - Math.exp(-dt * 16));
    parts.magazine.rotation.x = lerp(parts.magazine.rotation.x, dip * 0.55, 1 - Math.exp(-dt * 14));
    parts.bolt.position.z = lerp(parts.bolt.position.z, -0.16 + this.weaponRecoil * 0.085, 1 - Math.exp(-dt * 22));
    parts.flash.visible = this.muzzleTimer > 0;
    if (parts.flash.visible) {
      const pulse = this.muzzleTimer / 0.055;
      parts.flash.scale.setScalar(0.65 + pulse * 0.7);
      parts.flash.rotation.z += dt * 18;
    }
    if (parts.coils) parts.coils.children.forEach((ring, i) => { ring.rotation.z += dt * (i % 2 ? -2.2 : 2.2); });
  }

  resetPlayer() {
    this.player = {
      position: new THREE.Vector3(0, 1.7, 22), velocity: new THREE.Vector3(), health: 100, maxHealth: 100, shield: 50, maxShield: 50,
      damageMultiplier: 1, fireRateMultiplier: 1, reloadMultiplier: 1, speedMultiplier: 1, ammoMultiplier: 1,
      dashCooldown: 0, dashMax: 5, dashTime: 0, invulnerable: 0, pulseCooldown: 0, pulseMax: 12, pulseRadius: 12, pulseDamage: 75,
      shieldRegen: 8, shieldDelay: 5, lastDamage: 0, killHeal: 0,
      critChance: 0.08, critMultiplier: 1.75, executeBonus: 1, executeThreshold: 0.35,
      energy: 0, energyMax: 100, energyGain: 1, overdrive: 0, overdriveMax: 8,
      chainBonus: 0, chainDamage: 1, pickupRadius: 1.45, pickupPower: 1, dashWave: 0,
    };
    this.weaponState = WEAPONS.map((weapon) => ({ ammo: weapon.magazine, reserve: weapon.reserve }));
    this.weaponIndex = 0;
    this.unlockedWeapon = 0;
    this.weaponCooldown = 0;
    this.reloadTimer = 0;
    this.switchTimer = 0;
    this.score = 0;
    this.kills = 0;
    this.shotsFired = 0;
    this.shotsHit = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.wave = 0;
    this.elapsed = 0;
    this.nextWaveTimer = 0;
    this.spawnTimer = 0;
    this.waveClearPending = false;
    this.intermission = false;
    this.yaw = 0;
    this.pitch = 0;
    this.appliedUpgrades = [];
    this.runAchievements = new Set();
    this.critCount = 0;
    this.comboPeak = 1;
    this.waveDamageTaken = 0;
    this.dashActive = false;
  }

  clearDynamicObjects() {
    [...this.enemies, ...this.projectiles, ...this.pickups, ...this.particles, ...this.tracers, ...this.effects].forEach((item) => {
      const object = item.group || item.mesh || item.line;
      if (object) this.scene.remove(object);
    });
    this.enemies = [];
    this.enemyHitMeshes = [];
    this.projectiles = [];
    this.pickups = [];
    this.particles = [];
    this.tracers = [];
    this.effects = [];
    this.spawnQueue = [];
    // 油桶属于场景固定物：重开时复活而非删除，并重建派生数组。
    this.obstacles = this.obstacles.filter((box) => !this.barrelBoxes.has(box));
    this.barrelMeshes = [];
    this.barrels.forEach((barrel) => {
      barrel.dead = false;
      barrel.health = barrel.maxHealth;
      barrel.flash = 0;
      if (barrel.bodyMaterial) barrel.bodyMaterial.emissiveIntensity = 0.5;
      if (barrel.group && !barrel.group.parent) this.world.add(barrel.group);
      this.barrelMeshes.push(barrel.mesh);
      this.obstacles.push(barrel.box);
    });
  }

  start(mode = 'campaign', difficultyId = 'standard') {
    this.audio.init();
    this.runId = (this.runId || 0) + 1;
    this.clearDynamicObjects();
    this.resetPlayer();
    this.mode = mode;
    this.difficulty = DIFFICULTY[difficultyId] || DIFFICULTY.standard;
    this.firing = false;
    this.aiming = false;
    this.touchMove = { x: 0, y: 0 };
    this.state = 'playing';
    this.weaponRoot.visible = true;
    this.buildWeaponModel(0);
    this.camera.position.copy(this.player.position);
    this.camera.rotation.set(0, 0, 0);
    this.callbacks.onState('playing');
    this.callbacks.onAnnounce(mode === 'training' ? '模拟训练' : '神经链接建立', mode === 'training' ? `敌方伤害已关闭 · 熟悉你的武器 · ${this.difficulty.label}难度` : `准备迎击第一波敌对单位 · ${this.difficulty.label}难度`, 'TACTICAL LINK / CONNECTED', 2400);
    this.nextWaveTimer = 2.2;
    this.intermission = true;
    this.requestLock();
    this.updateHUD(true);
    if (this.isBoard) this.callbacks.onToast?.('白板课堂模式 // 左侧移动 · 右侧滑动瞄准 · 可开启自动演示', 3200);
  }

  quit() {
    this.state = 'menu';
    this.firing = false;
    this.clearDynamicObjects();
    this.weaponRoot.visible = false;
    this.callbacks.onState('menu');
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.firing = false;
    document.exitPointerLock?.();
    this.callbacks.onBuild?.({
      difficulty: this.difficulty.label,
      upgrades: this.appliedUpgrades,
      damage: Math.round((this.player.damageMultiplier - 1) * 100),
      crit: Math.round(this.player.critChance * 100),
      kills: this.kills,
      wave: this.wave,
    });
    this.callbacks.onState('paused');
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.callbacks.onState('playing');
    this.requestLock();
    this.clock.getDelta();
  }

  requestLock() {
    if (!this.isTouch && this.state === 'playing' && document.pointerLockElement !== this.canvas) {
      try {
        const promise = this.canvas.requestPointerLock?.();
        if (promise?.catch) promise.catch(() => {});
      } catch (_) { /* Keyboard play remains available if pointer lock is denied. */ }
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('keydown', (event) => {
      this.keys[event.code] = true;
      if (event.code === 'KeyR') this.reload();
      if (event.code === 'KeyQ') this.dash();
      if (event.code === 'KeyE') this.pulse();
      if (event.code === 'KeyF') this.activateOverdrive();
      if (event.code === 'Digit1') this.switchWeapon(0);
      if (event.code === 'Digit2') this.switchWeapon(1);
      if (event.code === 'Digit3') this.switchWeapon(2);
      if (event.code === 'Digit4') this.switchWeapon(3);
      if (event.code === 'Digit5') this.switchWeapon(4);
      if (event.code === 'KeyP' || (event.code === 'Escape' && !document.pointerLockElement)) {
        if (this.state === 'playing') this.pause();
        else if (this.state === 'paused') this.resume();
      }
    });
    document.addEventListener('keyup', (event) => { this.keys[event.code] = false; });
    document.addEventListener('mousemove', (event) => {
      if (this.state !== 'playing' || (!this.isTouch && document.pointerLockElement !== this.canvas)) return;
      this.yaw -= event.movementX * 0.0021;
      this.pitch = clamp(this.pitch - event.movementY * 0.0019, -1.45, 1.45);
    });
    this.canvas.addEventListener('mousedown', (event) => {
      if (this.state !== 'playing') return;
      this.requestLock();
      if (event.button === 0) { this.firing = true; this.shotThisHold = false; }
      if (event.button === 2) this.aiming = true;
    });
    document.addEventListener('mouseup', (event) => {
      if (event.button === 0) { this.firing = false; this.shotThisHold = false; }
      if (event.button === 2) this.aiming = false;
    });
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    this.canvas.addEventListener('wheel', (event) => {
      if (this.state !== 'playing') return;
      const direction = event.deltaY > 0 ? 1 : -1;
      let next = this.weaponIndex;
      const total = WEAPONS.length;
      for (let i = 0; i < total; i++) {
        next = (next + direction + total) % total;
        if (next <= this.unlockedWeapon) break;
      }
      this.switchWeapon(next);
    }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      if (!this.isTouch && this.state === 'playing' && document.pointerLockElement !== this.canvas && this.elapsed > 0.6) this.pause();
    });
    window.addEventListener('blur', () => { if (this.state === 'playing' && !this.isTouch) this.pause(); });
    this.bindTouchControls();
  }

  bindTouchControls() {
    const stick = document.getElementById('move-stick');
    const knob = stick.querySelector('i');
    let stickPointer = null;
    const updateStick = (event) => {
      const rect = stick.getBoundingClientRect();
      let x = event.clientX - (rect.left + rect.width / 2);
      let y = event.clientY - (rect.top + rect.height / 2);
      const length = Math.hypot(x, y);
      const max = rect.width * 0.34;
      if (length > max) { x *= max / length; y *= max / length; }
      knob.style.transform = `translate(${x}px, ${y}px)`;
      this.touchMove = { x: x / max, y: y / max };
    };
    stick.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      stick.setPointerCapture?.(event.pointerId);
      stickPointer = event.pointerId;
      updateStick(event);
    }, { passive: false });
    stick.addEventListener('pointermove', (event) => {
      if (event.pointerId !== stickPointer) return;
      event.preventDefault();
      updateStick(event);
    }, { passive: false });
    const endStick = (event) => {
      if (event.pointerId !== stickPointer) return;
      stickPointer = null;
      this.touchMove = { x: 0, y: 0 };
      knob.style.transform = '';
    };
    stick.addEventListener('pointerup', endStick);
    stick.addEventListener('pointercancel', endStick);

    // 白板支持多点触控：视角滑动可与移动摇杆、开火、技能同时使用。
    const look = document.getElementById('look-zone');
    const lookPointers = new Map();
    look.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      look.setPointerCapture?.(event.pointerId);
      lookPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    }, { passive: false });
    look.addEventListener('pointermove', (event) => {
      const last = lookPointers.get(event.pointerId);
      if (!last || this.state !== 'playing') return;
      event.preventDefault();
      this.yaw -= (event.clientX - last.x) * (this.isBoard ? 0.0026 : 0.0042);
      this.pitch = clamp(this.pitch - (event.clientY - last.y) * (this.isBoard ? 0.0024 : 0.0037), -1.4, 1.4);
      lookPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    }, { passive: false });
    const endLook = (event) => lookPointers.delete(event.pointerId);
    look.addEventListener('pointerup', endLook);
    look.addEventListener('pointercancel', endLook);

    const fire = document.getElementById('mobile-fire');
    fire.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      fire.setPointerCapture?.(event.pointerId);
      this.firing = true;
      this.shotThisHold = false;
    }, { passive: false });
    const stopFire = (event) => { event.preventDefault(); this.firing = false; this.shotThisHold = false; };
    fire.addEventListener('pointerup', stopFire);
    fire.addEventListener('pointercancel', stopFire);

    const bindButton = (id, action) => {
      const element = document.getElementById(id);
      if (!element) return;
      element.addEventListener('pointerdown', (event) => { event.preventDefault(); action(); }, { passive: false });
      element.addEventListener('contextmenu', (event) => event.preventDefault());
    };
    bindButton('mobile-reload', () => this.reload());
    bindButton('mobile-dash', () => this.dash());
    bindButton('mobile-pulse', () => this.pulse());
    bindButton('mobile-switch', () => this.switchWeapon((this.weaponIndex + 1) % (this.unlockedWeapon + 1)));
    bindButton('mobile-overdrive', () => this.activateOverdrive());
    bindButton('mobile-aim', () => { this.aiming = !this.aiming; document.getElementById('mobile-aim')?.classList.toggle('active', this.aiming); });
    bindButton('mobile-demo', () => this.setDemoMode(!this.demoMode));
  }

  setDemoMode(enabled) {
    this.demoMode = Boolean(enabled);
    document.getElementById('mobile-demo')?.classList.toggle('active', this.demoMode);
    this.callbacks.onToast?.(this.demoMode ? '课堂演示模式已开启 · 自动锁定并开火' : '课堂演示模式已关闭', 2200);
    this.callbacks.onDemo?.(this.demoMode);
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
    this.applyQuality();
    this.applyWeaponScale();
  }

  startWave() {
    this.wave += 1;
    this.intermission = false;
    this.waveClearPending = false;
    this.waveDamageTaken = 0;
    this.spawnQueue = [];
    const diff = this.difficulty;
    const campaignBoss = this.mode === 'campaign' && this.wave === 10;
    const endlessBoss = this.mode === 'endless' && this.wave % 5 === 0;
    if (campaignBoss || endlessBoss) {
      this.spawnQueue.push('boss');
      const minions = Math.min(10, Math.ceil((2 + Math.floor(this.wave / 2)) * diff.spawn));
      const escort = ['runner', 'drone', 'phantom', 'bomber', 'tank', 'turret', 'medic'];
      for (let i = 0; i < minions; i++) this.spawnQueue.push(escort[Math.floor(Math.random() * escort.length)]);
      this.callbacks.onAnnounce('守望者降临', '摧毁核心装甲 · 注意范围攻击与自毁单位', 'WARNING / APEX SIGNAL', 3200);
    } else {
      const base = this.mode === 'training' ? Math.min(10, 4 + this.wave) : Math.min(30, 4 + this.wave * 2);
      const count = Math.max(3, Math.round(base * diff.spawn));
      const pool = ['runner'];
      if (this.wave >= 2) pool.push('drone', 'drone');
      if (this.wave >= 3) pool.push('phantom');
      if (this.wave >= 4) pool.push('tank', 'turret');
      if (this.wave >= 5) pool.push('bomber', 'medic');
      for (let i = 0; i < count; i++) this.spawnQueue.push(pool[Math.floor(Math.random() * pool.length)]);
      this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2, '0')} 波`, this.wave === 1 ? '敌对信号接近 · 清除所有单位' : '威胁等级上升 · 保持移动', 'HOSTILE SIGNALS DETECTED');
    }
    if (this.wave >= 8 && this.unlockedWeapon === 3) this.unlockWeapon(4);
    else if (this.wave >= 6 && this.unlockedWeapon === 2) this.unlockWeapon(3);
    else if (this.wave >= 4 && this.unlockedWeapon === 1) this.unlockWeapon(2);
    else if (this.wave >= 2 && this.unlockedWeapon === 0) this.unlockWeapon(1);
    this.spawnTimer = 0.4;
    this.audio.wave();
  }

  unlockWeapon(index) {
    this.unlockedWeapon = index;
    this.weaponState[index].ammo = WEAPONS[index].magazine;
    this.weaponState[index].reserve = WEAPONS[index].reserve;
    this.callbacks.onToast(`武器已解锁 // ${WEAPONS[index].name} · 按 ${index + 1} 切换`, 3500);
  }

  spawnEnemy(type) {
    const data = ENEMY_DATA[type];
    let point = this.spawnPoints[Math.floor(Math.random() * this.spawnPoints.length)].clone();
    for (let attempts = 0; attempts < 6 && point.distanceTo(this.player.position) < 20; attempts++) point = this.spawnPoints[Math.floor(Math.random() * this.spawnPoints.length)].clone();
    point.x += random(-2.5, 2.5);
    point.z += random(-2.5, 2.5);
    const group = new THREE.Group();
    group.position.copy(point);
    const phased = type === 'phantom';
    const material = new THREE.MeshStandardMaterial({ color: type === 'boss' ? 0x3a241c : 0x243238, emissive: data.color, emissiveIntensity: 0.8, metalness: 0.8, roughness: 0.34, transparent: phased, opacity: 1 });
    const glow = new THREE.MeshBasicMaterial({ color: data.color, toneMapped: false, transparent: phased, opacity: 1 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x0c1418, metalness: 0.9, roughness: 0.28, transparent: phased, opacity: 1 });
    const accent = new THREE.MeshStandardMaterial({ color: 0x2b3b40, emissive: data.color, emissiveIntensity: 0.16, metalness: 0.86, roughness: 0.3, transparent: phased, opacity: 1 });
    const warning = new THREE.MeshBasicMaterial({ color: 0xffc24d, toneMapped: false, transparent: phased, opacity: 1 });
    const mats = { body: material, dark, glow, accent, warning };
    const model = buildEnemyModel(type, mats);
    const diff = this.difficulty;
    const enemy = {
      type, group, material, fadeMaterials: [material, glow, dark, accent, warning],
      health: data.health * (1 + Math.max(0, this.wave - 1) * (type === 'boss' ? 0.12 : 0.085)) * diff.hp, maxHealth: 0,
      speed: data.speed * (1 + Math.min(0.45, this.wave * 0.018)), damage: data.damage * (1 + this.wave * 0.025) * diff.damage, score: Math.round(data.score * diff.score),
      radius: data.radius, name: data.name, attackCooldown: random(0.4, 1.3), spawnTime: 0.85, dead: false, deathTimer: 0,
      strafe: Math.random() > 0.5 ? 1 : -1, phase: Math.random() * Math.PI * 2, hitTimer: 0, healthBar: null, barFill: null,
      phased: false, phaseTimer: random(1.4, 2.8), fuse: 0, chargeTimer: 0, healTimer: 0,
      parts: model.dynamic, height: model.height, baseY: model.baseY,
    };
    enemy.maxHealth = enemy.health;
    const register = (object) => {
      object.userData.enemy = enemy;
      if (object.isMesh) {
        object.castShadow = !this.isTouch && !this.lowPower;
        this.enemyHitMeshes.push(object);
      }
      object.children.forEach(register);
    };
    model.allMeshes.forEach((object) => { group.add(object); register(object); });
    const barGroup = new THREE.Group();
    const barWidth = type === 'boss' ? 3.2 : 1.35;
    const barBack = new THREE.Mesh(new THREE.PlaneGeometry(barWidth, 0.085), new THREE.MeshBasicMaterial({ color: 0x101818, transparent: true, opacity: 0.85, depthTest: false }));
    const barFill = new THREE.Mesh(new THREE.PlaneGeometry(barWidth, 0.055), new THREE.MeshBasicMaterial({ color: data.color, depthTest: false }));
    barFill.position.z = 0.005;
    barGroup.add(barBack, barFill);
    barGroup.position.y = enemy.height + 0.35;
    barGroup.visible = type === 'boss';
    group.add(barGroup);
    enemy.healthBar = barGroup;
    enemy.barFill = barFill;
    enemy.barHalf = barWidth / 2;
    group.scale.setScalar(0.02);
    this.scene.add(group);
    this.enemies.push(enemy);
    this.spawnParticles(point.clone().add(new THREE.Vector3(0, 1.4, 0)), data.color, type === 'boss' ? 35 : 12, 3.5);
  }

  updateEnemies(dt) {
    const playerFlat = new THREE.Vector3(this.player.position.x, 0, this.player.position.z);
    for (const enemy of this.enemies) {
      if (enemy.dead) {
        enemy.deathTimer -= dt;
        enemy.group.rotation.z += dt * 2.4;
        enemy.group.scale.multiplyScalar(Math.max(0.01, 1 - dt * 5));
        enemy.group.position.y -= dt * 0.8;
        if (enemy.deathTimer <= 0) {
          this.scene.remove(enemy.group);
          enemy.remove = true;
        }
        continue;
      }
      enemy.phase += dt;
      enemy.hitTimer -= dt;
      enemy.material.emissiveIntensity = enemy.hitTimer > 0 ? 3.2 : (enemy.type === 'boss' ? 1.0 : 0.8);
      enemy.group.children.forEach((child) => { if (child.userData.spin) child.rotation.z += child.userData.spin * dt; });
      const parts = enemy.parts;
      if (parts) {
        parts.legs?.forEach((leg, i) => { leg.rotation.x = Math.sin(enemy.phase * 7 + (i % 2 ? Math.PI : 0)) * 0.34; });
        parts.rotors?.forEach((rotor, i) => { rotor.rotation.y += dt * (5 + i * 1.5); });
        parts.rings?.forEach((ring, i) => { if (!ring.userData.spin) ring.rotation.z += dt * (i % 2 ? -0.55 : 0.55); });
        parts.shards?.forEach((shard, i) => {
          const angle = shard.userData.angle + enemy.phase * 0.65;
          shard.position.x = Math.cos(angle) * 0.85;
          shard.position.z = Math.sin(angle) * 0.55;
          shard.position.y = shard.userData.baseY + Math.sin(enemy.phase * 2 + i) * 0.12;
          shard.rotation.y += dt * 1.6;
        });
        parts.wings?.forEach((wing, i) => { wing.rotation.z = Math.sin(enemy.phase * 5 + i) * 0.22; });
        parts.turrets?.forEach((turret) => { turret.rotation.y = Math.sin(enemy.phase * 0.8) * 0.32; });
        if (parts.core) parts.core.scale.setScalar(1 + Math.sin(enemy.phase * 4.5) * 0.09);
      }
      if (enemy.spawnTime > 0) {
        enemy.spawnTime -= dt;
        const scale = clamp(1 - enemy.spawnTime / 0.85, 0.02, 1);
        enemy.group.scale.setScalar(scale);
        continue;
      }
      enemy.group.scale.setScalar(1);
      if (enemy.type === 'phantom') {
        enemy.phaseTimer -= dt;
        if (enemy.phaseTimer <= 0) {
          enemy.phased = !enemy.phased;
          enemy.phaseTimer = enemy.phased ? 1.05 : 2.5;
          enemy.fadeMaterials.forEach((item) => { item.opacity = enemy.phased ? 0.16 : 1; });
          this.spawnParticles(enemy.group.position.clone().add(new THREE.Vector3(0, 1.2, 0)), 0x5ce1ff, this.isTouch ? 4 : 9, 2);
        }
      }
      if (enemy.type === 'bomber' && enemy.fuse > 0) {
        enemy.fuse -= dt;
        enemy.material.emissiveIntensity = 1.4 + Math.sin(enemy.phase * 36) * 1.4;
        if (Math.random() > 0.65) this.spawnParticles(enemy.group.position.clone().add(new THREE.Vector3(0, 1.1, 0)), 0xffc24d, 2, 1.4);
        if (enemy.fuse <= 0) { this.detonateBomber(enemy); continue; }
      }
      const toPlayer = playerFlat.clone().sub(new THREE.Vector3(enemy.group.position.x, 0, enemy.group.position.z));
      const distance = toPlayer.length();
      toPlayer.normalize();
      enemy.group.rotation.y = Math.atan2(toPlayer.x, toPlayer.z) + Math.PI;
      enemy.attackCooldown -= dt;
      let move = new THREE.Vector3();
      if (enemy.type === 'runner' || enemy.type === 'phantom') {
        if (distance > 1.45) move.copy(toPlayer);
        if (distance < 1.85 && enemy.attackCooldown <= 0) {
          this.damagePlayer(enemy.damage, enemy.group.position);
          enemy.attackCooldown = enemy.type === 'phantom' ? 0.75 : 0.9;
          enemy.group.position.addScaledVector(toPlayer, 0.3);
        }
      } else if (enemy.type === 'bomber') {
        if (enemy.fuse <= 0) {
          if (distance > 2.7) move.copy(toPlayer);
          else {
            enemy.fuse = 1.2;
            this.audio.warning();
            this.createPulseEffect(enemy.group.position.clone(), 0xffb347, 4.5);
          }
        }
      } else if (enemy.type === 'turret') {
        // 定点炮台：原地不动，充能后发射精准炮弹（带预警闪烁）
        if (enemy.chargeTimer > 0) {
          enemy.chargeTimer -= dt;
          enemy.material.emissiveIntensity = 2 + Math.sin(enemy.phase * 30) * 1.4;
          if (enemy.chargeTimer <= 0) {
            [-0.05, 0.05].forEach((spread) => this.fireEnemyProjectile(enemy, spread, 24, enemy.damage));
            enemy.attackCooldown = 2.4;
            this.audio.enemyShot();
          }
        } else if (distance < 46 && enemy.attackCooldown <= 0) {
          enemy.chargeTimer = 0.65;
        }
      } else if (enemy.type === 'medic') {
        // 维生单元：悬浮，为附近受损友军持续修复（带修复光束）
        enemy.healTimer -= dt;
        const desired = 15;
        if (distance > desired + 4) move.copy(toPlayer);
        else if (distance < desired - 4) move.copy(toPlayer).multiplyScalar(-0.7);
        const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).multiplyScalar(enemy.strafe * 0.5);
        move.add(side);
        if (enemy.healTimer <= 0) {
          let bestAlly = null;
          let bestMissing = 6;
          for (const ally of this.enemies) {
            if (ally === enemy || ally.dead || ally.type === 'medic' || ally.spawnTime > 0) continue;
            if (ally.group.position.distanceTo(enemy.group.position) > 14) continue;
            const missing = ally.maxHealth - ally.health;
            if (missing > bestMissing) { bestMissing = missing; bestAlly = ally; }
          }
          if (bestAlly) {
            bestAlly.health = Math.min(bestAlly.maxHealth, bestAlly.health + 22);
            if (bestAlly.barFill && bestAlly.healthBar.visible) {
              const ratio = clamp(bestAlly.health / bestAlly.maxHealth, 0, 1);
              bestAlly.barFill.scale.x = ratio;
              bestAlly.barFill.position.x = -(1 - ratio) * (bestAlly.barHalf || 0.6);
            }
            this.createHealBeam(enemy.group.position.clone().add(new THREE.Vector3(0, 1.4, 0)), bestAlly.group.position.clone().add(new THREE.Vector3(0, (bestAlly.height || 2) * 0.55, 0)));
            enemy.healTimer = 0.7;
          }
        }
      } else {
        const desired = enemy.type === 'drone' ? 13 : enemy.type === 'tank' ? 17 : 20;
        if (distance > desired + 3) move.copy(toPlayer);
        else if (distance < desired - 3) move.copy(toPlayer).multiplyScalar(-0.7);
        const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).multiplyScalar(enemy.strafe * (enemy.type === 'boss' ? 0.45 : 0.75));
        move.add(side);
        if (distance < (enemy.type === 'boss' ? 48 : 36) && enemy.attackCooldown <= 0) {
          if (enemy.type === 'boss') {
            const enraged = enemy.health < enemy.maxHealth * 0.5;
            if (enraged && !enemy.enragedSpawned) {
              enemy.enragedSpawned = true;
              this.spawnEnemy('medic');
              this.spawnEnemy('medic');
              this.callbacks.onAnnounce('核心过载', '守望者召唤维生单元支援', 'WARNING / REINFORCEMENTS', 2200);
            }
            for (let i = -2; i <= 2; i++) this.fireEnemyProjectile(enemy, i * 0.105, 17, enemy.damage);
            if (enraged || Math.random() > 0.45) {
              for (let i = 0; i < 10; i++) this.fireEnemyProjectile(enemy, i / 10 * Math.PI * 2, 10, enemy.damage * 0.65, true);
            }
            enemy.attackCooldown = enraged ? 1.35 : 2.1;
          } else if (enemy.type === 'tank') {
            [-0.08, 0, 0.08].forEach((spread) => this.fireEnemyProjectile(enemy, spread, 13, enemy.damage));
            enemy.attackCooldown = 2.25;
          } else {
            this.fireEnemyProjectile(enemy, random(-0.035, 0.035), 16, enemy.damage);
            enemy.attackCooldown = random(1.3, 1.8);
          }
        }
      }
      if (move.lengthSq() > 0) {
        move.normalize().multiplyScalar(enemy.speed * dt);
        this.moveEnemy(enemy, move);
      }
      if (enemy.baseY) enemy.group.position.y = enemy.baseY + Math.sin(enemy.phase * 2.1) * 0.18;
      enemy.healthBar.quaternion.copy(this.camera.quaternion);
    }
    this.enemies = this.enemies.filter((enemy) => !enemy.remove);
  }

  detonateBomber(enemy) {
    const center = enemy.group.position.clone();
    enemy.dead = true;
    enemy.deathTimer = 0.02;
    enemy.healthBar.visible = false;
    this.enemyHitMeshes = this.enemyHitMeshes.filter((mesh) => mesh.userData.enemy !== enemy);
    this.spawnParticles(center.clone().add(new THREE.Vector3(0, 1, 0)), 0xffb347, this.isTouch ? 14 : 28, 6);
    this.createPulseEffect(center, 0xffa13d, 6);
    this.audio.explosion();
    this.shake = Math.min(1.3, this.shake + 0.45);
    const distance = center.distanceTo(this.player.position);
    if (distance < 5.5) this.damagePlayer(enemy.damage * (1 - distance / 5.5 * 0.55), center);
  }

  addEnergy(amount) {
    const player = this.player;
    if (player.overdrive > 0) return;
    player.energy = Math.min(player.energyMax, player.energy + amount * player.energyGain);
  }

  activateOverdrive() {
    const player = this.player;
    if (this.state !== 'playing' || player.energy < player.energyMax || player.overdrive > 0) return;
    player.energy = 0;
    player.overdrive = player.overdriveMax;
    player.pulseCooldown = Math.min(player.pulseCooldown, 2);
    this.audio.overdrive();
    this.createPulseEffect(player.position.clone(), 0xffd45c, 15);
    this.callbacks.onAnnounce('核心超载', '射速与伤害大幅提升 · 弹药无限', 'OVERDRIVE / ENGAGED', 2200);
    this.unlockAchievement('overdrive');
  }

  unlockAchievement(id) {
    if (this.runAchievements.has(id)) return;
    this.runAchievements.add(id);
    const achievement = ACHIEVEMENTS.find((item) => item.id === id);
    if (!achievement) return;
    this.audio.achievement();
    this.callbacks.onAchievement?.(achievement);
  }

  emitDashWave() {
    const player = this.player;
    if (player.dashWave <= 0) return;
    const center = player.position.clone();
    this.createPulseEffect(center, 0x54f7d2, 5.5);
    this.audio.pulse();
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.phased) continue;
      if (enemy.group.position.distanceTo(center) < 5.5) {
        this.damageEnemy(enemy, player.dashWave * player.damageMultiplier, enemy.group.position.clone().sub(center).setY(0).normalize());
      }
    }
    for (const barrel of this.barrels) {
      if (!barrel.dead && barrel.group.position.distanceTo(center) < 5.5) this.damageBarrel(barrel, 60, new THREE.Vector3());
    }
  }

  moveEnemy(enemy, movement) {
    const position = enemy.group.position;
    const nextX = clamp(position.x + movement.x, -65, 65);
    if (!this.collides(nextX, position.z, enemy.radius * 0.7)) position.x = nextX;
    else enemy.strafe *= -1;
    const nextZ = clamp(position.z + movement.z, -65, 65);
    if (!this.collides(position.x, nextZ, enemy.radius * 0.7)) position.z = nextZ;
    else enemy.strafe *= -1;
  }

  fireEnemyProjectile(enemy, angleOffset, speed, damage, radial = false) {
    const origin = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.type === 'boss' ? 3.1 : enemy.type === 'drone' ? 1.85 : 1.6, 0));
    let direction;
    if (radial) direction = new THREE.Vector3(Math.sin(angleOffset), 0, Math.cos(angleOffset));
    else {
      direction = this.player.position.clone().sub(origin).normalize();
      direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), angleOffset);
    }
    const material = new THREE.MeshBasicMaterial({ color: enemy.type === 'drone' ? 0xc46bff : 0xff684d, toneMapped: false });
    const mesh = new THREE.Mesh(this.sharedProjectileGeometry, material);
    mesh.scale.setScalar(enemy.type === 'boss' ? 1.8 : 1);
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.projectiles.push({ mesh, velocity: direction.multiplyScalar(speed), damage, life: 5, source: enemy.group.position });
    this.audio.enemyShot();
  }

  updateProjectiles(dt) {
    for (const projectile of this.projectiles) {
      projectile.life -= dt;
      if (projectile.homing) {
        let target = null;
        let bestDistance = 46;
        for (const enemy of this.enemies) {
          if (enemy.dead || enemy.phased || enemy.spawnTime > 0) continue;
          const distance = enemy.group.position.distanceTo(projectile.mesh.position);
          if (distance < bestDistance) { bestDistance = distance; target = enemy; }
        }
        if (target) {
          const desired = target.group.position.clone().add(new THREE.Vector3(0, (target.height || 2) * 0.5, 0))
            .sub(projectile.mesh.position).normalize().multiplyScalar(projectile.velocity.length());
          projectile.velocity.lerp(desired, Math.min(1, dt * 3.4));
        }
        projectile.mesh.position.addScaledVector(projectile.velocity, dt);
        projectile.mesh.rotation.x += dt * 14;
        let struck = null;
        for (const enemy of this.enemies) {
          if (enemy.dead || enemy.phased) continue;
          if (enemy.group.position.distanceTo(projectile.mesh.position) < enemy.radius + 0.9) { struck = enemy; break; }
        }
        const hitWall = this.collides(projectile.mesh.position.x, projectile.mesh.position.z, 0.2)
          || Math.abs(projectile.mesh.position.x) > 70 || Math.abs(projectile.mesh.position.z) > 70;
        if (struck || hitWall || projectile.life <= 0) {
          this.explodeRocket(projectile);
          projectile.life = 0;
        }
        if (projectile.life <= 0) { this.scene.remove(projectile.mesh); projectile.remove = true; }
        continue;
      }
      projectile.mesh.position.addScaledVector(projectile.velocity, dt);
      projectile.mesh.rotation.x += dt * 8;
      const position = projectile.mesh.position;
      if (position.distanceTo(this.player.position) < 0.65) {
        this.damagePlayer(projectile.damage, projectile.source);
        projectile.life = 0;
      }
      if (this.collides(position.x, position.z, 0.05) || Math.abs(position.x) > 70 || Math.abs(position.z) > 70) projectile.life = 0;
      if (projectile.life <= 0) {
        this.spawnParticles(position, 0xff6655, 4, 1.5);
        this.scene.remove(projectile.mesh);
        projectile.remove = true;
      }
    }
    this.projectiles = this.projectiles.filter((projectile) => !projectile.remove);
  }

  updatePlayer(dt) {
    const player = this.player;
    player.dashCooldown = Math.max(0, player.dashCooldown - dt);
    player.pulseCooldown = Math.max(0, player.pulseCooldown - dt);
    player.invulnerable = Math.max(0, player.invulnerable - dt);
    player.overdrive = Math.max(0, player.overdrive - dt);
    player.lastDamage += dt;
    if (player.lastDamage > player.shieldDelay && player.shield < player.maxShield) player.shield = Math.min(player.maxShield, player.shield + player.shieldRegen * dt);
    this.weaponCooldown = Math.max(0, this.weaponCooldown - dt);
    this.switchTimer = Math.max(0, this.switchTimer - dt);
    this.muzzleTimer = Math.max(0, this.muzzleTimer - dt);
    this.muzzleLight.intensity = this.muzzleTimer > 0 ? 5 : 0;
    if (this.reloadTimer > 0) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) this.finishReload();
    }
    const forwardInput = (this.keys.KeyW ? 1 : 0) - (this.keys.KeyS ? 1 : 0) - (this.touchMove?.y || 0);
    const sideInput = (this.keys.KeyD ? 1 : 0) - (this.keys.KeyA ? 1 : 0) + (this.touchMove?.x || 0);
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const move = forward.multiplyScalar(forwardInput).add(right.multiplyScalar(sideInput));
    if (move.lengthSq() > 1) move.normalize();
    const sprinting = (this.keys.ShiftLeft || this.keys.ShiftRight) && forwardInput > 0;
    let speed = 6.6 * player.speedMultiplier * (sprinting ? 1.5 : 1) * (this.aiming ? 0.72 : 1) * (player.overdrive > 0 ? 1.2 : 1);
    if (player.dashTime > 0) {
      player.dashTime -= dt;
      speed = 25;
      if (move.lengthSq() === 0) move.copy(new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)));
      if (Math.random() > 0.4) this.spawnParticles(player.position.clone().add(new THREE.Vector3(0, -0.7, 0)), 0x54f7d2, 1, 0.7);
    }
    if (this.dashActive && player.dashTime <= 0) this.emitDashWave();
    this.dashActive = player.dashTime > 0;
    const targetVelocity = move.multiplyScalar(speed);
    player.velocity.lerp(targetVelocity, 1 - Math.exp(-dt * (player.dashTime > 0 ? 25 : 12)));
    this.movePlayer(player.velocity.x * dt, player.velocity.z * dt);
    const moving = player.velocity.length() > 0.4;
    const bob = moving ? Math.sin(this.elapsed * (sprinting ? 14 : 10)) * 0.025 : 0;
    this.camera.position.set(player.position.x, player.position.y + bob, player.position.z);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2.5);
      this.camera.position.x += random(-1, 1) * this.shake * 0.08;
      this.camera.position.y += random(-1, 1) * this.shake * 0.08;
    }
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    const targetFov = this.aiming ? (this.weaponIndex === 2 ? 42 : 56) : sprinting ? 78 : 72;
    this.camera.fov = lerp(this.camera.fov, targetFov, 1 - Math.exp(-dt * 10));
    this.camera.updateProjectionMatrix();
    this.weaponRecoil = lerp(this.weaponRecoil, 0, 1 - Math.exp(-dt * 13));
    this.updateWeaponParts(dt);
    if (this.isBoard && this.weaponState[this.weaponIndex].ammo === 0 && !player.overdrive && this.reloadTimer <= 0) this.reload();
    this.updateDemoAim(dt);
    const portraitTouch = this.isTouch && innerHeight > innerWidth;
    const aimX = this.aiming ? 0 : portraitTouch ? 0.17 : 0.36;
    const aimY = this.aiming ? -0.22 : portraitTouch ? -0.28 : -0.31;
    this.weaponRoot.position.x = lerp(this.weaponRoot.position.x, aimX, 1 - Math.exp(-dt * 12));
    this.weaponRoot.position.y = lerp(this.weaponRoot.position.y, aimY + bob * 0.6, 1 - Math.exp(-dt * 12));
    this.weaponRoot.position.z = -0.62 + this.weaponRecoil * 0.13;
    this.weaponRoot.rotation.x = this.weaponRecoil * 0.1 + (this.reloadTimer > 0 ? Math.sin(this.reloadTimer * 4) * 0.35 : 0);
    this.weaponRoot.rotation.z = moving ? Math.sin(this.elapsed * 5) * 0.012 : 0;
    if (this.firing && (WEAPONS[this.weaponIndex].auto || !this.shotThisHold)) this.fireWeapon();
    if (this.comboTimer > 0) this.comboTimer -= dt;
    else this.combo = lerp(this.combo, 1, dt * 3);
  }

  /** 课堂演示：自动锁定最近的敌人并持续开火，方便在白板上无键盘展示。 */
  pickDemoTarget(origin) {
    let best = null;
    let bestDistance = Infinity;
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.phased || enemy.spawnTime > 0) continue;
      const point = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.type === 'boss' ? 3.2 : enemy.height * 0.55, 0));
      const distance = point.distanceTo(origin);
      if (distance < bestDistance) { bestDistance = distance; best = point; }
    }
    return best;
  }

  updateDemoAim(dt) {
    if (!this.demoMode || this.state !== 'playing') return;
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const target = this.pickDemoTarget(origin);
    if (!target) { this.firing = false; return; }
    const dx = target.x - origin.x;
    const dz = target.z - origin.z;
    const desiredYaw = Math.atan2(-dx, -dz);
    let delta = desiredYaw - this.yaw;
    while (delta > Math.PI) delta -= Math.PI * 2;
    while (delta < -Math.PI) delta += Math.PI * 2;
    this.yaw += delta * Math.min(1, dt * 3.4);
    const horizontal = Math.hypot(dx, dz);
    this.pitch = lerp(this.pitch, Math.atan2(target.y - origin.y, horizontal), Math.min(1, dt * 3));
    this.firing = true;
  }

  movePlayer(dx, dz) {
    const p = this.player.position;
    const nextX = clamp(p.x + dx, -66.5, 66.5);
    if (!this.collides(nextX, p.z, 0.48)) p.x = nextX;
    const nextZ = clamp(p.z + dz, -66.5, 66.5);
    if (!this.collides(p.x, nextZ, 0.48)) p.z = nextZ;
  }

  collides(x, z, radius) {
    return this.obstacles.some((box) => x + radius > box.minX && x - radius < box.maxX && z + radius > box.minZ && z - radius < box.maxZ);
  }

  fireWeapon() {
    if (this.state !== 'playing' || this.weaponCooldown > 0 || this.reloadTimer > 0 || this.switchTimer > 0 || this.player.dashTime > 0) return;
    const weapon = WEAPONS[this.weaponIndex];
    const state = this.weaponState[this.weaponIndex];
    const player = this.player;
    const overdrive = player.overdrive > 0;
    if (state.ammo <= 0 && !overdrive) {
      this.audio.empty();
      this.weaponCooldown = 0.25;
      this.shotThisHold = true;
      this.reload();
      return;
    }
    if (!overdrive) state.ammo -= 1;
    this.shotsFired += 1;
    this.shotThisHold = true;
    this.weaponCooldown = 1 / (weapon.fireRate * player.fireRateMultiplier * (overdrive ? 1.6 : 1));
    this.weaponRecoil = Math.min(1.5, this.weaponRecoil + (weapon.id === 'shotgun' ? 1 : weapon.id === 'rail' ? 1.25 : weapon.id === 'arc' ? 0.45 : 0.32));
    this.pitch = clamp(this.pitch + (weapon.id === 'shotgun' ? 0.025 : weapon.id === 'rail' ? 0.018 : 0.004), -1.45, 1.45);
    if (weapon.rocket) {
      this.audio.shot('rocket');
      this.fireRocket(baseDirection, weapon.damage * this.player.damageMultiplier * (overdrive ? 1.5 : 1));
      return;
    }
    this.muzzleTimer = 0.055;
    this.audio.shot(weapon.id);
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const baseDirection = this.camera.getWorldDirection(new THREE.Vector3());
    if (this.isTouch) {
      const assisted = this.getAimAssist(origin, baseDirection);
      if (assisted) baseDirection.copy(assisted);
    }
    let anyHit = false;
    let anyKill = false;
    for (let pellet = 0; pellet < weapon.pellets; pellet++) {
      const direction = baseDirection.clone();
      const spread = weapon.spread * (this.aiming ? 0.45 : 1);
      direction.x += random(-spread, spread);
      direction.y += random(-spread, spread);
      direction.z += random(-spread, spread);
      direction.normalize();
      this.raycaster.set(origin, direction);
      this.raycaster.far = weapon.range;
      const wallHits = this.raycaster.intersectObjects(this.worldColliders, false);
      const wallDistance = wallHits.length ? wallHits[0].distance : weapon.range;
      const hits = this.raycaster.intersectObjects(this.enemyHitMeshes, false).filter((hit) => {
        const target = hit.object.userData.enemy;
        return target && !target.dead && !target.phased && hit.distance < wallDistance;
      });
      const barrelHits = this.raycaster.intersectObjects(this.barrelMeshes, false).filter((hit) => {
        const barrel = hit.object.userData.barrel;
        return barrel && !barrel.dead && hit.distance < wallDistance;
      });
      const enemyDist = hits.length ? hits[0].distance : Infinity;
      const barrelDist = barrelHits.length ? barrelHits[0].distance : Infinity;
      let endpoint = origin.clone().addScaledVector(direction, wallDistance);
      if (wallHits.length) endpoint = wallHits[0].point;
      if (barrelDist < wallDistance && barrelDist <= enemyDist) {
        endpoint = barrelHits[0].point;
        this.damageBarrel(barrelHits[0].object.userData.barrel, weapon.damage * this.player.damageMultiplier * (overdrive ? 1.5 : 1), direction);
        this.spawnParticles(endpoint, 0xffa24a, 3, 1.3);
      } else if (hits.length) {
        anyHit = true;
        const uniqueEnemies = [];
        for (const hit of hits) {
          const enemy = hit.object.userData.enemy;
          if (uniqueEnemies.includes(enemy)) continue;
          uniqueEnemies.push(enemy);
          const critical = hit.object.userData.critical;
          const critRoll = Math.random() < player.critChance;
          const amount = weapon.damage * player.damageMultiplier * (overdrive ? 1.5 : 1) * (critical ? 1.65 : 1) * (critRoll ? player.critMultiplier : 1);
          const killed = this.damageEnemy(enemy, amount, direction, { critical: Boolean(critical || critRoll), critRoll });
          if (weapon.chain) this.chainLightning(enemy, hit.point, amount, weapon.chain + player.chainBonus, new Set(uniqueEnemies));
          anyKill = anyKill || killed;
          if (!weapon.pierce) {
            endpoint = hit.point;
            break;
          }
        }
        this.spawnParticles(endpoint, 0x8ffff0, weapon.id === 'rail' ? 10 : 4, 2.2);
      } else if (wallHits.length) {
        this.spawnParticles(endpoint, 0x6ba698, 3, 1.3);
      }
      if (pellet === 0 || weapon.id === 'shotgun') this.createTracer(origin, endpoint, weapon.id === 'rail' ? 0x72caff : weapon.id === 'shotgun' ? 0xffb464 : weapon.id === 'arc' ? 0x7de8ff : 0x71ffdb, weapon.id === 'rail' ? 0.22 : 0.07);
    }
    if (anyHit) {
      this.shotsHit += 1;
      this.addEnergy(1.4);
      this.audio.hit();
      this.callbacks.onHit(anyKill);
    }
  }

  /** 发射制导导弹：自动追踪最近敌人，命中或触障后范围爆炸。 */
  fireRocket(direction, damage) {
    const origin = this.camera.getWorldPosition(new THREE.Vector3()).addScaledVector(direction, 1.0);
    const mesh = new THREE.Mesh(this.sharedProjectileGeometry, new THREE.MeshBasicMaterial({ color: 0xff8a3d, toneMapped: false }));
    mesh.scale.setScalar(1.9);
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.projectiles.push({
      mesh, velocity: direction.clone().multiplyScalar(36), damage, aoe: WEAPONS[4].aoe,
      life: 4.5, homing: true, rocket: true, source: origin.clone(),
    });
  }

  explodeRocket(projectile) {
    const center = projectile.mesh.position.clone();
    this.scene.remove(projectile.mesh);
    const aoe = projectile.aoe;
    this.spawnParticles(center, 0xff7a3d, this.isTouch ? 16 : 30, 6);
    this.createPulseEffect(center, 0xff8a3d, aoe);
    this.audio.explosion();
    this.shake = Math.min(1.3, this.shake + 0.4);
    let kills = 0;
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.phased) continue;
      const distance = enemy.group.position.distanceTo(center);
      if (distance < aoe + enemy.radius) {
        if (this.damageEnemy(enemy, projectile.damage * (1 - distance / (aoe + enemy.radius) * 0.4), center.clone().sub(enemy.group.position).setY(0).normalize())) kills += 1;
      }
    }
    for (const barrel of this.barrels) {
      if (!barrel.dead && barrel.group.position.distanceTo(center) < aoe + 1) this.damageBarrel(barrel, 999, new THREE.Vector3());
    }
    if (kills > 0) this.unlockAchievement('hive');
  }

  damageBarrel(barrel, amount, direction) {
    if (barrel.dead) return;
    barrel.health -= amount;
    if (barrel.health <= 0) { this.explodeBarrel(barrel); return; }
    barrel.flash = 0.12;
    if (barrel.bodyMaterial) barrel.bodyMaterial.emissiveIntensity = 2.4;
  }

  explodeBarrel(barrel) {
    if (barrel.dead) return;
    barrel.dead = true;
    const center = barrel.group.position.clone();
    this.scene.remove(barrel.group);
    this.barrelMeshes = this.barrelMeshes.filter((mesh) => mesh.userData.barrel !== barrel);
    this.obstacles = this.obstacles.filter((box) => box !== barrel.box);
    this.spawnParticles(center.clone().add(new THREE.Vector3(0, 0.8, 0)), 0xffa24a, this.isTouch ? 18 : 34, 7);
    this.createPulseEffect(center, 0xff7a3d, 6);
    this.audio.explosion();
    this.shake = Math.min(1.4, this.shake + 0.5);
    const aoe = 5.5;
    let kills = 0;
    for (const enemy of this.enemies) {
      if (enemy.dead) continue;
      const distance = enemy.group.position.distanceTo(center);
      if (distance < aoe + enemy.radius) {
        if (this.damageEnemy(enemy, 120 * (1 - distance / (aoe + enemy.radius) * 0.5), center.clone().sub(enemy.group.position).setY(0).normalize())) kills += 1;
      }
    }
    if (center.distanceTo(this.player.position) < 4.5) this.damagePlayer(34 * (1 - center.distanceTo(this.player.position) / 4.5 * 0.6), center);
    for (const other of this.barrels) {
      if (!other.dead && other !== barrel && other.group.position.distanceTo(center) < 4.5) this.damageBarrel(other, 999, new THREE.Vector3());
    }
    if (kills >= 2) this.unlockAchievement('barrel');
  }

  createHealBeam(start, end) {
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    const material = new THREE.LineBasicMaterial({ color: 0x6bffb0, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
    this.tracers.push({ line, life: 0.25, maxLife: 0.25 });
  }

  updateBarrels(dt) {
    for (const barrel of this.barrels) {
      if (barrel.dead || barrel.flash <= 0) continue;
      barrel.flash -= dt;
      if (barrel.flash <= 0 && barrel.bodyMaterial) barrel.bodyMaterial.emissiveIntensity = 0.5;
    }
  }

  chainLightning(sourceEnemy, hitPoint, baseDamage, jumps, visited) {
    if (jumps <= 0) return 0;
    let from = hitPoint.clone();
    let chained = 0;
    for (let jump = 0; jump < jumps; jump++) {
      let best = null;
      let bestDistance = 11;
      for (const enemy of this.enemies) {
        if (enemy.dead || enemy.phased || visited.has(enemy)) continue;
        const distance = enemy.group.position.distanceTo(from);
        if (distance < bestDistance) { bestDistance = distance; best = enemy; }
      }
      if (!best) break;
      visited.add(best);
      const target = best.group.position.clone().add(new THREE.Vector3(0, best.height * 0.5, 0));
      this.createArc(from, target, 0x7de8ff);
      this.damageEnemy(best, baseDamage * Math.pow(0.72, jump + 1) * this.player.chainDamage, target.clone().sub(from).normalize());
      from = target;
      chained += 1;
    }
    if (chained >= 3) this.unlockAchievement('arc-chain');
    return chained;
  }

  createArc(start, end, color) {
    const points = [];
    const segments = 6;
    for (let i = 0; i <= segments; i++) {
      const point = start.clone().lerp(end, i / segments);
      if (i > 0 && i < segments) point.add(new THREE.Vector3(random(-0.35, 0.35), random(-0.35, 0.35), random(-0.35, 0.35)));
      points.push(point);
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
    this.tracers.push({ line, life: 0.18, maxLife: 0.18 });
  }

  getAimAssist(origin, direction) {
    let best = null;
    let bestAngle = this.isBoard ? 0.2 : 0.12;
    const maxRange = this.isBoard ? 60 : 45;
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.spawnTime > 0 || enemy.phased) continue;
      const target = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.type === 'boss' ? 3 : enemy.height * 0.5, 0));
      const toTarget = target.sub(origin);
      const distance = toTarget.length();
      if (distance > maxRange) continue;
      toTarget.normalize();
      const angle = Math.acos(clamp(direction.dot(toTarget), -1, 1));
      if (angle < bestAngle) { bestAngle = angle; best = toTarget; }
    }
    return best;
  }

  damageEnemy(enemy, amount, direction, meta = {}) {
    if (enemy.dead) return false;
    let final = amount;
    if (this.player.executeBonus > 1 && enemy.health / enemy.maxHealth < this.player.executeThreshold) final *= this.player.executeBonus;
    if (meta.critRoll) {
      this.critCount += 1;
      if (this.critCount >= 10) this.unlockAchievement('crit-10');
    }
    enemy.health -= final;
    enemy.hitTimer = 0.07;
    enemy.healthBar.visible = true;
    const ratio = clamp(enemy.health / enemy.maxHealth, 0, 1);
    enemy.barFill.scale.x = ratio;
    enemy.barFill.position.x = -(1 - ratio) * (enemy.barHalf || 0.6);
    this.showDamageNumber(enemy, final, Boolean(meta.critical), enemy.health <= 0);
    if (enemy.health <= 0) {
      this.killEnemy(enemy, direction);
      return true;
    }
    return false;
  }

  showDamageNumber(enemy, amount, critical, kill) {
    const callback = this.callbacks.onDamageNumber;
    if (!callback) return;
    const point = enemy.group.position.clone().add(new THREE.Vector3(random(-0.3, 0.3), enemy.height * 0.6, 0));
    point.project(this.camera);
    if (point.z < -1 || point.z > 1) return;
    callback({
      amount: Math.round(amount),
      x: (point.x * 0.5 + 0.5) * innerWidth,
      y: (-point.y * 0.5 + 0.5) * innerHeight,
      critical, kill,
    });
  }

  killEnemy(enemy, direction = new THREE.Vector3()) {
    if (enemy.dead) return;
    enemy.dead = true;
    enemy.deathTimer = enemy.type === 'boss' ? 1.4 : 0.5;
    enemy.healthBar.visible = false;
    this.enemyHitMeshes = this.enemyHitMeshes.filter((mesh) => mesh.userData.enemy !== enemy);
    this.kills += 1;
    this.combo = Math.min(4, this.combo + (enemy.type === 'boss' ? 1 : 0.2));
    this.comboTimer = 4;
    this.comboPeak = Math.max(this.comboPeak, this.combo);
    this.addEnergy(6);
    this.unlockAchievement('first-blood');
    if (this.combo >= 2.5) this.unlockAchievement('combo-master');
    if (enemy.type === 'bomber') this.unlockAchievement('defuser');
    if (enemy.type === 'medic') this.unlockAchievement('medic-down');
    const gained = Math.floor(enemy.score * this.combo);
    this.score += gained;
    this.player.health = Math.min(this.player.maxHealth, this.player.health + this.player.killHeal);
    this.player.shield = Math.min(this.player.maxShield, this.player.shield + this.player.killHeal * 0.75);
    const position = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.type === 'boss' ? 3 : 1.1, 0));
    this.spawnParticles(position, ENEMY_DATA[enemy.type].color, enemy.type === 'boss' ? 70 : 20, enemy.type === 'boss' ? 8 : 4.5);
    if (enemy.type === 'boss') {
      this.audio.explosion();
      this.shake = 2;
      this.createPulseEffect(position, 0xff7755, 16);
    } else this.audio.kill();
    this.callbacks.onKill(enemy.name, gained);
    const totalAmmo = this.weaponState.reduce((sum, weapon) => sum + weapon.ammo + weapon.reserve, 0);
    const dropChance = (this.mode === 'training' ? 0.35 : 0.24) * this.difficulty.drop;
    if (enemy.type !== 'boss' && (Math.random() < dropChance || totalAmmo < 25)) {
      const roll = Math.random();
      let type = this.player.health < this.player.maxHealth * 0.55 && roll < 0.5 ? 'health' : roll < 0.34 ? 'health' : roll < 0.67 ? 'shield' : 'ammo';
      if (totalAmmo < 25) type = 'ammo';
      this.spawnPickup(enemy.group.position, type);
    }
  }

  reload() {
    if (this.state !== 'playing' || this.reloadTimer > 0 || this.switchTimer > 0) return;
    const weapon = WEAPONS[this.weaponIndex];
    const state = this.weaponState[this.weaponIndex];
    if (state.ammo >= weapon.magazine || state.reserve <= 0) return;
    this.reloadTimer = weapon.reload / this.player.reloadMultiplier;
    this.firing = false;
    this.audio.reload();
  }

  finishReload() {
    const weapon = WEAPONS[this.weaponIndex];
    const state = this.weaponState[this.weaponIndex];
    const needed = weapon.magazine - state.ammo;
    const amount = Math.min(needed, state.reserve);
    state.ammo += amount;
    state.reserve -= amount;
    this.audio.reload();
  }

  switchWeapon(index) {
    if (this.state !== 'playing' || index === this.weaponIndex || index > this.unlockedWeapon || index < 0) return;
    this.weaponIndex = index;
    this.reloadTimer = 0;
    this.switchTimer = 0.32;
    this.weaponRecoil = 0.8;
    this.buildWeaponModel(index);
    this.audio.ui();
  }

  dash() {
    if (this.state !== 'playing' || this.player.dashCooldown > 0 || this.player.dashTime > 0) return;
    this.player.dashCooldown = this.player.dashMax;
    this.player.dashTime = 0.19;
    this.player.invulnerable = 0.28;
    this.audio.dash();
  }

  pulse() {
    if (this.state !== 'playing' || this.player.pulseCooldown > 0) return;
    this.player.pulseCooldown = this.player.pulseMax * (this.player.overdrive > 0 ? 0.5 : 1);
    const center = this.player.position.clone();
    this.createPulseEffect(center, 0x54f7d2, this.player.pulseRadius);
    this.audio.pulse();
    this.shake = 0.65;
    for (const enemy of this.enemies) {
      if (enemy.dead) continue;
      const distance = enemy.group.position.distanceTo(center);
      if (distance <= this.player.pulseRadius) {
        const direction = enemy.group.position.clone().sub(center).setY(0).normalize();
        this.damageEnemy(enemy, this.player.pulseDamage * this.player.damageMultiplier * (1 - distance / this.player.pulseRadius * 0.35), direction);
        if (!enemy.dead) enemy.group.position.addScaledVector(direction, enemy.type === 'boss' ? 0.4 : 1.4);
      }
    }
  }

  createPulseEffect(center, color, radius) {
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 64), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(center);
    mesh.position.y = 0.12;
    this.scene.add(mesh);
    this.effects.push({ mesh, life: 0.65, maxLife: 0.65, radius });
  }

  createTracer(start, end, color, life) {
    const muzzle = this.weaponRoot.localToWorld(new THREE.Vector3(0, 0, -0.8));
    const geometry = new THREE.BufferGeometry().setFromPoints([muzzle, end]);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
    this.tracers.push({ line, life, maxLife: life });
  }

  spawnParticles(position, color, count = 8, speed = 2) {
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, toneMapped: false });
    const allowed = Math.min(count, this.maxParticles);
    for (let i = 0; i < allowed; i++) {
      const mesh = new THREE.Mesh(this.sharedParticleGeometry, material.clone());
      mesh.position.copy(position);
      mesh.scale.setScalar(random(0.5, 1.8));
      this.scene.add(mesh);
      const velocity = new THREE.Vector3(random(-1, 1), random(-0.25, 1.4), random(-1, 1)).normalize().multiplyScalar(random(speed * 0.35, speed));
      this.particles.push({ mesh, velocity, life: random(0.25, 0.65), maxLife: 0.65 });
    }
  }

  updateEffects(dt) {
    for (const particle of this.particles) {
      particle.life -= dt;
      particle.velocity.y -= 5 * dt;
      particle.mesh.position.addScaledVector(particle.velocity, dt);
      particle.mesh.material.opacity = clamp(particle.life / particle.maxLife, 0, 1);
      if (particle.life <= 0) { this.scene.remove(particle.mesh); particle.remove = true; }
    }
    this.particles = this.particles.filter((particle) => !particle.remove);
    for (const tracer of this.tracers) {
      tracer.life -= dt;
      tracer.line.material.opacity = clamp(tracer.life / tracer.maxLife, 0, 1);
      if (tracer.life <= 0) { this.scene.remove(tracer.line); tracer.line.geometry.dispose(); tracer.line.material.dispose(); tracer.remove = true; }
    }
    this.tracers = this.tracers.filter((tracer) => !tracer.remove);
    for (const effect of this.effects) {
      effect.life -= dt;
      const progress = 1 - effect.life / effect.maxLife;
      effect.mesh.scale.setScalar(1 + progress * effect.radius);
      effect.mesh.material.opacity = (1 - progress) * 0.8;
      if (effect.life <= 0) { this.scene.remove(effect.mesh); effect.mesh.geometry.dispose(); effect.mesh.material.dispose(); effect.remove = true; }
    }
    this.effects = this.effects.filter((effect) => !effect.remove);
  }

  spawnPickup(position, type) {
    const colors = { health: 0x54f7d2, shield: 0x58aaff, ammo: 0xffc65c };
    const group = new THREE.Group();
    const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.3, 0), new THREE.MeshBasicMaterial({ color: colors[type], toneMapped: false }));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.025, 6, 24), new THREE.MeshBasicMaterial({ color: colors[type], transparent: true, opacity: 0.65, toneMapped: false }));
    ring.rotation.x = Math.PI / 2;
    group.add(core, ring);
    group.position.copy(position).setY(0.7);
    this.scene.add(group);
    this.pickups.push({ group, type, life: 18, phase: Math.random() * 6 });
  }

  updatePickups(dt) {
    for (const pickup of this.pickups) {
      pickup.life -= dt;
      pickup.phase += dt;
      pickup.group.rotation.y += dt * 1.8;
      pickup.group.position.y = 0.7 + Math.sin(pickup.phase * 2.5) * 0.12;
      if (pickup.group.position.distanceTo(this.player.position) < this.player.pickupRadius) {
        const power = this.player.pickupPower;
        if (pickup.type === 'health') this.player.health = Math.min(this.player.maxHealth, this.player.health + 30 * power);
        if (pickup.type === 'shield') this.player.shield = Math.min(this.player.maxShield, this.player.shield + 25 * power);
        if (pickup.type === 'ammo') {
          this.weaponState.forEach((state, index) => { state.reserve += Math.ceil(WEAPONS[index].magazine * 1.5 * this.player.ammoMultiplier * power); });
        }
        this.callbacks.onToast({ health: `纳米修复 +${Math.round(30 * power)} HP`, shield: `护盾能量 +${Math.round(25 * power)} SH`, ammo: '备用弹药已补充' }[pickup.type]);
        this.audio.pickup();
        pickup.life = 0;
      }
      if (pickup.life <= 0) { this.scene.remove(pickup.group); pickup.remove = true; }
    }
    this.pickups = this.pickups.filter((pickup) => !pickup.remove);
  }

  damagePlayer(amount, source) {
    if (this.state !== 'playing' || this.player.invulnerable > 0 || this.mode === 'training') return;
    this.player.lastDamage = 0;
    this.waveDamageTaken += amount;
    this.addEnergy(8);
    let remaining = amount;
    if (this.player.shield > 0) {
      const absorbed = Math.min(this.player.shield, remaining);
      this.player.shield -= absorbed;
      remaining -= absorbed;
    }
    this.player.health -= remaining;
    this.shake = Math.min(1.3, this.shake + 0.5);
    this.audio.damage();
    const toSource = source.clone().sub(this.player.position);
    const sourceAngle = Math.atan2(toSource.x, toSource.z);
    this.callbacks.onDamage(sourceAngle - this.yaw);
    if (this.player.health <= 0) this.end(false);
  }

  checkWave(dt) {
    if (this.intermission) {
      this.nextWaveTimer -= dt;
      if (this.nextWaveTimer <= 0) this.startWave();
      return;
    }
    if (this.spawnQueue.length) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) {
        const type = this.spawnQueue.shift();
        this.spawnEnemy(type);
        this.spawnTimer = Math.max(0.28, 0.9 - this.wave * 0.035);
      }
    }
    const alive = this.enemies.some((enemy) => !enemy.dead);
    if (!this.spawnQueue.length && !alive && !this.waveClearPending) {
      this.waveClearPending = true;
      if (this.wave > 0 && this.waveDamageTaken === 0) this.unlockAchievement('flawless');
      const runId = this.runId;
      if (this.mode === 'campaign' && this.wave >= 10) {
        setTimeout(() => { if (this.runId === runId && this.state === 'playing') this.end(true); }, 1200);
      } else {
        setTimeout(() => { if (this.runId === runId && this.state === 'playing' && this.waveClearPending) this.offerUpgrades(); }, 900);
      }
    }
  }

  offerUpgrades() {
    this.state = 'upgrade';
    this.firing = false;
    document.exitPointerLock?.();
    const pool = [...UPGRADES];
    this.currentUpgradeChoices = [];
    while (this.currentUpgradeChoices.length < 3) {
      const index = Math.floor(Math.random() * pool.length);
      this.currentUpgradeChoices.push(pool.splice(index, 1)[0]);
    }
    this.callbacks.onUpgrades(this.currentUpgradeChoices);
    this.callbacks.onState('upgrade');
  }

  chooseUpgrade(index) {
    if (this.state !== 'upgrade' || !this.currentUpgradeChoices[index]) return;
    const upgrade = this.currentUpgradeChoices[index];
    upgrade.apply(this);
    this.appliedUpgrades.push({ name: upgrade.name, icon: upgrade.icon });
    this.audio.upgrade();
    this.state = 'playing';
    this.waveClearPending = false;
    this.intermission = true;
    this.nextWaveTimer = 2.1;
    this.callbacks.onState('playing');
    this.callbacks.onAnnounce(upgrade.name, '模块安装完成 · 下一波即将到来', 'TACTICAL MODULE / INSTALLED', 1900);
    this.requestLock();
  }

  end(victory) {
    if (this.state === 'ended') return;
    this.state = 'ended';
    this.firing = false;
    document.exitPointerLock?.();
    const previousBest = Number(localStorage.getItem('nexus-best-score') || 0);
    const previousWave = Number(localStorage.getItem('nexus-best-wave') || 0);
    const newRecord = this.score > previousBest;
    if (newRecord) localStorage.setItem('nexus-best-score', String(Math.floor(this.score)));
    if (this.wave > previousWave) localStorage.setItem('nexus-best-wave', String(this.wave));
    if (victory) {
      this.unlockAchievement('victory');
      if (this.difficulty.id === 'nightmare') this.unlockAchievement('nightmare');
    }
    const career = this.saveCareer(victory);
    if (victory) this.audio.victory(); else this.audio.gameOver();
    this.callbacks.onState('ended', { victory, score: this.score, wave: this.wave, kills: this.kills, accuracy: this.shotsFired ? this.shotsHit / this.shotsFired * 100 : 0, newRecord, career, difficulty: this.difficulty.label, achievements: [...this.runAchievements] });
  }

  saveCareer(victory) {
    let career = { runs: 0, kills: 0, wins: 0, bestCombo: 1, achievements: [] };
    try { career = { ...career, ...JSON.parse(localStorage.getItem('nexus-career') || '{}') }; } catch (_) { /* Ignore corrupted storage. */ }
    career.runs += 1;
    career.kills += this.kills;
    if (victory) career.wins += 1;
    career.bestCombo = Math.max(Number(career.bestCombo) || 1, this.comboPeak);
    career.achievements = [...new Set([...(career.achievements || []), ...this.runAchievements])];
    try { localStorage.setItem('nexus-career', JSON.stringify(career)); } catch (_) { /* Storage may be unavailable. */ }
    return career;
  }

  updateHUD(force = false) {
    if (!force && this.hudTimer > 0) return;
    this.hudTimer = 0.07;
    const boss = this.enemies.find((enemy) => enemy.type === 'boss' && !enemy.dead);
    this.callbacks.onHUD({
      health: this.player.health, maxHealth: this.player.maxHealth, shield: this.player.shield, maxShield: this.player.maxShield,
      wave: this.wave, mode: this.mode, enemies: this.enemies.filter((enemy) => !enemy.dead).length + this.spawnQueue.length,
      score: this.score, combo: this.combo, weapon: WEAPONS[this.weaponIndex], weaponIndex: this.weaponIndex,
      ammo: this.weaponState[this.weaponIndex].ammo, reserve: this.weaponState[this.weaponIndex].reserve,
      reloading: this.reloadTimer > 0, unlockedWeapon: this.unlockedWeapon, dashCooldown: this.player.dashCooldown,
      dashMax: this.player.dashMax, pulseMax: this.player.pulseMax * (this.player.overdrive > 0 ? 0.5 : 1),
      pulseCooldown: this.player.pulseCooldown, boss: boss ? { health: boss.health, maxHealth: boss.maxHealth } : null,
      energy: this.player.energy, energyMax: this.player.energyMax, overdrive: this.player.overdrive,
      difficulty: this.difficulty.label, critChance: this.player.critChance,
      intermission: this.intermission, elapsed: this.elapsed,
      profile: this.profile, demo: this.demoMode, board: this.isBoard,
    });
  }

  drawRadar() {
    const context = this.radarContext;
    const size = this.radar.width;
    const center = size / 2;
    const scale = size / 90;
    context.clearRect(0, 0, size, size);
    context.save();
    context.beginPath();
    context.arc(center, center, center - 2, 0, Math.PI * 2);
    context.clip();
    context.strokeStyle = 'rgba(84,247,210,.13)';
    context.lineWidth = 1;
    [0.33, 0.66, 1].forEach((ratio) => { context.beginPath(); context.arc(center, center, center * ratio, 0, Math.PI * 2); context.stroke(); });
    context.beginPath(); context.moveTo(center, 0); context.lineTo(center, size); context.moveTo(0, center); context.lineTo(size, center); context.stroke();
    const plot = (position, color, radius) => {
      const dx = position.x - this.player.position.x;
      const dz = position.z - this.player.position.z;
      const cos = Math.cos(-this.yaw);
      const sin = Math.sin(-this.yaw);
      const x = dx * cos - dz * sin;
      const z = dx * sin + dz * cos;
      if (Math.hypot(x, z) > 43) return;
      context.fillStyle = color;
      context.beginPath();
      context.arc(center + x * scale, center + z * scale, radius, 0, Math.PI * 2);
      context.fill();
    };
    this.enemies.forEach((enemy) => { if (!enemy.dead && !enemy.phased) plot(enemy.group.position, enemy.type === 'boss' ? '#ff9a55' : enemy.type === 'turret' ? '#ffb24d' : enemy.type === 'medic' ? '#47e0a0' : enemy.type === 'bomber' ? '#ffc24d' : enemy.type === 'phantom' ? '#5ce1ff' : '#ff5362', enemy.type === 'boss' ? 4 : 2.2); });
    this.pickups.forEach((pickup) => plot(pickup.group.position, '#54f7d2', 1.5));
    context.restore();
    context.fillStyle = '#a9fff0';
    context.beginPath();
    context.moveTo(center, center - 6);
    context.lineTo(center - 4, center + 4);
    context.lineTo(center + 4, center + 4);
    context.closePath();
    context.fill();
  }

  updateMenu(dt) {
    this.menuTime += dt;
    const t = this.menuTime * 0.055;
    this.camera.position.set(Math.sin(t) * 30 + 8, 7 + Math.sin(t * 2) * 1.2, Math.cos(t) * 30 + 4);
    this.camera.lookAt(0, 2.7, 0);
    this.camera.fov = lerp(this.camera.fov, 58, dt * 2);
    this.camera.updateProjectionMatrix();
    this.weaponRoot.visible = false;
  }

  animate() {
    requestAnimationFrame(this.animate);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.animatedWorld.forEach(({ mesh, speed, axis, update }) => {
      if (update) update(dt, this.menuTime + this.elapsed);
      else if (axis) mesh.rotation[axis] += speed * dt;
    });
    if (this.dust) this.dust.rotation.y += dt * 0.003;
    if (this.state === 'playing') {
      this.elapsed += dt;
      this.hudTimer -= dt;
      this.radarTimer -= dt;
      this.updatePlayer(dt);
      this.updateEnemies(dt);
      this.updateProjectiles(dt);
      this.updatePickups(dt);
      this.updateEffects(dt);
      this.updateBarrels(dt);
      this.checkWave(dt);
      this.updateHUD();
      if (this.radarTimer <= 0) { this.radarTimer = 0.09; this.drawRadar(); }
    } else if (this.state === 'menu') {
      this.updateMenu(dt);
      this.updateEffects(dt);
    }
    this.renderer.render(this.scene, this.camera);
  }
}
