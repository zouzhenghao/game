import * as THREE from 'three';
import { AudioSystem } from './Audio.js';

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const random = (min, max) => min + Math.random() * (max - min);
const isTouchDevice = () => matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;

const WEAPONS = [
  { id: 'rifle', name: 'VX-9 脉冲', label: 'VX-9 <span>脉冲</span>', className: '突击步枪 // AUTO', damage: 24, fireRate: 9, magazine: 30, reserve: 180, reload: 1.45, spread: 0.009, pellets: 1, auto: true, range: 90 },
  { id: 'shotgun', name: 'SG-12 裂解', label: 'SG-12 <span>裂解</span>', className: '战术霰弹枪 // PUMP', damage: 14, fireRate: 1.2, magazine: 6, reserve: 42, reload: 1.8, spread: 0.065, pellets: 8, auto: false, range: 42 },
  { id: 'rail', name: 'R-01 磁轨', label: 'R-01 <span>磁轨</span>', className: '磁轨精确步枪 // SEMI', damage: 135, fireRate: 0.8, magazine: 5, reserve: 25, reload: 2.1, spread: 0.001, pellets: 1, auto: false, range: 130, pierce: true },
];

const ENEMY_DATA = {
  runner: { name: '猎犬突击体', health: 65, speed: 4.7, damage: 13, score: 120, radius: 0.55, color: 0xff4658 },
  drone: { name: '蜂群射手', health: 90, speed: 2.7, damage: 10, score: 180, radius: 0.65, color: 0xb367ff },
  tank: { name: '重装碾压者', health: 310, speed: 1.35, damage: 16, score: 420, radius: 0.95, color: 0xff8a3d },
  boss: { name: '守望者核心', health: 2600, speed: 1.45, damage: 18, score: 5000, radius: 2.1, color: 0xff593d },
};

const UPGRADES = [
  { id: 'damage', icon: '↟', type: 'FIREPOWER', name: '超载弹药', description: '所有武器伤害提高 22%。让每一次命中都更具威胁。', apply: (g) => { g.player.damageMultiplier *= 1.22; } },
  { id: 'firerate', icon: '≫', type: 'FIREPOWER', name: '高速枪机', description: '射击间隔缩短 15%，装填速度提高 10%。', apply: (g) => { g.player.fireRateMultiplier *= 1.15; g.player.reloadMultiplier *= 1.1; } },
  { id: 'health', icon: '✚', type: 'SURVIVAL', name: '纳米修复', description: '最大生命值提高 30，并立即恢复全部生命。', apply: (g) => { g.player.maxHealth += 30; g.player.health = g.player.maxHealth; } },
  { id: 'shield', icon: '◇', type: 'SURVIVAL', name: '电容护盾', description: '最大护盾提高 25，护盾恢复速度提高 30%。', apply: (g) => { g.player.maxShield += 25; g.player.shield = g.player.maxShield; g.player.shieldRegen *= 1.3; } },
  { id: 'speed', icon: '⌁', type: 'MOBILITY', name: '动力肌腱', description: '移动速度提高 12%，相位冲刺冷却缩短 20%。', apply: (g) => { g.player.speedMultiplier *= 1.12; g.player.dashMax *= 0.8; } },
  { id: 'pulse', icon: '◎', type: 'ABILITY', name: '脉冲增幅', description: '电磁脉冲范围扩大 25%，伤害提高 35%。', apply: (g) => { g.player.pulseRadius *= 1.25; g.player.pulseDamage *= 1.35; } },
  { id: 'ammo', icon: '▤', type: 'UTILITY', name: '战场回收', description: '立刻补满备用弹药，后续弹药拾取量提高 50%。', apply: (g) => { g.weaponState.forEach((w, i) => { w.reserve = WEAPONS[i].reserve; }); g.player.ammoMultiplier *= 1.5; } },
  { id: 'leech', icon: '⟁', type: 'SURVIVAL', name: '猎手协议', description: '每次击毁敌人恢复 4 点生命与 3 点护盾。', apply: (g) => { g.player.killHeal += 4; } },
];

