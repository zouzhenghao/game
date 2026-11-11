import * as THREE from 'three';
import { GeoBatch, makeSignTexture, makeWindowTexture, makeFloorTexture, makeHorizonTexture } from './Models.js';

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, seg = 10) => new THREE.CylinderGeometry(rt, rb, h, seg);
const torus = (r, t, rs = 6, ts = 24) => new THREE.TorusGeometry(r, t, rs, ts);
const cone = (r, h, seg = 8) => new THREE.ConeGeometry(r, h, seg);
const sph = (r, w = 10, h = 8) => new THREE.SphereGeometry(r, w, h);
const random = (min, max) => min + Math.random() * (max - min);

/**
 * 构建完整战场。会写入 game 的：
 * world / worldColliders / obstacles / animatedWorld / spawnPoints / dust
 */
export function buildWorld(game) {
  const scene = game.scene;
  const world = new THREE.Group();
  scene.add(world);
  game.world = world;

  const lowPower = Boolean(game.lowPower);
  scene.background = new THREE.Color(0x03080b);
  scene.fog = new THREE.Fog(0x071318, 30, 128);

  // —— 光照：数量受控，主要靠自发光材质营造霓虹感 ——
  scene.add(new THREE.HemisphereLight(0x8ec9ce, 0x040a0c, 2.15));
  const moon = new THREE.DirectionalLight(0xa8e6e2, 2.25);
  moon.position.set(-25, 42, 18);
  moon.castShadow = !game.isTouch && !lowPower;
  moon.shadow.mapSize.set(1024, 1024);
  moon.shadow.camera.left = -55;
  moon.shadow.camera.right = 55;
  moon.shadow.camera.top = 55;
  moon.shadow.camera.bottom = -55;
  scene.add(moon);
  const coreLight = new THREE.PointLight(0x24ffd0, 48, 50, 2);
  coreLight.position.set(0, 6, 0);
  scene.add(coreLight);
  const magenta = new THREE.PointLight(0xc145ff, 26, 40, 2);
  magenta.position.set(-30, 6, -25);
  scene.add(magenta);
  const amber = new THREE.PointLight(0xffa860, 14, 32, 2);
  amber.position.set(32, 5, 26);
  scene.add(amber);

  // —— 共享材质 ——
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x8fa8a5, map: makeFloorTexture(), roughness: 0.72, metalness: 0.42,
  });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x152329, roughness: 0.46, metalness: 0.82 });
  const blackMetal = new THREE.MeshStandardMaterial({ color: 0x081014, roughness: 0.38, metalness: 0.9 });
  const accentMetal = new THREE.MeshStandardMaterial({ color: 0x36524f, roughness: 0.34, metalness: 0.88, emissive: 0x0b2420, emissiveIntensity: 0.3 });
  const cyanGlow = new THREE.MeshBasicMaterial({ color: 0x4ff5d0, toneMapped: false });
  const dimGlow = new THREE.MeshBasicMaterial({ color: 0x1c7d70, toneMapped: false });
  const purpleGlow = new THREE.MeshBasicMaterial({ color: 0xa451e6, toneMapped: false });
  const amberGlow = new THREE.MeshBasicMaterial({ color: 0xffa24a, toneMapped: false });
  const materials = { darkMetal, blackMetal, accentMetal, cyanGlow, dimGlow, purpleGlow, amberGlow };

  const deco = new GeoBatch();
  const add = (key, geo, pos, rot, scale) => deco.add(key, geo, pos, rot, scale);

  // —— 地面 ——
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  world.add(floor);
  // 墙体规则：地面是视觉面，不参与射线遮挡。
  // 若把它塞进 worldColliders，向下瞄准时射线会先撞地面，导致「子弹被地板挡住」。
  game.groundMesh = floor;
  const grid = new THREE.GridHelper(150, 75, 0x2fa08c, 0x16302d);
  grid.material.transparent = true;
  grid.material.opacity = 0.17;
  grid.position.y = 0.014;
  world.add(grid);

  // 中心环形平台：同心环 + 径向刻度 + 中心徽记
  for (let i = 0; i < 4; i++) {
    const ring = new THREE.Mesh(torus(6 + i * 1.7, i % 2 ? 0.035 : 0.06, 5, 64), i % 2 ? dimGlow : cyanGlow);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.03;
    world.add(ring);
  }
  for (let i = 0; i < 24; i++) {
    const a = i / 24 * Math.PI * 2;
    add('cyanGlow', box(0.06, 0.012, 0.5), [Math.cos(a) * 11.2, 0.035, Math.sin(a) * 11.2], [0, -a, 0]);
  }
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    add('amberGlow', box(0.22, 0.012, 0.9), [Math.cos(a) * 7.6, 0.035, Math.sin(a) * 7.6], [0, -a, 0]);
  }
  // 四条从出生方向汇入核心的引导光带
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + i * Math.PI / 2;
    for (let d = 13; d < 54; d += 4.2) {
      add('dimGlow', box(0.1, 0.012, 2.4), [Math.cos(a) * d, 0.028, Math.sin(a) * d], [0, -a, 0]);
    }
  }

  // —— 中央遏制反应堆 ——
  const reactor = new THREE.Group();
  const base = new THREE.Mesh(cyl(4.6, 5.2, 0.65, 16), darkMetal);
  base.position.y = 0.32;
  base.receiveShadow = true;
  reactor.add(base);
  const baseTop = new THREE.Mesh(cyl(4.15, 4.15, 0.12, 16), accentMetal);
  baseTop.position.y = 0.7;
  reactor.add(baseTop);
  const baseRing = new THREE.Mesh(torus(4.35, 0.09, 6, 48), cyanGlow);
  baseRing.rotation.x = -Math.PI / 2;
  baseRing.position.y = 0.77;
  reactor.add(baseRing);
  // 警示条纹
  for (let i = 0; i < 16; i++) {
    const a = i / 16 * Math.PI * 2;
    const stripe = new THREE.Mesh(box(0.42, 0.02, 0.9), i % 2 ? amberGlow : blackMetal);
    stripe.position.set(Math.cos(a) * 4.6, 0.67, Math.sin(a) * 4.6);
    stripe.rotation.y = -a;
    reactor.add(stripe);
  }
  // 能量柱（内外两层）
  const core = new THREE.Mesh(cyl(0.65, 0.9, 5.5, 14), new THREE.MeshStandardMaterial({
    color: 0x123a34, emissive: 0x19d5ad, emissiveIntensity: 1.35, metalness: 0.7, roughness: 0.18,
  }));
  core.position.y = 3.1;
  reactor.add(core);
  const coreShell = new THREE.Mesh(cyl(1.25, 1.45, 5.4, 14), new THREE.MeshBasicMaterial({
    color: 0x2affe0, transparent: true, opacity: 0.11, side: THREE.DoubleSide, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending,
  }));
  coreShell.position.y = 3.1;
  reactor.add(coreShell);
  const beam = new THREE.Mesh(cyl(0.22, 0.55, 28, 10), new THREE.MeshBasicMaterial({
    color: 0x35ffd9, transparent: true, opacity: 0.055, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending,
  }));
  beam.position.y = 17;
  reactor.add(beam);
  // 悬浮晶体（动态）
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.75, 0), new THREE.MeshBasicMaterial({ color: 0x9dfff0, toneMapped: false }));
  crystal.position.y = 6.6;
  reactor.add(crystal);
  game.animatedWorld.push({ mesh: crystal, update: (dt, t) => { crystal.rotation.y += dt * 0.6; crystal.rotation.x += dt * 0.25; crystal.position.y = 6.6 + Math.sin(t * 1.1) * 0.22; } });
  // 三层旋转环
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(torus(2.25 + i * 0.48, 0.06, 8, 64), i === 1 ? purpleGlow : cyanGlow);
    ring.position.y = 2.1 + i * 0.92;
    ring.rotation.x = Math.PI / 2 + (i - 1) * 0.26;
    reactor.add(ring);
    game.animatedWorld.push({ mesh: ring, speed: (i % 2 ? -1 : 1) * (0.18 + i * 0.08), axis: 'z' });
  }
  // 六根支柱 + 斜撑 + 顶部环
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const strut = new THREE.Mesh(box(0.36, 4.2, 0.36), darkMetal);
    strut.position.set(Math.cos(a) * 3.4, 2.2, Math.sin(a) * 3.4);
    strut.rotation.z = Math.cos(a) * -0.2;
    strut.rotation.x = Math.sin(a) * 0.2;
    reactor.add(strut);
    const brace = new THREE.Mesh(box(0.14, 2.4, 0.14), accentMetal);
    brace.position.set(Math.cos(a) * 2.55, 1.35, Math.sin(a) * 2.55);
    brace.rotation.z = Math.cos(a) * 0.55;
    brace.rotation.x = -Math.sin(a) * 0.55;
    reactor.add(brace);
    const lamp = new THREE.Mesh(box(0.2, 0.42, 0.06), i % 2 ? cyanGlow : purpleGlow);
    lamp.position.set(Math.cos(a) * 3.4, 3.4, Math.sin(a) * 3.4 - 0.2);
    lamp.rotation.y = -a;
    reactor.add(lamp);
  }
  const crown = new THREE.Mesh(torus(3.5, 0.11, 6, 48), accentMetal);
  crown.rotation.x = -Math.PI / 2;
  crown.position.y = 4.35;
  reactor.add(crown);
  world.add(reactor);
  game.obstacles.push({ minX: -4.4, maxX: 4.4, minZ: -4.4, maxZ: 4.4 });
  game.worldColliders.push(base, core);

  // —— 掩体：科技箱体，保留原有坐标与碰撞 ——
  const covers = [
    [-12, -10, 4, 1.3, 1.7], [12, 10, 4, 1.3, 1.7], [-14, 14, 1.4, 5, 2.1], [14, -14, 1.4, 5, 2.1],
    [-28, 1, 5, 1.4, 1.4], [28, -1, 5, 1.4, 1.4], [1, 29, 1.4, 5, 1.8], [-1, -29, 1.4, 5, 1.8],
    [-30, -24, 3, 3, 2.7], [30, 24, 3, 3, 2.7], [26, -29, 4, 2, 1.5], [-26, 29, 4, 2, 1.5],
    [-8, 35, 2, 2, 2.4], [8, -35, 2, 2, 2.4], [37, 10, 2, 4, 2.2], [-37, -10, 2, 4, 2.2],
  ];
  covers.forEach(([x, z, w, d, h], index) => {
    const group = new THREE.Group();
    const mesh = new THREE.Mesh(box(w, h, d), index % 3 === 0 ? blackMetal : darkMetal);
    mesh.position.y = h / 2;
    mesh.castShadow = !lowPower;
    mesh.receiveShadow = true;
    group.add(mesh);
    // 顶盖与斜面护板
    const lid = new THREE.Mesh(box(w + 0.14, 0.12, d + 0.14), accentMetal);
    lid.position.y = h + 0.04;
    group.add(lid);
    // 上下两道发光边框
    for (const y of [0.16, h * 0.72, h - 0.1]) {
      const strip = new THREE.Mesh(box(w + 0.03, 0.045, d + 0.03), index % 4 === 0 ? purpleGlow : dimGlow);
      strip.position.y = y;
      group.add(strip);
    }
    // 正面装甲板 + 散热栅格 + 编号灯
    const panel = new THREE.Mesh(box(w * 0.62, h * 0.52, 0.06), accentMetal);
    panel.position.set(0, h * 0.5, -d / 2 - 0.035);
    group.add(panel);
    for (let i = 0; i < 4; i++) {
      const vent = new THREE.Mesh(box(w * 0.5, 0.035, 0.02), blackMetal);
      vent.position.set(0, h * 0.34 + i * h * 0.1, -d / 2 - 0.075);
      group.add(vent);
    }
    for (const side of [-1, 1]) {
      const bolt = new THREE.Mesh(cyl(0.05, 0.05, 0.03, 6), index % 4 === 0 ? amberGlow : cyanGlow);
      bolt.rotation.x = Math.PI / 2;
      bolt.position.set(side * w * 0.4, h * 0.5, -d / 2 - 0.07);
      group.add(bolt);
      // 角护条
      const corner = new THREE.Mesh(box(0.1, h, 0.1), accentMetal);
      corner.position.set(side * (w / 2 - 0.05), h / 2, -d / 2 + 0.05);
      group.add(corner);
    }
    const label = new THREE.Mesh(box(w * 0.2, 0.05, 0.02), index % 3 === 0 ? amberGlow : cyanGlow);
    label.position.set(0, h * 0.86, -d / 2 - 0.07);
    group.add(label);
    group.position.set(x, 0, z);
    world.add(group);
    game.obstacles.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
    // 顶盖比箱体略宽，一并纳入遮挡：否则子弹会从「看得见的盖板」边缘穿过去。
    game.worldColliders.push(mesh, lid);
  });

  // —— 可破坏油桶：被击中会爆炸并连锁引爆邻近油桶 ——
  const barrelPositions = [[-20, 8], [20, -8], [-8, -20], [8, 20], [-25, 25], [25, -25], [16, 16], [-16, -16]];
  const barrelBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x6a4a1c, metalness: 0.7, roughness: 0.5, emissive: 0xff7a2d, emissiveIntensity: 0.5 });
  const barrelStripe = new THREE.MeshStandardMaterial({ color: 0x14100a, metalness: 0.6, roughness: 0.6 });
  const barrelGlow = new THREE.MeshBasicMaterial({ color: 0xffb24a, toneMapped: false });
  barrelPositions.forEach(([x, z]) => {
    const group = new THREE.Group();
    const bodyMaterial = barrelBaseMaterial.clone();
    const body = new THREE.Mesh(cyl(0.62, 0.62, 1.5, 14), bodyMaterial);
    body.position.y = 0.75;
    body.castShadow = !lowPower;
    const top = new THREE.Mesh(cyl(0.66, 0.62, 0.12, 14), barrelStripe);
    top.position.y = 1.5;
    const stripe = new THREE.Mesh(cyl(0.64, 0.64, 0.3, 14), barrelStripe);
    stripe.position.y = 0.78;
    const lamp = new THREE.Mesh(sph(0.1, 8, 6), barrelGlow);
    lamp.position.y = 1.62;
    group.add(body, top, stripe, lamp);
    group.position.set(x, 0, z);
    world.add(group);
    const box = { minX: x - 0.62, maxX: x + 0.62, minZ: z - 0.62, maxZ: z + 0.62 };
    const barrel = { group, mesh: body, bodyMaterial, health: 60, maxHealth: 60, position: group.position, dead: false, flash: 0, box };
    body.userData.barrel = barrel;
    game.barrels.push(barrel);
    game.barrelMeshes.push(body);
    game.obstacles.push(box);
    game.barrelBoxes.add(box);
  });

  // —— 竞技场围墙 ——
  const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x0b1519, metalness: 0.78, roughness: 0.48 });
  [[0, -70, 142, 2], [0, 70, 142, 2], [-70, 0, 2, 142], [70, 0, 2, 142]].forEach(([x, z, w, d]) => {
    const wall = new THREE.Mesh(box(w, 5, d), wallMaterial);
    wall.position.set(x, 2.5, z);
    world.add(wall);
    game.worldColliders.push(wall);
    const strip = new THREE.Mesh(box(w + 0.05, 0.09, d + 0.05), dimGlow);
    strip.position.set(x, 4.25, z);
    world.add(strip);
    // 墙面竖向肋条
    const count = Math.floor(w > d ? w / 6 : d / 6);
    for (let i = 0; i < count; i++) {
      const t = -70 + i * (140 / count);
      add('accentMetal', box(w > d ? 0.28 : 0.28, 4.2, w > d ? 0.3 : 0.28), [w > d ? t : x, 2.2, w > d ? z : t]);
    }
  });

  // —— 灯柱：柱身 + 灯罩 + 发光面 + 地面光圈 ——
  const lampPositions = [];
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2;
    lampPositions.push([Math.cos(a) * 45, Math.sin(a) * 45, a]);
  }
  lampPositions.forEach(([x, z, a], i) => {
    add('darkMetal', cyl(0.16, 0.24, 6.4, 8), [x, 3.2, z]);
    add('accentMetal', cyl(0.36, 0.36, 0.22, 8), [x, 0.16, z]);
    add('accentMetal', box(0.5, 0.18, 0.5), [x, 6.45, z]);
    add(i % 3 === 0 ? 'purpleGlow' : 'cyanGlow', box(0.36, 0.5, 0.36), [x, 6.05, z]);
    add('dimGlow', torus(1.1, 0.035, 5, 22), [x, 0.04, z], [-Math.PI / 2, 0, 0]);
    add('amberGlow', box(0.1, 0.1, 0.06), [x, 4.6, z], [0, -a, 0]);
    // 斜撑
    for (const side of [-1, 1]) {
      add('accentMetal', box(0.09, 1.6, 0.09), [x + side * 0.38, 1.0, z], [0, 0, side * 0.42]);
    }
  });

  // —— 悬浮平台 + 下方光锥 ——
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2 + 0.35;
    const x = Math.cos(a) * 33, z = Math.sin(a) * 33, y = 7.5 + (i % 2) * 2.4;
    add('darkMetal', cyl(3.1, 2.7, 0.45, 8), [x, y, z]);
    add('accentMetal', cyl(3.3, 3.3, 0.1, 8), [x, y + 0.26, z]);
    add(i % 2 ? 'purpleGlow' : 'cyanGlow', torus(3.0, 0.055, 5, 28), [x, y - 0.2, z], [-Math.PI / 2, 0, 0]);
    for (let j = 0; j < 8; j++) {
      const b = j / 8 * Math.PI * 2;
      add('dimGlow', box(0.08, 0.02, 0.6), [x + Math.cos(b) * 2.5, y + 0.32, z + Math.sin(b) * 2.5], [0, -b, 0]);
    }
    const glowCone = new THREE.Mesh(cone(2.8, 7, 10), new THREE.MeshBasicMaterial({
      color: i % 2 ? 0xa451e6 : 0x35e8c4, transparent: true, opacity: 0.045, depthWrite: false,
      side: THREE.DoubleSide, toneMapped: false, blending: THREE.AdditiveBlending,
    }));
    glowCone.position.set(x, y - 3.8, z);
    glowCone.rotation.x = Math.PI;
    world.add(glowCone);
  }

  // —— 管线：沿场地边缘的曲线管 + 支架 ——
  for (let i = 0; i < 4; i++) {
    const side = i < 2 ? -1 : 1;
    const zBase = i % 2 ? -58 : 58;
    const points = [];
    for (let j = 0; j <= 12; j++) {
      const t = j / 12;
      points.push(new THREE.Vector3(-52 + t * 104, 4.2 + Math.sin(t * Math.PI * 2 + i) * 0.8, zBase + side * Math.sin(t * Math.PI) * 3));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const pipe = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, 0.16, 7, false), i % 2 ? accentMetal : darkMetal);
    world.add(pipe);
    for (let j = 0; j <= 6; j++) {
      const p = curve.getPoint(j / 6);
      add('accentMetal', box(0.12, Math.max(0.4, p.y - 0.2), 0.12), [p.x, p.y / 2, p.z]);
    }
  }

  // —— 远景城市：合并主体 + 窗格贴图 + 顶部霓虹 ——
  const cityBatch = new GeoBatch();
  const signBatch = new GeoBatch();
  let seed = 7147;
  const seeded = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 78; i++) {
    const angle = seeded() * Math.PI * 2;
    const radius = 80 + seeded() * 60;
    const width = 5 + seeded() * 10;
    const depth = 5 + seeded() * 10;
    const height = 14 + seeded() * 66;
    const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
    cityBatch.add('body', box(width, height, depth), [x, height / 2 - 1, z]);
    cityBatch.add('windows', box(width + 0.06, height * 0.86, depth + 0.06), [x, height / 2 - 1, z]);
    cityBatch.add('cap', box(width + 0.4, 0.22, depth + 0.4), [x, height - 0.8, z]);
    if (i % 2 === 0) signBatch.add('glow', box(width + 0.1, 0.16 + seeded() * 0.16, depth + 0.1), [x, height * (0.35 + seeded() * 0.45), z]);
    if (i % 5 === 0) cityBatch.add('antenna', cyl(0.07, 0.07, 9, 5), [x, height + 3.5, z]);
    if (i % 6 === 0) cityBatch.add('spire', cone(0.5, 6, 5), [x, height + 2, z]);
  }
  const cityMaterials = {
    body: new THREE.MeshStandardMaterial({ color: 0x14262c, roughness: 0.78, metalness: 0.48 }),
    windows: new THREE.MeshBasicMaterial({ color: 0x9fd8d0, map: makeWindowTexture(), toneMapped: false }),
    cap: darkMetal,
    antenna: dimGlow,
    spire: purpleGlow,
    glow: dimGlow,
  };
  world.add(cityBatch.build(cityMaterials));
  world.add(signBatch.build({ glow: purpleGlow }));

  // —— 霓虹广告牌 ——
  const signs = [
    ['NEXUS', 'SECTOR 07', '#54f7d2', -58, 10, -20, 0.6],
    ['NX-07', 'TACTICAL LINK', '#7de8ff', 58, 12, 18, -0.6],
    ['霓虹余烬', 'NEON ASHES', '#ff9a55', -20, 14, -60, 0],
    ['WARDEN', 'APEX SIGNAL', '#ff5c62', 22, 16, 60, Math.PI],
    ['零界突击', 'STRIKE PROTOCOL', '#b06bff', -62, 9, 26, 1.15],
    ['SYS.ONLINE', 'DEFENSE GRID', '#54f7d2', 62, 10, -30, -1.15],
  ];
  signs.forEach(([text, sub, color, x, y, z, ry]) => {
    const texture = makeSignTexture(text, sub, color);
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 4.8), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, toneMapped: false }));
    panel.position.set(x, y, z);
    panel.rotation.y = ry;
    world.add(panel);
    const frame = new THREE.Mesh(box(10, 5.2, 0.16), darkMetal);
    frame.position.set(x, y, z);
    frame.rotation.y = ry;
    frame.translateZ(-0.12);
    world.add(frame);
    // 支撑杆
    const post = new THREE.Mesh(cyl(0.12, 0.16, y - 2, 8), darkMetal);
    post.position.set(x, (y - 2) / 2, z);
    world.add(post);
  });

  // —— 地平线雾墙 ——
  const horizonMaterial = new THREE.MeshBasicMaterial({
    map: makeHorizonTexture(), transparent: true, opacity: 0.75, side: THREE.DoubleSide,
    depthWrite: false, toneMapped: false,
  });
  const horizonPlacements = [
    [0, -145, 0], [-145, 0, Math.PI / 2], [0, 145, Math.PI], [145, 0, -Math.PI / 2],
  ];
  horizonPlacements.forEach(([x, z, ry]) => {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(300, 42), horizonMaterial);
    wall.position.set(x, 19, z);
    wall.rotation.y = ry;
    world.add(wall);
  });

  // —— 静态装饰统一合并 ——
  world.add(deco.build(materials));

  // —— 生成门 ——
  game.spawnPoints = [
    new THREE.Vector3(-48, 0, -48), new THREE.Vector3(48, 0, -48), new THREE.Vector3(-48, 0, 48), new THREE.Vector3(48, 0, 48),
    new THREE.Vector3(0, 0, -54), new THREE.Vector3(0, 0, 54), new THREE.Vector3(-54, 0, 0), new THREE.Vector3(54, 0, 0),
  ];
  game.spawnPoints.forEach((point, index) => {
    const gate = new THREE.Group();
    const ring = new THREE.Mesh(torus(2.15, 0.1, 8, 40), index % 2 ? purpleGlow : cyanGlow);
    ring.position.y = 2.3;
    gate.add(ring);
    const inner = new THREE.Mesh(torus(1.85, 0.035, 6, 36), dimGlow);
    inner.position.y = 2.3;
    gate.add(inner);
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(box(0.26, 4.8, 0.4), darkMetal);
      post.position.set(side * 2.15, 2.2, 0);
      gate.add(post);
      const lamp = new THREE.Mesh(box(0.1, 1.2, 0.1), index % 2 ? purpleGlow : cyanGlow);
      lamp.position.set(side * 2.15, 2.5, -0.24);
      gate.add(lamp);
      const foot = new THREE.Mesh(box(0.6, 0.2, 0.6), accentMetal);
      foot.position.set(side * 2.15, 0.1, 0);
      gate.add(foot);
    }
    const lintel = new THREE.Mesh(box(4.6, 0.3, 0.45), accentMetal);
    lintel.position.y = 4.6;
    gate.add(lintel);
    gate.position.copy(point);
    gate.lookAt(0, 2, 0);
    world.add(gate);
    game.animatedWorld.push({ mesh: inner, speed: -0.22, axis: 'z' });
    game.animatedWorld.push({ mesh: ring, speed: index % 2 ? -0.3 : 0.3, axis: 'z' });
  });

  // —— 空中运输机（缓慢巡弋，纯装饰） ——
  for (let i = 0; i < 2; i++) {
    const craft = new THREE.Group();
    const hull = new THREE.Mesh(box(5.5, 0.8, 1.6), darkMetal);
    const nose = new THREE.Mesh(cone(0.85, 1.8, 6), accentMetal);
    nose.rotation.z = -Math.PI / 2;
    nose.position.x = 3.4;
    const wing = new THREE.Mesh(box(1.5, 0.16, 5.4), accentMetal);
    for (const side of [-1, 1]) {
      const engine = new THREE.Mesh(cyl(0.32, 0.32, 1.1, 8), darkMetal);
      engine.rotation.x = Math.PI / 2;
      engine.position.set(-1.6, -0.1, side * 2.2);
      const light = new THREE.Mesh(box(0.1, 0.1, 0.1), purpleGlow);
      light.position.set(-1.6, -0.1, side * 2.8);
      craft.add(engine, light);
    }
    const strip = new THREE.Mesh(box(4.6, 0.06, 0.1), cyanGlow);
    strip.position.set(0, 0.44, 0);
    craft.add(hull, nose, wing, strip);
    craft.scale.setScalar(1.2);
    world.add(craft);
    const radius = 62 + i * 12;
    const offset = i * Math.PI;
    game.animatedWorld.push({ mesh: craft, update: (dt, t) => {
      const a = t * 0.06 + offset;
      craft.position.set(Math.cos(a) * radius, 24 + Math.sin(t * 0.5 + offset) * 1.5, Math.sin(a) * radius);
      craft.rotation.y = -a + Math.PI / 2;
    } });
  }

  // —— 尘埃 / 雨丝 ——
  const dustCount = lowPower ? 260 : game.isTouch ? 380 : 900;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3] = random(-75, 75);
    dustPositions[i * 3 + 1] = random(0.2, 28);
    dustPositions[i * 3 + 2] = random(-75, 75);
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({
    color: 0x74c9ba, size: lowPower ? 0.055 : 0.045, transparent: true, opacity: 0.5, depthWrite: false,
  }));
  world.add(dust);
  game.dust = dust;
}
