import * as THREE from 'three';

/* ------------------------------------------------------------------ *
 * NX-07 程序化模型库
 * 所有模型均由基础几何体拼装，并按材质合并成少量 draw call，
 * 这样既能做出密集细节，也能在 4K 白板 / 手机集显上保持流畅。
 * ------------------------------------------------------------------ */

const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, seg = 10) => new THREE.CylinderGeometry(rt, rb, h, seg);
const sph = (r, w = 10, h = 8) => new THREE.SphereGeometry(r, w, h);
const cone = (r, h, seg = 8) => new THREE.ConeGeometry(r, h, seg);
const torus = (r, t, rs = 6, ts = 20) => new THREE.TorusGeometry(r, t, rs, ts);
const octa = (r, d = 0) => new THREE.OctahedronGeometry(r, d);
const ico = (r, d = 0) => new THREE.IcosahedronGeometry(r, d);
const mat4 = (pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) => new THREE.Matrix4().compose(
  new THREE.Vector3(...pos),
  new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),
  new THREE.Vector3(...scale),
);

function prepare(geometry, matrix) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  if (matrix) g.applyMatrix4(matrix);
  for (const key of Object.keys(g.attributes)) {
    if (key !== 'position' && key !== 'normal') g.deleteAttribute(key);
  }
  if (!g.attributes.normal) g.computeVertexNormals();
  return g;
}