export class Game {
  constructor(canvas, radar, callbacks) {
    this.canvas = canvas;
    this.radar = radar;
    this.radarContext = radar.getContext('2d');
    this.callbacks = callbacks;
    this.audio = new AudioSystem();
    this.isTouch = isTouchDevice();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x03080b);
    this.scene.fog = new THREE.Fog(0x071115, 24, 112);
    this.camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.05, 220);
    this.camera.rotation.order = 'YXZ';
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.isTouch ? 1.25 : 1.65));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.shadowMap.enabled = !this.isTouch;
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
    const world = new THREE.Group();
    this.scene.add(world);
    this.world = world;
    const hemi = new THREE.HemisphereLight(0x70a5ae, 0x020303, 1.75);
    this.scene.add(hemi);
    const moon = new THREE.DirectionalLight(0x9cdedb, 2.35);
    moon.position.set(-25, 40, 18);
    moon.castShadow = !this.isTouch;
    moon.shadow.mapSize.set(1024, 1024);
    moon.shadow.camera.left = -55;
    moon.shadow.camera.right = 55;
    moon.shadow.camera.top = 55;
    moon.shadow.camera.bottom = -55;
    this.scene.add(moon);
    const coreLight = new THREE.PointLight(0x24ffd0, 35, 40, 2);
    coreLight.position.set(0, 5, 0);
    this.scene.add(coreLight);
    const magenta = new THREE.PointLight(0xc145ff, 25, 36, 2);
    magenta.position.set(-30, 5, -25);
    this.scene.add(magenta);

    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x111d21, roughness: 0.65, metalness: 0.62 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    world.add(floor);
    this.worldColliders.push(floor);
    const grid = new THREE.GridHelper(150, 75, 0x2b9b89, 0x17312f);
    grid.material.transparent = true;
    grid.material.opacity = 0.23;
    grid.position.y = 0.012;
    world.add(grid);

    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x111b1f, roughness: 0.48, metalness: 0.8 });
    const blackMetal = new THREE.MeshStandardMaterial({ color: 0x070c0f, roughness: 0.4, metalness: 0.9 });
    const cyanGlow = new THREE.MeshBasicMaterial({ color: 0x44e9c5, toneMapped: false });
    const dimGlow = new THREE.MeshBasicMaterial({ color: 0x1b6d63, toneMapped: false });
    const purpleGlow = new THREE.MeshBasicMaterial({ color: 0x963dce, toneMapped: false });

    // Central containment reactor.
    const reactor = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 5.2, 0.65, 12), darkMetal);
    base.position.y = 0.32;
    base.receiveShadow = true;
    reactor.add(base);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.9, 5.5, 12), new THREE.MeshStandardMaterial({ color: 0x102e2a, emissive: 0x19d5ad, emissiveIntensity: 1.15, metalness: 0.7, roughness: 0.2 }));
    core.position.y = 3.1;
    reactor.add(core);
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2 + i * 0.45, 0.055, 8, 64), i === 1 ? purpleGlow : cyanGlow);
      ring.position.y = 2.1 + i * 0.85;
      ring.rotation.x = Math.PI / 2 + (i - 1) * 0.25;
      reactor.add(ring);
      this.animatedWorld.push({ mesh: ring, speed: (i % 2 ? -1 : 1) * (0.18 + i * 0.07), axis: 'z' });
    }
    for (let i = 0; i < 6; i++) {
      const angle = i / 6 * Math.PI * 2;
      const strut = new THREE.Mesh(new THREE.BoxGeometry(0.35, 3.8, 0.35), darkMetal);
      strut.position.set(Math.cos(angle) * 3.4, 2.1, Math.sin(angle) * 3.4);
      strut.rotation.z = Math.cos(angle) * -0.22;
      strut.rotation.x = Math.sin(angle) * 0.22;
      reactor.add(strut);
    }
    world.add(reactor);
    this.obstacles.push({ minX: -4.4, maxX: 4.4, minZ: -4.4, maxZ: 4.4 });
    this.worldColliders.push(base, core);

    // Deliberately placed cover creates useful combat lanes.
    const covers = [
      [-12, -10, 4, 1.3, 1.7], [12, 10, 4, 1.3, 1.7], [-14, 14, 1.4, 5, 2.1], [14, -14, 1.4, 5, 2.1],
      [-28, 1, 5, 1.4, 1.4], [28, -1, 5, 1.4, 1.4], [1, 29, 1.4, 5, 1.8], [-1, -29, 1.4, 5, 1.8],
      [-30, -24, 3, 3, 2.7], [30, 24, 3, 3, 2.7], [26, -29, 4, 2, 1.5], [-26, 29, 4, 2, 1.5],
      [-8, 35, 2, 2, 2.4], [8, -35, 2, 2, 2.4], [37, 10, 2, 4, 2.2], [-37, -10, 2, 4, 2.2],
    ];
    covers.forEach(([x, z, w, d, h], index) => {
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), index % 3 === 0 ? blackMetal : darkMetal);
      mesh.position.y = h / 2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(w + 0.025, 0.045, d + 0.025), index % 4 === 0 ? purpleGlow : dimGlow);
      strip.position.y = h * 0.72;
      group.add(strip);
      group.position.set(x, 0, z);
      world.add(group);
      this.obstacles.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
      this.worldColliders.push(mesh);
    });

    // Arena walls and distant procedural megacity.
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x0b1317, metalness: 0.75, roughness: 0.5 });
    [[0, -70, 142, 2], [0, 70, 142, 2], [-70, 0, 2, 142], [70, 0, 2, 142]].forEach(([x, z, w, d]) => {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(w, 5, d), wallMaterial);
      wall.position.set(x, 2.5, z);
      world.add(wall);
      this.worldColliders.push(wall);
      const lightStrip = new THREE.Mesh(new THREE.BoxGeometry(w + 0.05, 0.08, d + 0.05), dimGlow);
      lightStrip.position.set(x, 4.2, z);
      world.add(lightStrip);
    });
    let seed = 7147;
    const seeded = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    for (let i = 0; i < 75; i++) {
      const angle = seeded() * Math.PI * 2;
      const radius = 78 + seeded() * 62;
      const width = 4 + seeded() * 10;
      const depth = 4 + seeded() * 10;
      const height = 12 + seeded() * 65;
      const building = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(0.52, 0.15, 0.025 + seeded() * 0.035), roughness: 0.8, metalness: 0.45 }));
      building.position.set(Math.cos(angle) * radius, height / 2 - 1, Math.sin(angle) * radius);
      world.add(building);
      if (i % 2 === 0) {
        const windowStrip = new THREE.Mesh(new THREE.BoxGeometry(width + 0.05, 0.12 + seeded() * 0.18, depth + 0.05), i % 6 === 0 ? purpleGlow : dimGlow);
        windowStrip.position.copy(building.position);
        windowStrip.position.y = height * (0.35 + seeded() * 0.5);
        world.add(windowStrip);
      }
      if (i % 7 === 0) {
        const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 9, 5), dimGlow);
        antenna.position.copy(building.position);
        antenna.position.y = height + 3.5;
        world.add(antenna);
      }
    }

    // Spawn gates.
    this.spawnPoints = [
      new THREE.Vector3(-48, 0, -48), new THREE.Vector3(48, 0, -48), new THREE.Vector3(-48, 0, 48), new THREE.Vector3(48, 0, 48),
      new THREE.Vector3(0, 0, -54), new THREE.Vector3(0, 0, 54), new THREE.Vector3(-54, 0, 0), new THREE.Vector3(54, 0, 0),
    ];
    this.spawnPoints.forEach((point, index) => {
      const gate = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.09, 8, 40), index % 2 ? purpleGlow : cyanGlow);
      ring.position.y = 2.2;
      gate.add(ring);
      const sides = [-1, 1];
      sides.forEach((side) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.22, 4.6, 0.35), darkMetal);
        post.position.set(side * 2.15, 2.1, 0);
        gate.add(post);
      });
      gate.position.copy(point);
      gate.lookAt(0, 2, 0);
      world.add(gate);
      this.animatedWorld.push({ mesh: ring, speed: index % 2 ? -0.3 : 0.3, axis: 'z' });
    });

    const dustCount = this.isTouch ? 350 : 800;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = random(-75, 75);
      dustPositions[i * 3 + 1] = random(0.2, 25);
      dustPositions[i * 3 + 2] = random(-75, 75);
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0x65b8a9, size: 0.045, transparent: true, opacity: 0.45, depthWrite: false }));
    world.add(dust);
    this.dust = dust;
  }

  createViewModel() {
    this.weaponRoot = new THREE.Group();
    this.camera.add(this.weaponRoot);
    this.scene.add(this.camera);
    this.weaponRoot.position.set(0.36, -0.31, -0.62);
    this.weaponRoot.scale.setScalar(this.isTouch && innerHeight > innerWidth ? 0.72 : 0.9);
    const viewLight = new THREE.PointLight(0xb7fff0, 2.8, 4);
    viewLight.position.set(0.2, 0.25, 0.25);
    this.camera.add(viewLight);
    this.muzzleLight = new THREE.PointLight(0x72ffda, 0, 3);
    this.weaponRoot.add(this.muzzleLight);
    this.buildWeaponModel(0);
  }

  buildWeaponModel(index) {
    if (this.weaponModel) this.weaponRoot.remove(this.weaponModel);
    const group = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({ color: index === 2 ? 0x354b5c : 0x3b4b47, emissive: index === 2 ? 0x101c26 : 0x101c19, emissiveIntensity: 0.45, metalness: 0.82, roughness: 0.3 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x11191b, emissive: 0x050808, emissiveIntensity: 0.3, metalness: 0.75, roughness: 0.4 });
    const glow = new THREE.MeshBasicMaterial({ color: index === 1 ? 0xffa34d : index === 2 ? 0x69bfff : 0x54f7d2, toneMapped: false });
    const addBox = (w, h, d, x, y, z, material = metal) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
      mesh.position.set(x, y, z);
      group.add(mesh);
      return mesh;
    };
    if (index === 0) {
      addBox(0.18, 0.18, 0.65, 0, 0, -0.12);
      addBox(0.1, 0.09, 0.48, 0, 0.025, -0.64, dark);
      addBox(0.13, 0.27, 0.16, 0, -0.19, 0.04, dark).rotation.x = -0.18;
      addBox(0.04, 0.035, 0.5, 0.095, 0.02, -0.18, glow);
      addBox(0.07, 0.06, 0.12, 0, 0.13, -0.16, dark);
    } else if (index === 1) {
      addBox(0.23, 0.21, 0.72, 0, 0, -0.14);
      addBox(0.15, 0.15, 0.5, 0, 0.03, -0.7, dark);
      addBox(0.16, 0.1, 0.25, 0, -0.12, -0.5, metal);
      addBox(0.13, 0.3, 0.15, 0, -0.2, 0.05, dark).rotation.x = -0.22;
      addBox(0.245, 0.035, 0.28, 0, 0.02, -0.25, glow);
    } else {
      addBox(0.17, 0.19, 0.86, 0, 0, -0.22);
      addBox(0.065, 0.065, 0.7, 0, 0.02, -0.94, dark);
      addBox(0.035, 0.07, 0.82, 0.095, 0.02, -0.42, glow);
      addBox(0.035, 0.07, 0.82, -0.095, 0.02, -0.42, glow);
      addBox(0.08, 0.12, 0.3, 0, 0.15, -0.2, dark);
      addBox(0.13, 0.28, 0.16, 0, -0.2, 0.04, dark).rotation.x = -0.18;
    }
    group.traverse((child) => { child.frustumCulled = false; child.renderOrder = 10; });
    this.weaponRoot.add(group);
    this.weaponModel = group;
    this.muzzleLight.position.set(0, 0.02, index === 2 ? -1.25 : -0.95);
  }

  resetPlayer() {
    this.player = {
      position: new THREE.Vector3(0, 1.7, 22), velocity: new THREE.Vector3(), health: 100, maxHealth: 100, shield: 50, maxShield: 50,
      damageMultiplier: 1, fireRateMultiplier: 1, reloadMultiplier: 1, speedMultiplier: 1, ammoMultiplier: 1,
      dashCooldown: 0, dashMax: 5, dashTime: 0, invulnerable: 0, pulseCooldown: 0, pulseRadius: 12, pulseDamage: 75,
      shieldRegen: 8, lastDamage: 0, killHeal: 0,
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
  }

  start(mode = 'campaign') {
    this.audio.init();
    this.runId = (this.runId || 0) + 1;
    this.clearDynamicObjects();
    this.resetPlayer();
    this.mode = mode;
    this.firing = false;
    this.aiming = false;
    this.touchMove = { x: 0, y: 0 };
    this.state = 'playing';
    this.weaponRoot.visible = true;
    this.buildWeaponModel(0);
    this.camera.position.copy(this.player.position);
    this.camera.rotation.set(0, 0, 0);
    this.callbacks.onState('playing');
    this.callbacks.onAnnounce(mode === 'training' ? '模拟训练' : '神经链接建立', mode === 'training' ? '敌方伤害已关闭 · 熟悉你的武器' : '准备迎击第一波敌对单位', 'TACTICAL LINK / CONNECTED', 2400);
    this.nextWaveTimer = 2.2;
    this.intermission = true;
    this.requestLock();
    this.updateHUD(true);
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
      if (event.code === 'Digit1') this.switchWeapon(0);
      if (event.code === 'Digit2') this.switchWeapon(1);
      if (event.code === 'Digit3') this.switchWeapon(2);
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
      for (let i = 0; i < 3; i++) {
        next = (next + direction + 3) % 3;
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
    let stickTouch = null;
    const updateStick = (touch) => {
      const rect = stick.getBoundingClientRect();
      let x = touch.clientX - (rect.left + rect.width / 2);
      let y = touch.clientY - (rect.top + rect.height / 2);
      const length = Math.hypot(x, y);
      const max = rect.width * 0.34;
      if (length > max) { x *= max / length; y *= max / length; }
      knob.style.transform = `translate(${x}px, ${y}px)`;
      this.touchMove = { x: x / max, y: y / max };
    };
    stick.addEventListener('touchstart', (event) => { event.preventDefault(); stickTouch = event.changedTouches[0].identifier; updateStick(event.changedTouches[0]); }, { passive: false });
    stick.addEventListener('touchmove', (event) => { event.preventDefault(); const touch = [...event.changedTouches].find((t) => t.identifier === stickTouch); if (touch) updateStick(touch); }, { passive: false });
    const endStick = (event) => { if ([...event.changedTouches].some((t) => t.identifier === stickTouch)) { stickTouch = null; this.touchMove = { x: 0, y: 0 }; knob.style.transform = ''; } };
    stick.addEventListener('touchend', endStick);
    stick.addEventListener('touchcancel', endStick);

    const look = document.getElementById('look-zone');
    let lookTouch = null;
    let lastLook = null;
    look.addEventListener('touchstart', (event) => { event.preventDefault(); const touch = event.changedTouches[0]; lookTouch = touch.identifier; lastLook = { x: touch.clientX, y: touch.clientY }; }, { passive: false });
    look.addEventListener('touchmove', (event) => {
      event.preventDefault();
      const touch = [...event.changedTouches].find((t) => t.identifier === lookTouch);
      if (!touch || !lastLook || this.state !== 'playing') return;
      this.yaw -= (touch.clientX - lastLook.x) * 0.0042;
      this.pitch = clamp(this.pitch - (touch.clientY - lastLook.y) * 0.0037, -1.4, 1.4);
      lastLook = { x: touch.clientX, y: touch.clientY };
    }, { passive: false });
    const endLook = () => { lookTouch = null; lastLook = null; };
    look.addEventListener('touchend', endLook);
    look.addEventListener('touchcancel', endLook);

    const fire = document.getElementById('mobile-fire');
    fire.addEventListener('touchstart', (event) => { event.preventDefault(); this.firing = true; this.shotThisHold = false; }, { passive: false });
    const stopFire = (event) => { event.preventDefault(); this.firing = false; this.shotThisHold = false; };
    fire.addEventListener('touchend', stopFire);
    fire.addEventListener('touchcancel', stopFire);
    const bindButton = (id, action) => document.getElementById(id).addEventListener('touchstart', (event) => { event.preventDefault(); action(); }, { passive: false });
    bindButton('mobile-reload', () => this.reload());
    bindButton('mobile-dash', () => this.dash());
    bindButton('mobile-pulse', () => this.pulse());
    bindButton('mobile-switch', () => this.switchWeapon((this.weaponIndex + 1) % (this.unlockedWeapon + 1)));
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, this.isTouch ? 1.25 : 1.65));
    if (this.weaponRoot) this.weaponRoot.scale.setScalar(this.isTouch && innerHeight > innerWidth ? 0.72 : 0.9);
  }

  startWave() {
    this.wave += 1;
    this.intermission = false;
    this.waveClearPending = false;
    this.spawnQueue = [];
    const campaignBoss = this.mode === 'campaign' && this.wave === 10;
    const endlessBoss = this.mode === 'endless' && this.wave % 5 === 0;
    if (campaignBoss || endlessBoss) {
      this.spawnQueue.push('boss');
      const minions = Math.min(8, 2 + Math.floor(this.wave / 2));
      for (let i = 0; i < minions; i++) this.spawnQueue.push(i % 3 === 0 ? 'drone' : 'runner');
      this.callbacks.onAnnounce('守望者降临', '摧毁核心装甲 · 注意范围攻击', 'WARNING / APEX SIGNAL', 3200);
    } else {
      const count = this.mode === 'training' ? Math.min(10, 4 + this.wave) : Math.min(30, 4 + this.wave * 2);
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        let type = 'runner';
        if (this.wave >= 2 && roll > 0.52) type = 'drone';
        if (this.wave >= 4 && roll > 0.84) type = 'tank';
        this.spawnQueue.push(type);
      }
      this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2, '0')} 波`, this.wave === 1 ? '敌对信号接近 · 清除所有单位' : '威胁等级上升 · 保持移动', 'HOSTILE SIGNALS DETECTED');
    }
    if (this.wave >= 4 && this.unlockedWeapon < 2) this.unlockWeapon(2);
    else if (this.wave >= 2 && this.unlockedWeapon < 1) this.unlockWeapon(1);
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
    const material = new THREE.MeshStandardMaterial({ color: type === 'boss' ? 0x291713 : 0x171c20, emissive: data.color, emissiveIntensity: 0.45, metalness: 0.8, roughness: 0.3 });
    const glow = new THREE.MeshBasicMaterial({ color: data.color, toneMapped: false });
    const dark = new THREE.MeshStandardMaterial({ color: 0x090b0d, metalness: 0.9, roughness: 0.25 });
    const enemy = {
      type, group, material, health: data.health * (1 + Math.max(0, this.wave - 1) * (type === 'boss' ? 0.12 : 0.085)), maxHealth: 0,
      speed: data.speed * (1 + Math.min(0.45, this.wave * 0.018)), damage: data.damage * (1 + this.wave * 0.025), score: data.score,
      radius: data.radius, name: data.name, attackCooldown: random(0.4, 1.3), spawnTime: 0.85, dead: false, deathTimer: 0,
      strafe: Math.random() > 0.5 ? 1 : -1, phase: Math.random() * Math.PI * 2, hitTimer: 0, healthBar: null, barFill: null,
    };
    enemy.maxHealth = enemy.health;
    const addPart = (geometry, mat, x, y, z, critical = false) => {
      const mesh = new THREE.Mesh(geometry, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = !this.isTouch;
      mesh.userData.enemy = enemy;
      mesh.userData.critical = critical;
      group.add(mesh);
      this.enemyHitMeshes.push(mesh);
      return mesh;
    };
    if (type === 'runner') {
      addPart(new THREE.BoxGeometry(0.72, 0.85, 0.45), material, 0, 1.15, 0);
      addPart(new THREE.OctahedronGeometry(0.33, 0), material, 0, 1.82, 0, true);
      addPart(new THREE.BoxGeometry(0.42, 0.07, 0.36), glow, 0, 1.83, -0.22, true);
      [-1, 1].forEach((side) => {
        const arm = addPart(new THREE.BoxGeometry(0.18, 0.82, 0.2), dark, side * 0.51, 1.13, 0);
        arm.rotation.z = side * -0.2;
        addPart(new THREE.BoxGeometry(0.23, 0.78, 0.26), dark, side * 0.24, 0.4, 0);
      });
      enemy.height = 2.2;
    } else if (type === 'drone') {
      addPart(new THREE.SphereGeometry(0.55, 12, 8), material, 0, 1.85, 0);
      addPart(new THREE.OctahedronGeometry(0.3, 0), glow, 0, 1.85, -0.43, true);
      const ring = addPart(new THREE.TorusGeometry(0.82, 0.065, 6, 24), dark, 0, 1.85, 0);
      ring.rotation.x = Math.PI / 2;
      [-1, 1].forEach((side) => addPart(new THREE.BoxGeometry(0.65, 0.09, 0.28), material, side * 0.72, 1.85, 0));
      enemy.height = 2.6;
      enemy.baseY = 0.35;
    } else if (type === 'tank') {
      addPart(new THREE.BoxGeometry(1.45, 1.45, 1.05), material, 0, 1.25, 0);
      addPart(new THREE.BoxGeometry(0.75, 0.55, 0.65), dark, 0, 2.2, 0, true);
      addPart(new THREE.BoxGeometry(0.5, 0.09, 0.68), glow, 0, 2.23, -0.08, true);
      [-1, 1].forEach((side) => {
        addPart(new THREE.BoxGeometry(0.5, 1.1, 0.65), material, side * 0.97, 1.3, 0);
        addPart(new THREE.CylinderGeometry(0.1, 0.14, 0.9, 8), dark, side * 0.97, 1.55, -0.65).rotation.x = Math.PI / 2;
        addPart(new THREE.BoxGeometry(0.5, 0.6, 0.65), dark, side * 0.45, 0.32, 0);
      });
      enemy.height = 2.8;
    } else {
      addPart(new THREE.SphereGeometry(1.65, 20, 14), material, 0, 3.2, 0);
      addPart(new THREE.IcosahedronGeometry(0.85, 1), glow, 0, 3.2, -1.05, true);
      for (let i = 0; i < 3; i++) {
        const ring = addPart(new THREE.TorusGeometry(2 + i * 0.25, 0.1, 8, 40), i === 1 ? glow : dark, 0, 3.2, 0);
        ring.rotation.x = Math.PI / 2 + i * 0.45;
        ring.userData.spin = (i % 2 ? -1 : 1) * (0.4 + i * 0.15);
      }
      [-1, 1].forEach((side) => {
        addPart(new THREE.BoxGeometry(0.8, 2.8, 0.8), material, side * 2.15, 2.7, 0);
        addPart(new THREE.CylinderGeometry(0.19, 0.26, 1.5, 8), dark, side * 2.15, 2.8, -1).rotation.x = Math.PI / 2;
      });
      enemy.height = 5.5;
      enemy.baseY = 0.4;
    }
    const barGroup = new THREE.Group();
    const barBack = new THREE.Mesh(new THREE.PlaneGeometry(type === 'boss' ? 3 : 1.2, 0.075), new THREE.MeshBasicMaterial({ color: 0x101818, transparent: true, opacity: 0.85, depthTest: false }));
    const barFill = new THREE.Mesh(new THREE.PlaneGeometry(type === 'boss' ? 3 : 1.2, 0.05), new THREE.MeshBasicMaterial({ color: data.color, depthTest: false }));
    barFill.position.z = 0.005;
    barGroup.add(barBack, barFill);
    barGroup.position.y = enemy.height + 0.3;
    barGroup.visible = type === 'boss';
    group.add(barGroup);
    enemy.healthBar = barGroup;
    enemy.barFill = barFill;
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
      enemy.material.emissiveIntensity = enemy.hitTimer > 0 ? 3.5 : (enemy.type === 'boss' ? 0.75 : 0.45);
      enemy.group.children.forEach((child) => { if (child.userData.spin) child.rotation.z += child.userData.spin * dt; });
      if (enemy.spawnTime > 0) {
        enemy.spawnTime -= dt;
        const scale = clamp(1 - enemy.spawnTime / 0.85, 0.02, 1);
        enemy.group.scale.setScalar(scale);
        continue;
      }
      enemy.group.scale.setScalar(1);
      const toPlayer = playerFlat.clone().sub(new THREE.Vector3(enemy.group.position.x, 0, enemy.group.position.z));
      const distance = toPlayer.length();
      toPlayer.normalize();
      enemy.group.rotation.y = Math.atan2(toPlayer.x, toPlayer.z) + Math.PI;
      enemy.attackCooldown -= dt;
      let move = new THREE.Vector3();
      if (enemy.type === 'runner') {
        if (distance > 1.45) move.copy(toPlayer);
        if (distance < 1.85 && enemy.attackCooldown <= 0) {
          this.damagePlayer(enemy.damage, enemy.group.position);
          enemy.attackCooldown = 0.9;
          enemy.group.position.addScaledVector(toPlayer, 0.3);
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
    player.lastDamage += dt;
    if (player.lastDamage > 5 && player.shield < player.maxShield) player.shield = Math.min(player.maxShield, player.shield + player.shieldRegen * dt);
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
    let speed = 6.6 * player.speedMultiplier * (sprinting ? 1.5 : 1) * (this.aiming ? 0.72 : 1);
    if (player.dashTime > 0) {
      player.dashTime -= dt;
      speed = 25;
      if (move.lengthSq() === 0) move.copy(new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)));
      if (Math.random() > 0.4) this.spawnParticles(player.position.clone().add(new THREE.Vector3(0, -0.7, 0)), 0x54f7d2, 1, 0.7);
    }
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
    if (state.ammo <= 0) {
      this.audio.empty();
      this.weaponCooldown = 0.25;
      this.shotThisHold = true;
      this.reload();
      return;
    }
    state.ammo -= 1;
    this.shotsFired += 1;
    this.shotThisHold = true;
    this.weaponCooldown = 1 / (weapon.fireRate * this.player.fireRateMultiplier);
    this.weaponRecoil = Math.min(1.5, this.weaponRecoil + (weapon.id === 'shotgun' ? 1 : weapon.id === 'rail' ? 1.25 : 0.32));
    this.pitch = clamp(this.pitch + (weapon.id === 'shotgun' ? 0.025 : weapon.id === 'rail' ? 0.018 : 0.004), -1.45, 1.45);
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
      const hits = this.raycaster.intersectObjects(this.enemyHitMeshes, false).filter((hit) => !hit.object.userData.enemy.dead && hit.distance < wallDistance);
      let endpoint = origin.clone().addScaledVector(direction, wallDistance);
      if (wallHits.length) endpoint = wallHits[0].point;
      if (hits.length) {
        anyHit = true;
        const uniqueEnemies = [];
        for (const hit of hits) {
          const enemy = hit.object.userData.enemy;
          if (uniqueEnemies.includes(enemy)) continue;
          uniqueEnemies.push(enemy);
          const critical = hit.object.userData.critical;
          const killed = this.damageEnemy(enemy, weapon.damage * this.player.damageMultiplier * (critical ? 1.65 : 1), direction);
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
      if (pellet === 0 || weapon.id === 'shotgun') this.createTracer(origin, endpoint, weapon.id === 'rail' ? 0x72caff : weapon.id === 'shotgun' ? 0xffb464 : 0x71ffdb, weapon.id === 'rail' ? 0.22 : 0.07);
    }
    if (anyHit) {
      this.shotsHit += 1;
      this.audio.hit();
      this.callbacks.onHit(anyKill);
    }
  }

  getAimAssist(origin, direction) {
    let best = null;
    let bestAngle = 0.12;
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.spawnTime > 0) continue;
      const target = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.type === 'boss' ? 3 : 1.2, 0));
      const toTarget = target.sub(origin);
      const distance = toTarget.length();
      if (distance > 45) continue;
      toTarget.normalize();
      const angle = Math.acos(clamp(direction.dot(toTarget), -1, 1));
      if (angle < bestAngle) { bestAngle = angle; best = toTarget; }
    }
    return best;
  }

  damageEnemy(enemy, amount, direction) {
    if (enemy.dead) return false;
    enemy.health -= amount;
    enemy.hitTimer = 0.07;
    enemy.healthBar.visible = true;
    const ratio = clamp(enemy.health / enemy.maxHealth, 0, 1);
    enemy.barFill.scale.x = ratio;
    enemy.barFill.position.x = -(1 - ratio) * (enemy.type === 'boss' ? 1.5 : 0.6);
    if (enemy.health <= 0) {
      this.killEnemy(enemy, direction);
      return true;
    }
    return false;
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
    const dropChance = this.mode === 'training' ? 0.35 : 0.24;
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
    this.player.pulseCooldown = 12;
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
    const allowed = Math.min(count, this.isTouch ? 25 : 80);
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
      if (pickup.group.position.distanceTo(this.player.position) < 1.45) {
        if (pickup.type === 'health') this.player.health = Math.min(this.player.maxHealth, this.player.health + 30);
        if (pickup.type === 'shield') this.player.shield = Math.min(this.player.maxShield, this.player.shield + 25);
        if (pickup.type === 'ammo') {
          this.weaponState.forEach((state, index) => { state.reserve += Math.ceil(WEAPONS[index].magazine * 1.5 * this.player.ammoMultiplier); });
        }
        this.callbacks.onToast({ health: '纳米修复 +30 HP', shield: '护盾能量 +25 SH', ammo: '备用弹药已补充' }[pickup.type]);
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
    if (victory) this.audio.victory(); else this.audio.gameOver();
    this.callbacks.onState('ended', { victory, score: this.score, wave: this.wave, kills: this.kills, accuracy: this.shotsFired ? this.shotsHit / this.shotsFired * 100 : 0, newRecord });
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
      pulseCooldown: this.player.pulseCooldown, boss: boss ? { health: boss.health, maxHealth: boss.maxHealth } : null,
      intermission: this.intermission, elapsed: this.elapsed,
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
    this.enemies.forEach((enemy) => { if (!enemy.dead) plot(enemy.group.position, enemy.type === 'boss' ? '#ff9a55' : '#ff5362', enemy.type === 'boss' ? 4 : 2.2); });
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
    this.animatedWorld.forEach(({ mesh, speed, axis }) => { mesh.rotation[axis] += speed * dt; });
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