function mergeGeometries(list) {
  let total = 0;
  for (const g of list) total += g.attributes.position.count;
  const positions = new Float32Array(total * 3);
  const normals = new Float32Array(total * 3);
  let offset = 0;
  for (const g of list) {
    positions.set(g.attributes.position.array, offset * 3);
    normals.set(g.attributes.normal.array, offset * 3);
    offset += g.attributes.position.count;
    g.dispose();
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  merged.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  merged.computeBoundingSphere();
  return merged;
}

/** 按材质键收集几何体，最后合并成每材质一个 Mesh。 */
export class GeoBatch {
  constructor() { this.map = new Map(); }
  add(key, geometry, pos, rot, scale) {
    const g = prepare(geometry, mat4(pos, rot, scale));
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push(g);
    geometry.dispose();
    return this;
  }
  build(materials, options = {}) {
    const group = new THREE.Group();
    for (const [key, geos] of this.map) {
      const mesh = new THREE.Mesh(mergeGeometries(geos), materials[key]);
      mesh.castShadow = Boolean(options.castShadow);
      mesh.receiveShadow = Boolean(options.receiveShadow);
      group.add(mesh);
    }
    return group;
  }
  /** 直接返回 [{ key, geometry }]，供调用方自行挂 userData。 */
  meshes(materials, options = {}) {
    const result = [];
    for (const [key, geos] of this.map) {
      const mesh = new THREE.Mesh(mergeGeometries(geos), materials[key]);
      mesh.castShadow = Boolean(options.castShadow);
      result.push({ key, mesh });
    }
    return result;
  }
}

/* ------------------------------------------------------------------ *
 * 武器视图模型
 * ------------------------------------------------------------------ */

const GUN_PALETTE = [
  { metal: 0x2f413e, dark: 0x0d1618, accent: 0x6e9189, glow: 0x54f7d2 },
  { metal: 0x3c3128, dark: 0x14100d, accent: 0x9a7854, glow: 0xffa34d },
  { metal: 0x2b3f4e, dark: 0x091116, accent: 0x7ba4c2, glow: 0x69bfff },
  { metal: 0x243d43, dark: 0x081215, accent: 0x76b9c0, glow: 0x7de8ff },
  { metal: 0x3a2c20, dark: 0x140d08, accent: 0xb98a52, glow: 0xff7a3d },
  { metal: 0x243844, dark: 0x081318, accent: 0x7fbfd6, glow: 0x8fe8ff },
];

function gunMaterials(index) {
  const p = GUN_PALETTE[index];
  const std = (color) => new THREE.MeshStandardMaterial({
    color, emissive: color, emissiveIntensity: 0.03, metalness: 0.72, roughness: 0.42,
  });
  return {
    metal: std(p.metal),
    dark: std(p.dark),
    accent: std(p.accent),
    glow: new THREE.MeshBasicMaterial({ color: p.glow, toneMapped: false }),
    glass: new THREE.MeshBasicMaterial({ color: p.glow, transparent: true, opacity: 0.28, toneMapped: false, side: THREE.DoubleSide }),
  };
}

function commonFurniture(b, index) {
  // 握把、扳机护圈、枪托、螺钉、铭牌 —— 四把枪共享的结构语言
  const grip = b.add.bind(b);
  grip('dark', box(0.115, 0.28, 0.14), [0, -0.205, 0.075], [-0.2, 0, 0]);
  grip('metal', box(0.125, 0.055, 0.16), [0, -0.325, 0.09]);
  grip('accent', box(0.018, 0.075, 0.02), [0, -0.12, -0.045]);
  // 扳机护圈（三段框）
  grip('dark', box(0.012, 0.075, 0.012), [-0.045, -0.115, -0.045]);
  grip('dark', box(0.012, 0.075, 0.012), [0.045, -0.115, -0.045]);
  grip('dark', box(0.1, 0.012, 0.012), [0, -0.15, -0.045]);
  grip('glow', box(0.008, 0.038, 0.008), [0, -0.117, -0.049]);
  // 枪托框架
  grip('metal', box(0.075, 0.075, 0.34), [0, -0.045, 0.28]);
  grip('metal', box(0.075, 0.075, 0.34), [0, -0.205, 0.28]);
  grip('metal', box(0.075, 0.18, 0.06), [0, -0.125, 0.44]);
  grip('dark', box(0.13, 0.19, 0.055), [0, -0.12, 0.47]);
  grip('accent', box(0.11, 0.02, 0.2), [0, -0.02, 0.3]);
  // 机匣侧板 + 螺钉
  for (const side of [-1, 1]) {
    grip('accent', box(0.012, 0.115, 0.24), [side * 0.098, 0.006, 0.03]);
    for (let i = 0; i < 3; i++) grip('dark', cyl(0.012, 0.012, 0.02, 6), [side * 0.106, 0.03, -0.04 + i * 0.075], [0, 0, Math.PI / 2]);
  }
  // 铭牌
  grip('glow', box(0.052, 0.012, 0.012), [0, 0.078, -0.02]);
  if (index !== 1) {
    // 顶部皮卡汀尼导轨齿
    for (let i = 0; i < 9; i++) grip('dark', box(0.075, 0.017, 0.026), [0, 0.115, -0.44 + i * 0.062]);
    grip('metal', box(0.055, 0.02, 0.58), [0, 0.1, -0.2]);
  }
}

/**
 * 生成一把第一人称武器。
 * 返回 { group, magazine, bolt, flash, coils, muzzleZ }
 */
export function createWeaponModel(index) {
  const materials = gunMaterials(index);
  const b = new GeoBatch();
  const add = (key, geo, pos, rot, scale) => b.add(key, geo, pos, rot, scale);

  if (index === 0) {
    // VX-9 脉冲步枪：斜切机匣 + 全息镜 + 散热护木 + 能量管线
    add('metal', box(0.19, 0.185, 0.62), [0, 0, -0.1]);
    add('metal', box(0.155, 0.055, 0.54), [0, 0.113, -0.1]);
    add('dark', box(0.205, 0.045, 0.2), [0, 0.145, -0.02]);
    add('dark', box(0.15, 0.09, 0.15), [0.11, 0.01, -0.16]);       // 抛壳口
    add('accent', box(0.16, 0.055, 0.34), [0, 0.02, -0.46]);        // 护木
    for (let i = 0; i < 6; i++) {
      add('dark', box(0.165, 0.013, 0.022), [0, 0.052, -0.6 + i * 0.052]);
      add('glow', box(0.012, 0.055, 0.3), [0.098, 0.012, -0.46]);
    }
    add('glow', box(0.014, 0.02, 0.34), [-0.098, 0.045, -0.44]);
    add('metal', cyl(0.036, 0.036, 0.44, 10), [0, 0.012, -0.84], [Math.PI / 2, 0, 0]);
    add('dark', cyl(0.055, 0.045, 0.16, 10), [0, 0.012, -1.08], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 4; i++) add('dark', box(0.014, 0.07, 0.09), [Math.cos(i / 4 * Math.PI * 2) * 0.05, 0.012 + Math.sin(i / 4 * Math.PI * 2) * 0.05, -1.1]);
    add('accent', box(0.03, 0.075, 0.03), [0, 0.15, -0.72]);        // 前准星
    add('glow', box(0.008, 0.025, 0.008), [0, 0.19, -0.72]);
    // 全息瞄具
    add('dark', box(0.095, 0.03, 0.15), [0, 0.15, -0.06]);
    add('metal', box(0.085, 0.085, 0.022), [0, 0.2, -0.12]);
    add('metal', box(0.085, 0.085, 0.022), [0, 0.2, 0.01]);
    add('metal', box(0.012, 0.09, 0.14), [-0.044, 0.2, -0.055]);
    add('metal', box(0.012, 0.09, 0.14), [0.044, 0.2, -0.055]);
    add('glass', box(0.07, 0.07, 0.006), [0, 0.2, -0.055]);
    add('glow', box(0.035, 0.004, 0.004), [0, 0.2, -0.058]);
    add('glow', box(0.004, 0.035, 0.004), [0, 0.2, -0.058]);
    // 战术灯与侧导轨
    add('dark', cyl(0.032, 0.032, 0.12, 8), [0.12, -0.045, -0.42], [Math.PI / 2, 0, 0]);
    add('glass', cyl(0.028, 0.028, 0.006, 8), [0.12, -0.045, -0.485], [Math.PI / 2, 0, 0]);
  } else if (index === 1) {
    // SG-12 裂解：双管 + 泵动护木 + 弹仓管 + 环形准星
    add('metal', box(0.23, 0.205, 0.66), [0, 0, -0.08]);
    add('accent', box(0.24, 0.045, 0.4), [0, 0.12, -0.16]);
    add('dark', box(0.19, 0.075, 0.19), [0.13, 0.02, -0.1]);
    for (const side of [-1, 1]) {
      add('dark', cyl(0.048, 0.048, 0.72, 10), [side * 0.058, 0.025, -0.73], [Math.PI / 2, 0, 0]);
      add('accent', cyl(0.058, 0.058, 0.075, 10), [side * 0.058, 0.025, -1.08], [Math.PI / 2, 0, 0]);
      add('dark', cyl(0.04, 0.04, 0.012, 10), [side * 0.058, 0.025, -1.121], [Math.PI / 2, 0, 0]);
      add('glow', box(0.012, 0.02, 0.42), [side * 0.12, 0.055, -0.36]);
    }
    add('metal', cyl(0.032, 0.032, 0.62, 8), [0, -0.085, -0.65], [Math.PI / 2, 0, 0]); // 弹仓管
    for (let i = 0; i < 5; i++) add('glow', torus(0.036, 0.008, 4, 10), [0, -0.085, -0.9 + i * 0.11], [0, Math.PI / 2, 0]);
    add('dark', box(0.26, 0.09, 0.28), [0, -0.02, -0.5]);            // 泵动护木底托
    for (let i = 0; i < 7; i++) add('dark', box(0.265, 0.012, 0.018), [0, 0.035, -0.62 + i * 0.04]);
    add('metal', torus(0.075, 0.014, 6, 18), [0, 0.16, -0.86]);       // 环形准星
    add('glow', box(0.01, 0.03, 0.01), [0, 0.16, -0.86]);
    add('dark', box(0.1, 0.045, 0.16), [0, 0.13, 0.02]);
    add('accent', box(0.036, 0.012, 0.2), [0, 0.14, -0.3]);
  } else if (index === 2) {
    // R-01 磁轨：双磁轨 + 线圈 + 大型瞄准镜 + 电容组
    add('metal', box(0.18, 0.2, 0.9), [0, 0, -0.2]);
    add('accent', box(0.19, 0.045, 0.8), [0, 0.12, -0.22]);
    add('dark', box(0.2, 0.11, 0.3), [0, -0.09, 0.02]);
    for (const side of [-1, 1]) {
      add('glow', box(0.032, 0.075, 0.82), [side * 0.105, 0.02, -0.44]);
      add('metal', box(0.055, 0.09, 0.86), [side * 0.135, 0.02, -0.44]);
      for (let i = 0; i < 5; i++) add('accent', torus(0.082, 0.014, 5, 12), [side * 0.105, 0.02, -0.78 + i * 0.17], [0, Math.PI / 2, 0]);
      add('dark', box(0.075, 0.085, 0.2), [side * 0.13, -0.09, 0.05]);
      add('glow', box(0.045, 0.012, 0.16), [side * 0.13, -0.04, 0.05]);
    }
    add('dark', cyl(0.035, 0.035, 0.72, 10), [0, 0.015, -0.98], [Math.PI / 2, 0, 0]);
    add('accent', cyl(0.062, 0.048, 0.19, 10), [0, 0.015, -1.32], [Math.PI / 2, 0, 0]);
    add('glow', cyl(0.03, 0.03, 0.012, 10), [0, 0.015, -1.42], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 6; i++) add('dark', box(0.2, 0.014, 0.025), [0, 0.155, -0.62 + i * 0.09]); // 冷却鳍
    // 长筒瞄准镜
    add('dark', cyl(0.06, 0.06, 0.46, 12), [0, 0.195, -0.16], [Math.PI / 2, 0, 0]);
    add('accent', cyl(0.072, 0.072, 0.055, 12), [0, 0.195, -0.4], [Math.PI / 2, 0, 0]);
    add('accent', cyl(0.072, 0.072, 0.055, 12), [0, 0.195, 0.08], [Math.PI / 2, 0, 0]);
    add('glass', cyl(0.062, 0.062, 0.008, 12), [0, 0.195, -0.43], [Math.PI / 2, 0, 0]);
    add('glow', torus(0.055, 0.007, 4, 14), [0, 0.195, -0.435]);
    add('metal', box(0.045, 0.06, 0.055), [0, 0.15, -0.28]);
    add('metal', box(0.045, 0.06, 0.055), [0, 0.15, -0.02]);
    add('glow', box(0.02, 0.012, 0.02), [0, 0.255, 0.0]);
  } else if (index === 3) {
    // ARC-7 弧光：特斯拉线圈 + 电容翼 + 悬浮晶体
    add('metal', box(0.205, 0.2, 0.62), [0, 0, -0.12]);
    add('accent', box(0.215, 0.045, 0.5), [0, 0.12, -0.14]);
    add('dark', box(0.16, 0.11, 0.24), [0, -0.075, 0.02]);
    for (const side of [-1, 1]) {
      add('metal', box(0.075, 0.13, 0.5), [side * 0.155, 0.03, -0.34]);  // 电容翼
      add('glow', box(0.012, 0.075, 0.42), [side * 0.196, 0.03, -0.34]);
      for (let i = 0; i < 4; i++) add('accent', box(0.09, 0.02, 0.03), [side * 0.155, 0.1, -0.52 + i * 0.11]);
    }
    add('dark', cyl(0.058, 0.058, 0.5, 10), [0, 0.015, -0.72], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 5; i++) {
      add('glow', torus(0.085 - i * 0.005, 0.016, 6, 16), [0, 0.015, -0.56 - i * 0.1], [0, Math.PI / 2, 0]);
      add('accent', torus(0.098, 0.012, 5, 12), [0, 0.015, -0.56 - i * 0.1], [0, Math.PI / 2, 0]);
    }
    add('dark', cyl(0.075, 0.06, 0.14, 10), [0, 0.015, -1.13], [Math.PI / 2, 0, 0]);
    add('glass', sph(0.062, 12, 10), [0, 0.015, -1.2]);
    add('glow', torus(0.105, 0.012, 6, 20), [0, 0.015, -1.21]);
    // 环形瞄具
    add('metal', torus(0.085, 0.018, 6, 18), [0, 0.175, -0.18]);
    add('glow', torus(0.065, 0.006, 4, 16), [0, 0.175, -0.18]);
    add('metal', box(0.05, 0.075, 0.05), [0, 0.115, -0.18]);
    add('glow', box(0.014, 0.014, 0.014), [0, 0.175, -0.18]);
  } else if (index === 4) {
    // WN-5 蜂巢：六管制导发射器 + 瞄准镜 + 下挂握把
    add('metal', box(0.24, 0.26, 0.52), [0, 0, -0.1]);
    add('dark', box(0.28, 0.32, 0.34), [0, -0.04, 0.06]);
    add('accent', box(0.22, 0.05, 0.5), [0, 0.13, -0.12]);
    // 六根发射管（2×3 蜂巢）
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const x = (col - 1) * 0.072;
        const y = row ? -0.062 : 0.062;
        add('dark', cyl(0.034, 0.034, 0.66, 8), [x, y, -0.64], [Math.PI / 2, 0, 0]);
        add('accent', torus(0.036, 0.009, 4, 12), [x, y, -0.34], [Math.PI / 2, 0, 0]);
        add('glow', cyl(0.024, 0.024, 0.02, 8), [x, y, -0.97], [Math.PI / 2, 0, 0]);
      }
    }
    // 顶部火控镜 + 锁定环
    add('dark', box(0.13, 0.13, 0.24), [0, 0.19, -0.04]);
    add('glass', sph(0.055, 10, 8), [0, 0.19, -0.2]);
    add('glow', torus(0.058, 0.008, 4, 14), [0, 0.19, -0.21]);
    // 下挂握把 + 散热鳍
    add('dark', box(0.1, 0.22, 0.12), [0, -0.24, 0.08]);
    add('accent', box(0.15, 0.02, 0.2), [0, -0.12, -0.02]);
    for (let i = 0; i < 3; i++) add('dark', box(0.012, 0.18, 0.04), [-0.12 + i * 0.12, -0.02, -0.28]);
  } else {
    // LN-3 寒霜：低温步枪 —— 细长枪管 + 冰晶枪口 + 侧置冷凝罐 + 散热鳍
    add('metal', box(0.18, 0.2, 0.5), [0, 0, -0.12]);
    add('accent', box(0.2, 0.045, 0.42), [0, 0.11, -0.1]);
    add('dark', box(0.155, 0.1, 0.22), [0, -0.07, 0.02]);
    // 细长枪管
    add('dark', cyl(0.045, 0.05, 0.78, 10), [0, 0.015, -0.74], [Math.PI / 2, 0, 0]);
    // 枪口冰晶（多层八面体，冷蓝发光）
    add('glass', new THREE.OctahedronGeometry(0.085, 0), [0, 0.015, -1.16]);
    add('glow', new THREE.OctahedronGeometry(0.05, 0), [0, 0.015, -1.16]);
    add('glow', torus(0.075, 0.01, 4, 16), [0, 0.015, -1.12], [Math.PI / 2, 0, 0]);
    // 侧置冷凝罐
    add('dark', cyl(0.07, 0.07, 0.34, 12), [0.16, -0.02, 0.0], [0, 0, Math.PI / 2]);
    add('accent', cyl(0.05, 0.05, 0.12, 12), [0.16, -0.02, -0.2], [0, 0, Math.PI / 2]);
    add('glow', cyl(0.025, 0.025, 0.18, 10), [0.16, -0.02, 0.06], [0, 0, Math.PI / 2]);
    // 散热鳍
    for (let i = 0; i < 4; i++) add('metal', box(0.01, 0.16, 0.05), [-0.1 + i * 0.066, 0.0, -0.34]);
    // 顶部瞄具
    add('metal', box(0.05, 0.07, 0.18), [0, 0.14, -0.18]);
    add('glow', box(0.014, 0.014, 0.014), [0, 0.14, -0.18]);
  }

  commonFurniture(b, index);

  const group = new THREE.Group();
  const staticGroup = b.build(materials);
  group.add(staticGroup);

  // —— 可动部件 ——
  const magazine = new THREE.Group();
  const magBody = new THREE.Mesh(box(0.105, 0.24, 0.115), materials.dark);
  const magLip = new THREE.Mesh(box(0.115, 0.03, 0.12), materials.accent);
  magLip.position.y = 0.12;
  const magGlow = new THREE.Mesh(box(0.012, 0.14, 0.012), materials.glow);
  magGlow.position.set(0.056, 0, 0.06);
  magazine.add(magBody, magLip, magGlow);
  magazine.position.set(0, -0.19, index === 1 ? -0.16 : -0.03);
  if (index === 1) magazine.visible = false;
  group.add(magazine);

  const bolt = new THREE.Mesh(box(0.055, 0.04, 0.085), materials.accent);
  bolt.position.set(0.105, 0.035, -0.16);
  group.add(bolt);

  const flash = new THREE.Group();
  const flashCore = new THREE.Mesh(cone(0.085, 0.26, 7), new THREE.MeshBasicMaterial({ color: GUN_PALETTE[index].glow, transparent: true, opacity: 0.9, toneMapped: false, blending: THREE.AdditiveBlending, depthWrite: false }));
  flashCore.rotation.x = -Math.PI / 2;
  const flashRing = new THREE.Mesh(torus(0.1, 0.018, 5, 14), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, toneMapped: false, blending: THREE.AdditiveBlending, depthWrite: false }));
  flash.add(flashCore, flashRing);
  const muzzleZ = index === 5 ? -1.14 : index === 4 ? -1.02 : index === 2 ? -1.44 : index === 1 ? -1.14 : index === 3 ? -1.22 : -1.12;
  flash.position.set(0, 0.015, muzzleZ - 0.1);
  flash.visible = false;
  group.add(flash);

  // 电弧线圈（仅弧光旋转）
  const coils = new THREE.Group();
  if (index === 3) {
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(torus(0.12 + i * 0.025, 0.01, 5, 18), materials.glow);
      ring.position.set(0, 0.015, -0.55 - i * 0.16);
      ring.rotation.y = i * 0.5;
      coils.add(ring);
    }
    group.add(coils);
  }

  group.traverse((child) => { child.frustumCulled = false; child.renderOrder = 10; });
  return { group, magazine, bolt, flash, coils, muzzleZ, materials };
}

/* ------------------------------------------------------------------ *
 * 敌人模型
 * ------------------------------------------------------------------ */

/**
 * @param {string} type
 * @param {object} mats { body, dark, glow, accent, warning }
 * @returns {{ staticMeshes: THREE.Mesh[], dynamic: object, weakpoints: THREE.Mesh[], height: number, baseY: number }}
 */
export function buildEnemyModel(type, mats) {
  const b = new GeoBatch();
  const add = (key, geo, pos, rot, scale) => b.add(key, geo, pos, rot, scale);
  const dynamic = { legs: [], rotors: [], shards: [], rings: [], turrets: [], core: null, wings: [] };
  const weakpoints = [];
  const extraMeshes = [];
  let height = 2.2;
  let baseY = 0;

  const makeMesh = (geo, mat, pos, rot) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...(pos || [0, 0, 0]));
    if (rot) mesh.rotation.set(...rot);
    return mesh;
  };
  const weak = (geo, pos, rot, scale) => {
    const mesh = makeMesh(geo, mats.glow, pos, rot);
    if (scale) mesh.scale.set(...scale);
    mesh.userData.critical = true;
    weakpoints.push(mesh);
    extraMeshes.push(mesh);
    return mesh;
  };
  const limb = (geo, mat, pos, rot, list = dynamic.legs) => {
    const mesh = makeMesh(geo, mat, pos, rot);
    list.push(mesh);
    extraMeshes.push(mesh);
    return mesh;
  };

  if (type === 'runner') {
    height = 2.25;
    // 躯干：分层胸甲 + 腹部 + 颈
    add('body', box(0.76, 0.86, 0.5), [0, 1.18, 0]);
    add('accent', box(0.62, 0.34, 0.535), [0, 1.42, -0.02]);
    add('dark', box(0.5, 0.08, 0.55), [0, 1.24, -0.01]);
    add('dark', box(0.44, 0.3, 0.42), [0, 0.78, 0]);
    add('accent', box(0.16, 0.16, 0.1), [0, 1.06, -0.28]);      // 胸腔反应堆座
    for (let i = 0; i < 3; i++) add('glow', box(0.035, 0.13, 0.02), [-0.09 + i * 0.09, 0.82, -0.23]);
    add('dark', cyl(0.11, 0.13, 0.18, 8), [0, 1.7, 0]);
    // 头 + 面甲 + 眼
    add('body', octa(0.34, 0), [0, 1.92, 0]);
    add('accent', box(0.36, 0.11, 0.14), [0, 1.88, -0.28]);
    add('dark', box(0.28, 0.09, 0.1), [0, 2.03, -0.24]);
    add('accent', cone(0.07, 0.26, 5), [0, 2.18, 0.06]);         // 头冠
    // 肩甲 + 上臂
    for (const side of [-1, 1]) {
      add('accent', box(0.3, 0.24, 0.42), [side * 0.53, 1.52, 0]);
      add('dark', box(0.19, 0.6, 0.21), [side * 0.57, 1.12, 0]);
      add('body', box(0.14, 0.36, 0.16), [side * 0.57, 0.78, -0.05]);
      for (let i = 0; i < 3; i++) add('glow', box(0.04, 0.03, 0.1), [side * 0.57, 1.32 - i * 0.1, -0.16]);
      add('accent', box(0.22, 0.1, 0.3), [side * 0.26, 0.66, 0]); // 髋甲
      add('dark', box(0.1, 0.1, 0.1), [side * 0.26, 0.48, 0]);    // 膝关节
    }
    // 脊刺与背部散热
    for (let i = 0; i < 4; i++) add('accent', cone(0.075, 0.3, 5), [0, 1.65 - i * 0.22, 0.28], [0.5, 0, 0]);
    add('glow', box(0.26, 0.02, 0.03), [0, 1.55, 0.27]);
    weak(sph(0.16, 10, 8), [0, 1.92, -0.3]);
    // 双腿（摆动）
    for (const side of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.25, 0.56, 0);
      const upper = new THREE.Mesh(box(0.2, 0.5, 0.24), mats.body);
      upper.position.y = -0.22;
      const lower = new THREE.Mesh(box(0.16, 0.42, 0.2), mats.dark);
      lower.position.y = -0.58;
      const foot = new THREE.Mesh(box(0.24, 0.12, 0.38), mats.accent);
      foot.position.set(0, -0.8, -0.07);
      const knee = new THREE.Mesh(box(0.19, 0.1, 0.25), mats.glow);
      knee.position.y = -0.45;
      leg.add(upper, lower, foot, knee);
      dynamic.legs.push(leg);
      extraMeshes.push(leg);
    }
    dynamic.core = weak(sph(0.12, 10, 8), [0, 1.06, -0.32]);
  } else if (type === 'drone') {
    height = 2.6; baseY = 0.35;
    add('body', sph(0.56, 14, 10), [0, 1.85, 0]);
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      add('accent', box(0.3, 0.28, 0.08), [Math.cos(a) * 0.52, 1.85 + Math.sin(a) * 0.35, -0.3], [0, 0, a]);
    }
    add('dark', torus(0.6, 0.06, 6, 24), [0, 1.85, 0], [Math.PI / 2, 0, 0]);
    add('dark', torus(0.62, 0.05, 6, 24), [0, 1.85, 0], [0, 0, 0]);
    add('glow', box(0.5, 0.035, 0.05), [0, 2.3, -0.3]);
    // 双翼 + 炮管
    for (const side of [-1, 1]) {
      add('body', box(0.72, 0.1, 0.3), [side * 0.82, 1.85, 0]);
      add('accent', box(0.6, 0.045, 0.12), [side * 0.86, 1.9, -0.1]);
      add('dark', cyl(0.055, 0.07, 0.5, 8), [side * 0.9, 1.62, -0.28], [Math.PI / 2, 0, 0]);
      add('glow', cyl(0.035, 0.035, 0.02, 8), [side * 0.9, 1.62, -0.54], [Math.PI / 2, 0, 0]);
      add('dark', cyl(0.09, 0.09, 0.22, 8), [side * 0.45, 1.35, 0.1]);
      add('glow', cyl(0.06, 0.06, 0.02, 8), [side * 0.45, 1.23, 0.1]);
    }
    add('dark', box(0.3, 0.14, 0.22), [0, 1.36, -0.4]);
    weak(octa(0.31, 0), [0, 1.85, -0.5]);
    // 旋翼环（旋转）
    for (const side of [-1, 1]) {
      const rotor = new THREE.Group();
      rotor.position.set(side * 1.18, 1.88, 0);
      const ring = new THREE.Mesh(torus(0.34, 0.035, 6, 20), mats.accent);
      ring.rotation.x = Math.PI / 2;
      const bladeA = new THREE.Mesh(box(0.6, 0.025, 0.09), mats.glow);
      const bladeB = new THREE.Mesh(box(0.09, 0.025, 0.6), mats.glow);
      rotor.add(ring, bladeA, bladeB);
      dynamic.rotors.push(rotor);
      extraMeshes.push(rotor);
    }
  } else if (type === 'tank') {
    height = 2.9;
    add('body', box(1.5, 1.4, 1.1), [0, 1.28, 0]);
    add('accent', box(1.24, 0.5, 1.14), [0, 1.72, -0.02]);
    add('accent', box(1.1, 0.3, 1.16), [0, 0.78, -0.02]);
    add('dark', box(1.3, 0.09, 1.14), [0, 1.43, -0.02]);
    for (let i = 0; i < 5; i++) add('glow', box(0.09, 0.1, 0.03), [-0.42 + i * 0.21, 1.02, -0.58]);
    add('dark', box(0.78, 0.52, 0.66), [0, 2.18, 0]);            // 头
    add('accent', box(0.86, 0.14, 0.7), [0, 2.44, 0]);
    add('dark', box(0.6, 0.12, 0.1), [0, 2.2, -0.38]);
    for (const side of [-1, 1]) {
      add('accent', box(0.56, 0.55, 0.86), [side * 1.02, 1.56, 0]);  // 肩甲
      add('body', box(0.44, 0.9, 0.7), [side * 1.02, 0.95, 0]);
      add('dark', cyl(0.115, 0.15, 1.2, 8), [side * 1.02, 1.5, -0.72], [Math.PI / 2, 0, 0]); // 炮管
      add('glow', cyl(0.09, 0.09, 0.03, 8), [side * 1.02, 1.5, -1.33], [Math.PI / 2, 0, 0]);
      add('accent', box(0.2, 0.42, 0.2), [side * 0.55, 0.32, 0]);     // 腿
      add('dark', box(0.42, 0.18, 0.62), [side * 0.55, 0.12, -0.08]);  // 足
      add('dark', box(0.3, 0.55, 0.3), [side * 0.62, 2.0, 0.42]);      // 背部散热塔
      for (let i = 0; i < 3; i++) add('glow', box(0.24, 0.03, 0.02), [side * 0.62, 1.82 + i * 0.14, 0.58]);
      add('body', box(0.28, 0.28, 0.9), [side * 0.82, 0.7, 0]);
    }
    add('warning', box(0.1, 0.06, 0.06), [0, 2.5, -0.36]);
    weak(box(0.5, 0.1, 0.08), [0, 2.2, -0.42]);
    dynamic.core = weak(ico(0.2, 0), [0, 1.28, -0.6]);
  } else if (type === 'phantom') {
    height = 2.25; baseY = 0.25;
    add('body', octa(0.52, 0), [0, 1.4, 0]);
    add('accent', octa(0.36, 0), [0, 1.4, 0.06], [0, Math.PI / 4, 0]);
    add('dark', box(0.6, 0.06, 0.6), [0, 1.4, 0], [Math.PI / 4, 0, 0]);
    for (const side of [-1, 1]) {
      add('accent', box(0.1, 1.05, 0.3), [side * 0.52, 1.28, 0], [0, 0, side * 0.36]);
      add('glow', box(0.025, 0.72, 0.05), [side * 0.58, 1.28, -0.17], [0, 0, side * 0.36]);
      add('dark', cone(0.12, 0.6, 5), [side * 0.3, 0.55, 0], [Math.PI, 0, side * 0.2]);
    }
    add('dark', cone(0.22, 0.95, 6), [0, 0.52, 0], [Math.PI, 0, 0]);
    add('glow', torus(0.46, 0.02, 5, 22), [0, 1.4, 0]);
    weak(octa(0.23, 0), [0, 1.4, -0.45]);
    // 环绕碎片
    for (let i = 0; i < 6; i++) {
      const shard = new THREE.Mesh(octa(0.12 + (i % 2) * 0.05, 0), i % 2 ? mats.glow : mats.accent);
      const angle = i / 6 * Math.PI * 2;
      shard.position.set(Math.cos(angle) * 0.85, 1.4 + Math.sin(angle * 2) * 0.28, Math.sin(angle) * 0.55);
      shard.userData.angle = angle;
      shard.userData.baseY = shard.position.y;
      dynamic.shards.push(shard);
      extraMeshes.push(shard);
    }
    const ring = new THREE.Mesh(torus(0.72, 0.022, 5, 26), mats.glow);
    ring.position.y = 1.4;
    ring.rotation.x = Math.PI / 2.6;
    dynamic.rings.push(ring);
    extraMeshes.push(ring);
  } else if (type === 'bomber') {
    height = 2.15; baseY = 0.3;
    add('body', sph(0.54, 14, 10), [0, 1.3, 0]);
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2;
      add('accent', box(0.26, 0.24, 0.07), [Math.cos(a) * 0.46, 1.3, Math.sin(a) * 0.46], [0, -a, 0]);
    }
    add('dark', torus(0.62, 0.075, 6, 22), [0, 1.3, 0], [Math.PI / 2, 0, 0]);
    add('warning', torus(0.64, 0.02, 5, 22), [0, 1.56, 0], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 4; i++) {
      const a = i / 4 * Math.PI * 2;
      add('dark', cyl(0.08, 0.08, 0.28, 7), [Math.cos(a) * 0.36, 0.86, Math.sin(a) * 0.36]);
      add('glow', cyl(0.055, 0.055, 0.02, 7), [Math.cos(a) * 0.36, 0.7, Math.sin(a) * 0.36]);
      add('warning', box(0.07, 0.05, 0.03), [Math.cos(a + 0.5) * 0.52, 1.52, Math.sin(a + 0.5) * 0.52]);
    }
    add('dark', cone(0.22, 0.5, 6), [0, 0.62, 0], [Math.PI, 0, 0]);
    weak(ico(0.3, 0), [0, 1.3, -0.5]);
    // 可张合尾翼
    for (let i = 0; i < 4; i++) {
      const wing = new THREE.Group();
      const a = i / 4 * Math.PI * 2;
      wing.position.set(Math.cos(a) * 0.42, 1.3, Math.sin(a) * 0.42);
      wing.rotation.y = -a;
      const plate = new THREE.Mesh(box(0.34, 0.06, 0.2), mats.accent);
      plate.position.x = 0.2;
      const tip = new THREE.Mesh(box(0.1, 0.02, 0.14), mats.glow);
      tip.position.x = 0.4;
      wing.add(plate, tip);
      dynamic.wings.push(wing);
      extraMeshes.push(wing);
    }
  } else if (type === 'medic') {
    height = 2.4; baseY = 1.25;
    add('body', sph(0.5, 14, 10), [0, 1.3, 0]);
    add('dark', box(0.9, 0.12, 0.9), [0, 0.92, 0]);
    add('accent', box(0.66, 0.05, 0.66), [0, 0.86, 0]);
    add('dark', torus(0.56, 0.05, 6, 22), [0, 1.0, 0], [Math.PI / 2, 0, 0]);
    // 医疗十字标识
    add('accent', box(0.52, 0.17, 0.06), [0, 1.3, -0.47]);
    add('accent', box(0.17, 0.52, 0.06), [0, 1.3, -0.47]);
    add('glow', box(0.14, 0.14, 0.1), [0, 1.3, -0.51]);           // 脉冲核心
    for (const side of [-1, 1]) add('body', box(0.14, 0.5, 0.14), [side * 0.52, 1.08, 0]);
    add('accent', box(0.2, 0.04, 0.2), [0, 1.62, 0]);
    weak(sph(0.17, 10, 8), [0, 1.3, -0.5]);
    const ring = new THREE.Mesh(torus(0.72, 0.03, 5, 26), mats.glow);
    ring.position.y = 1.3;
    ring.rotation.x = Math.PI / 2;
    dynamic.rings.push(ring);
    extraMeshes.push(ring);
    dynamic.core = weak(sph(0.12, 10, 8), [0, 1.62, 0]);
  } else if (type === 'turret') {
    height = 2.3; baseY = 0;
    add('body', cyl(0.86, 1.02, 0.7, 14), [0, 0.35, 0]);
    add('dark', cyl(0.96, 0.96, 0.16, 14), [0, 0.72, 0]);
    add('accent', torus(0.9, 0.05, 6, 30), [0, 0.82, 0], [Math.PI / 2, 0, 0]);
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      add('dark', box(0.26, 0.02, 0.06), [Math.cos(a) * 0.97, 0.74, Math.sin(a) * 0.97], [0, -a, 0]);
    }
    for (const side of [-1, 1]) add('dark', box(0.18, 0.55, 0.18), [side * 0.66, 0.2, 0]);
    // 旋转扫描头（作为整体朝向玩家）
    const head = new THREE.Group();
    head.position.y = 1.18;
    const dome = new THREE.Mesh(sph(0.55, 16, 12), mats.dark);
    const eye = new THREE.Mesh(box(0.42, 0.2, 0.12), mats.warning);
    eye.position.set(0, 0.02, -0.5);
    const barrel = new THREE.Mesh(box(0.2, 0.2, 0.9), mats.body);
    barrel.position.set(0, 0.02, -0.62);
    const tip = new THREE.Mesh(box(0.13, 0.13, 0.06), mats.glow);
    tip.position.set(0, 0.02, -1.08);
    const ringSide = new THREE.Mesh(torus(0.5, 0.03, 5, 22), mats.glow);
    ringSide.position.y = 0.02;
    ringSide.rotation.x = Math.PI / 2;
    head.add(dome, eye, barrel, tip, ringSide);
    extraMeshes.push(head);
    add('accent', cyl(0.13, 0.13, 0.42, 8), [0, 1.72, 0]);
    weak(ico(0.16, 0), [0, 1.18, -0.5]);
    add('warning', sph(0.1, 8, 6), [0, 1.98, 0]);
  } else if (type === 'falcon') {
    // 游隼突袭者：后掠翼快速飞行单位，低血量、悬停、弱接触伤害
    height = 1.9; baseY = 1.35;
    add('body', new THREE.ConeGeometry(0.32, 1.5, 10), [0, 1.2, 0], [Math.PI / 2, 0, 0]); // 头部朝前
    add('dark', box(0.34, 0.3, 0.7), [0, 1.2, 0.1]);
    add('accent', box(0.3, 0.06, 0.5), [0, 1.32, 0.05]);
    weak(sph(0.13, 10, 8), [0, 1.2, -0.4]);            // 核心（后部）
    add('glow', new THREE.OctahedronGeometry(0.1, 0), [0, 1.2, -0.55]); // 推进核心
    add('warning', box(0.16, 0.12, 0.06), [0, 1.26, 0.62]);  // 前视眼
    // 后掠翼（左右各一，可微动）
    for (const side of [-1, 1]) {
      const wing = new THREE.Group();
      wing.position.set(side * 0.22, 1.18, -0.05);
      const plate = new THREE.Mesh(box(0.9, 0.05, 0.34), mats.accent);
      plate.position.set(side * 0.45, 0, -0.1);
      plate.rotation.y = side * 0.5;
      const tip = new THREE.Mesh(box(0.16, 0.03, 0.2), mats.glow);
      tip.position.set(side * 0.92, 0, -0.22);
      tip.rotation.y = side * 0.5;
      wing.add(plate, tip);
      dynamic.wings.push(wing);
      extraMeshes.push(wing);
    }
    // 尾部立鳍
    add('dark', box(0.04, 0.4, 0.28), [0, 1.42, -0.5]);
    add('glow', box(0.02, 0.22, 0.16), [0, 1.4, -0.52]);
  } else {
    // boss 守望者核心
    height = 5.6; baseY = 0.4;
    add('body', sph(1.68, 20, 14), [0, 3.2, 0]);
    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI * 2;
      add('accent', box(0.62, 0.66, 0.16), [Math.cos(a) * 1.5, 3.2 + Math.sin(a) * 0.9, -0.55], [0, 0, a]);
    }
    add('dark', torus(1.74, 0.12, 8, 40), [0, 3.2, 0]);
    add('dark', torus(1.5, 0.09, 8, 40), [0, 3.2, 0], [0, Math.PI / 2, 0]);
    add('glow', box(2.4, 0.06, 0.08), [0, 4.1, -0.9]);
    add('accent', cone(0.5, 1.1, 6), [0, 5.05, 0]);
    add('warning', cone(0.24, 0.6, 6), [0, 5.5, 0]);
    for (const side of [-1, 1]) {
      add('body', box(0.85, 2.9, 0.85), [side * 2.15, 2.75, 0]);
      add('accent', box(0.95, 0.5, 0.95), [side * 2.15, 4.1, 0]);
      add('dark', cyl(0.2, 0.27, 1.7, 10), [side * 2.15, 2.9, -1.05], [Math.PI / 2, 0, 0]);
      add('warning', cyl(0.14, 0.14, 0.03, 10), [side * 2.15, 2.9, -1.92], [Math.PI / 2, 0, 0]);
      add('body', box(0.5, 0.9, 1.5), [side * 1.1, 1.35, 0]);
      add('accent', box(0.7, 0.25, 1.7), [side * 1.1, 0.85, 0]);
      for (let i = 0; i < 3; i++) add('glow', box(0.06, 0.5, 0.06), [side * 2.55, 3.4 - i * 0.5, -0.4]);
      for (let i = 0; i < 3; i++) {
        add('dark', cyl(0.16, 0.2, 0.5, 8), [side * (1.2 + i * 0.65), 1.0, 0.7]);
        add('glow', cyl(0.12, 0.12, 0.02, 8), [side * (1.2 + i * 0.65), 0.74, 0.7]);
      }
    }
    add('dark', box(1.2, 0.5, 0.8), [0, 1.4, 0.9]);
    weak(ico(0.88, 1), [0, 3.2, -1.35]);
    dynamic.core = weak(sph(0.35, 12, 10), [0, 3.2, -1.62]);
    // 三层旋转环 + 肩部炮塔
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(torus(2.02 + i * 0.27, 0.1, 8, 44), i === 1 ? mats.glow : mats.accent);
      ring.position.y = 3.2;
      ring.rotation.x = Math.PI / 2 + i * 0.45;
      ring.userData.spin = (i % 2 ? -1 : 1) * (0.4 + i * 0.15);
      dynamic.rings.push(ring);
      extraMeshes.push(ring);
    }
    for (const side of [-1, 1]) {
      const turret = new THREE.Group();
      turret.position.set(side * 2.15, 4.35, 0);
      const dome = new THREE.Mesh(sph(0.34, 12, 8), mats.dark);
      const barrel = new THREE.Mesh(box(0.16, 0.16, 0.62), mats.body);
      barrel.position.z = -0.4;
      const tip = new THREE.Mesh(box(0.1, 0.1, 0.05), mats.glow);
      tip.position.z = -0.73;
      turret.add(dome, barrel, tip);
      dynamic.turrets.push(turret);
      extraMeshes.push(turret);
    }
  }

  const staticMeshes = b.meshes(mats, { castShadow: false }).map(({ mesh }) => mesh);
  return { staticMeshes, dynamic, weakpoints, extraMeshes, height, baseY, allMeshes: [...staticMeshes, ...extraMeshes] };
}

/* ------------------------------------------------------------------ *
 * 场景贴图（纯 Canvas 生成，离线版同样可用）
 * ------------------------------------------------------------------ */

export function makeSignTexture(text, sub, accent = '#54f7d2') {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#050d10';
  ctx.fillRect(0, 0, 512, 256);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 5;
  ctx.strokeRect(14, 14, 484, 228);
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = accent;
  for (let y = 24; y < 236; y += 12) ctx.fillRect(20, y, 472, 2);
  ctx.globalAlpha = 1;
  ctx.textAlign = 'center';
  ctx.shadowColor = accent;
  ctx.shadowBlur = 26;
  ctx.fillStyle = '#e9fffa';
  ctx.font = 'bold 68px "Barlow Condensed", sans-serif';
  ctx.fillText(text, 256, 122);
  ctx.shadowBlur = 12;
  ctx.fillStyle = accent;
  ctx.font = 'bold 30px "Share Tech Mono", monospace';
  ctx.fillText(sub, 256, 180);
  ctx.shadowBlur = 0;
  ctx.fillStyle = accent;
  ctx.fillRect(60, 206, 392, 3);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function makeWindowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#070f13';
  ctx.fillRect(0, 0, 128, 256);
  let seed = 999331;
  const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let y = 6; y < 250; y += 14) {
    for (let x = 6; x < 122; x += 16) {
      const r = rand();
      if (r > 0.58) {
        ctx.fillStyle = r > 0.9 ? '#ffb35c' : r > 0.78 ? '#b45cff' : '#4ce0c4';
        ctx.globalAlpha = 0.35 + rand() * 0.55;
        ctx.fillRect(x, y, 9, 7);
      } else {
        ctx.fillStyle = '#12242a';
        ctx.globalAlpha = 0.8;
        ctx.fillRect(x, y, 9, 7);
      }
    }
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function makeFloorTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0c181b';
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = '#1c3a37';
  ctx.lineWidth = 3;
  ctx.strokeRect(6, 6, 244, 244);
  ctx.strokeStyle = '#142b2a';
  ctx.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath(); ctx.moveTo(i * 64, 8); ctx.lineTo(i * 64, 248); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(8, i * 64); ctx.lineTo(248, i * 64); ctx.stroke();
  }
  ctx.fillStyle = '#2a5b52';
  for (const [x, y] of [[16, 16], [240, 16], [16, 240], [240, 240]]) {
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = '#7fd8c4';
  for (let i = 0; i < 220; i++) {
    const x = (i * 71) % 256, y = (i * 137) % 256;
    ctx.fillRect(x, y, 2, 2);
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(18, 18);
  texture.anisotropy = 8;
  return texture;
}

export function makeHorizonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 16; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, 'rgba(4,10,14,0)');
  gradient.addColorStop(0.55, 'rgba(15,64,64,0.32)');
  gradient.addColorStop(0.82, 'rgba(40,150,135,0.42)');
  gradient.addColorStop(1, 'rgba(6,18,22,0.05)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 16, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
