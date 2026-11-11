import * as THREE from 'three';
import { AudioSystem } from './Audio.js';
import { createWeaponModel, buildEnemyModel } from './Models.js';
import { buildWorld } from './World.js';

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const random = (min, max) => min + Math.random() * (max - min);

/**
 * 越界协议 // OVERBOUND —— 单机作弊密语。
 * 在游戏中直接敲字母即可触发（大小写均可），密语需连续输入、整体匹配，
 * 移动键 WASD 不会误触（除非恰好拼出整词）。另支持经典科乐美秘籍
 * ↑↑↓↓←→←→BA 唤醒作弊清单。密语“复杂但好记”：都是游戏世界观里的英文协议词。
 */
const CHEAT_CODES = {
  lockon: 'lock', autofire: 'auto', godmode: 'god', infinity: 'ammo',
  xray: 'wall', timeslip: 'slow', purge: 'purge', arsenal: 'arsenal',
  recharge: 'recharge', overbound: 'overbound', standdown: 'standdown', help: 'help',
};
const CHEAT_LABELS = {
  lock: '锁头 // LOCK-ON', auto: '自动射击 // AUTO-FIRE', god: '无敌 // GOD-MODE',
  ammo: '无限弹药 // INFINITY', wall: '透视 // X-RAY', slow: '子弹时间 // TIME-SLIP',
  purge: '清场 // PURGE', arsenal: '全武器解锁 // ARSENAL', recharge: '能量回满 // RECHARGE',
  overbound: '越界协议全开 // OVERBOUND', standdown: '协议解除 // STAND-DOWN', help: '作弊码清单 // HELP',
};
const CHEAT_SHORT = { god: '无敌', ammo: '无限弹', lock: '锁头', auto: '自动射', wall: '透视', slow: '时停' };
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

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

/**
 * 武器库：15 把，按 category 分为 pistol / rifle / sniper / special。
 * 6–14 为 V1.0 新增（手枪 / 步枪 / 狙击各 3 把），price 用于战后商店购买。
 * 所有武器共用同一套命中 / 墙体 / 宽容判定逻辑。
 */
const WEAPONS = [
  { id: 'rifle', name: 'VX-9 脉冲', label: 'VX-9 <span>脉冲</span>', className: '突击步枪 // AUTO', category: 'rifle', price: 380, desc: '稳定的全自动脉冲步枪，适合中距离持续压制。', damage: 24, fireRate: 9, magazine: 30, reserve: 180, reload: 1.45, spread: 0.009, pellets: 1, auto: true, range: 90 },
  { id: 'shotgun', name: 'SG-12 裂解', label: 'SG-12 <span>裂解</span>', className: '战术霰弹枪 // PUMP', category: 'special', price: 420, desc: '八枚高能弹丸同时释放，近距离可造成毁灭性伤害。', damage: 14, fireRate: 1.2, magazine: 6, reserve: 42, reload: 1.8, spread: 0.065, pellets: 8, auto: false, range: 42 },
  { id: 'rail', name: 'R-01 磁轨', label: 'R-01 <span>磁轨</span>', className: '磁轨精确步枪 // SEMI', category: 'sniper', price: 640, desc: '高精度磁轨射线，贯穿一条直线上的所有敌人。', damage: 135, fireRate: 0.8, magazine: 5, reserve: 25, reload: 2.1, spread: 0.001, pellets: 1, auto: false, range: 130, pierce: true },
  { id: 'arc', name: 'ARC-7 弧光', label: 'ARC-7 <span>弧光</span>', className: '链式电弧 // CHAIN', category: 'special', price: 660, desc: '发射链式电弧，命中后自动跳跃到附近敌人。', damage: 46, fireRate: 3.4, magazine: 24, reserve: 120, reload: 1.7, spread: 0.014, pellets: 1, auto: true, range: 62, chain: 3 },
  { id: 'rocket', name: 'WN-5 蜂巢', label: 'WN-5 <span>蜂巢</span>', className: '制导导弹 // HOMING', category: 'special', price: 780, desc: '六管制导发射器，导弹自动锁定敌人并产生范围爆炸。', damage: 120, fireRate: 1.1, magazine: 4, reserve: 16, reload: 2.2, spread: 0, pellets: 1, auto: false, range: 130, rocket: true, aoe: 6 },
  { id: 'frost', name: 'LN-3 寒霜', label: 'LN-3 <span>寒霜</span>', className: '低温步枪 // CRYO', category: 'rifle', price: 600, desc: '低温步枪，命中使敌人减速 50%，是控场核心手段。', damage: 30, fireRate: 4.2, magazine: 22, reserve: 110, reload: 1.6, spread: 0.012, pellets: 1, auto: true, range: 95, frost: true, slowDuration: 2.2, slowStrength: 0.5 },
  // —— V1.0 新增 · 手枪 3 把 ——
  { id: 'sentinel', name: 'PX-1 哨兵', label: 'PX-1 <span>哨兵</span>', className: '战术手枪 // SIDEARM', category: 'pistol', price: 240, desc: '高单发伤害的半自动手枪，弹匣小但暴击收益极高。', damage: 42, fireRate: 3.2, magazine: 12, reserve: 96, reload: 1.2, spread: 0.006, pellets: 1, auto: false, range: 55, critBonus: 0.16 },
  { id: 'twins', name: 'PX-2 双生', label: 'PX-2 <span>双生</span>', className: '双持连发 // DUAL', category: 'pistol', price: 320, desc: '双持全自动机匣，射速极快，适合清理脆皮与游隼。', damage: 24, fireRate: 6.5, magazine: 20, reserve: 160, reload: 1.5, spread: 0.018, pellets: 1, auto: true, range: 48 },
  { id: 'judgement', name: 'PX-3 审判', label: 'PX-3 <span>审判</span>', className: '重型手炮 // HANDCANNON', category: 'pistol', price: 420, desc: '大口径手炮，近距离一发可撕开重装单位装甲。', damage: 95, fireRate: 1.1, magazine: 6, reserve: 48, reload: 1.9, spread: 0.002, pellets: 1, auto: false, range: 70 },
  // —— V1.0 新增 · 步枪 3 把 ——
  { id: 'dawn', name: 'AR-4 破晓', label: 'AR-4 <span>破晓</span>', className: '模块化突击步枪 // AUTO', category: 'rifle', price: 460, desc: '均衡型全自动步枪，伤害与稳定性都优于制式装备。', damage: 28, fireRate: 8, magazine: 32, reserve: 192, reload: 1.5, spread: 0.008, pellets: 1, auto: true, range: 95 },
  { id: 'hornet', name: 'AR-8 蜂刺', label: 'AR-8 <span>蜂刺</span>', className: '高射速卡宾 // SMG', category: 'rifle', price: 520, desc: '超高射速低后坐，靠弹幕压制，配合弱点解析收益极高。', damage: 16, fireRate: 13, magazine: 45, reserve: 270, reload: 1.7, spread: 0.016, pellets: 1, auto: true, range: 70 },
  { id: 'maul', name: 'AR-9 重锤', label: 'AR-9 <span>重锤</span>', className: '重型战斗步枪 // HEAVY', category: 'rifle', price: 560, desc: '高单发伤害的慢射速步枪，中远距离点杀效率出色。', damage: 62, fireRate: 3.6, magazine: 20, reserve: 120, reload: 2.0, spread: 0.011, pellets: 1, auto: true, range: 100 },
  // —— V1.0 新增 · 狙击 3 把 ——
  { id: 'hush', name: 'SR-2 静默', label: 'SR-2 <span>静默</span>', className: '半自动狙击 // DMR', category: 'sniper', price: 620, desc: '高精度半自动狙击，弹匣容量更宽裕，容错更高。', damage: 190, fireRate: 0.9, magazine: 5, reserve: 30, reload: 2.2, spread: 0.0006, pellets: 1, auto: false, range: 150, pierce: true },
  { id: 'piercer', name: 'SR-6 穿云', label: 'SR-6 <span>穿云</span>', className: '贯穿狙击 // ANTI-MATERIEL', category: 'sniper', price: 700, desc: '射速更快的贯穿狙击，一发可洞穿整列敌人。', damage: 150, fireRate: 1.4, magazine: 8, reserve: 48, reload: 2.0, spread: 0.001, pellets: 1, auto: false, range: 160, pierce: true },
  { id: 'tribunal', name: 'SR-9 天罚', label: 'SR-9 <span>天罚</span>', className: '反器材轨道炮 // RAILGUN', category: 'sniper', price: 860, desc: '单发毁伤极高的轨道炮，首领与重装的终结者。', damage: 320, fireRate: 0.55, magazine: 3, reserve: 18, reload: 2.8, spread: 0, pellets: 1, auto: false, range: 180, pierce: true },
];
const WEAPON_CATEGORY_LABEL = { pistol: '手枪', rifle: '步枪', sniper: '狙击枪', special: '特殊装备' };
export { WEAPONS, WEAPON_CATEGORY_LABEL };

const ENEMY_DATA = {
  runner: { name: '猎犬突击体', health: 65, speed: 4.7, damage: 13, score: 120, radius: 0.55, color: 0xff4658 },
  drone: { name: '蜂群射手', health: 90, speed: 2.7, damage: 10, score: 180, radius: 0.65, color: 0xb367ff },
  tank: { name: '重装碾压者', health: 310, speed: 1.35, damage: 16, score: 420, radius: 0.95, color: 0xff8a3d },
  phantom: { name: '相位幽影', health: 58, speed: 5.6, damage: 12, score: 240, radius: 0.5, color: 0x5ce1ff },
  falcon: { name: '游隼突袭者', health: 44, speed: 5.8, damage: 9, score: 160, radius: 0.5, color: 0xc6ff3d },
  bomber: { name: '自毁蜂群', health: 46, speed: 5.5, damage: 28, score: 210, radius: 0.52, color: 0xffc24d },
  medic: { name: '维生单元', health: 75, speed: 2.3, damage: 0, score: 200, radius: 0.6, color: 0x47e0a0 },
  turret: { name: '定点炮台', health: 240, speed: 0, damage: 14, score: 300, radius: 0.9, color: 0xffb24d },
  boss: { name: '守望者核心', health: 2600, speed: 1.45, damage: 18, score: 5000, radius: 2.1, color: 0xff593d },
};

/** 难度绑定通关波次：简单 10 波 / 标准 15 波 / 困难 20 波 / 极限 25 波，逐级递增。 */
const DIFFICULTY = {
  recruit: { id: 'recruit', label: '新兵', waves: 10, hp: 0.78, damage: 0.68, score: 0.85, drop: 1.35, spawn: 0.85 },
  standard: { id: 'standard', label: '标准', waves: 15, hp: 1, damage: 1, score: 1, drop: 1, spawn: 1 },
  nightmare: { id: 'nightmare', label: '噩梦', waves: 20, hp: 1.4, damage: 1.45, score: 1.5, drop: 0.82, spawn: 1.18 },
  apex: { id: 'apex', label: '极限', waves: 25, hp: 1.85, damage: 1.8, score: 2.1, drop: 0.7, spawn: 1.35 },
};

/** 每波随机战术任务，完成后发放信用点；通关后任务奖励翻倍。 */
const MISSIONS = [
  { id: 'flawless', text: '本波不受到任何伤害', reward: 200, target: 1 },
  { id: 'crit', text: '造成 5 次暴击', reward: 170, target: 5 },
  { id: 'headshot', text: '命中敌人弱点 6 次', reward: 160, target: 6 },
  { id: 'combo', text: '达成 8 连击', reward: 180, target: 8 },
  { id: 'barrel', text: '用油桶击毁 2 个敌人', reward: 220, target: 2 },
  { id: 'kills', text: '本波击毁 12 个敌人', reward: 150, target: 12 },
];

/**
 * 章节故事线：按战役进度里程碑触发（at = 占总波次的百分比），
 * 这样无论何种难度（10/15/20/25 波）都能看到完整剧情；无尽模式每 5 波循环推进。
 */
const CHAPTERS = [
  { at: 0.00, title: '第一章 // 霓虹余烬', text: '02:17，第七区断联。你是唯一还能接入战术网络的「幽灵」。' },
  { at: 0.22, title: '第二章 // 铁潮', text: '机械军团开始成建制推进，前哨站接连失守，补给线被压缩到极限。' },
  { at: 0.42, title: '第三章 // 裂隙回声', text: '裂隙深处传来同源信号——守望者正在召回所有残部。' },
  { at: 0.60, title: '第四章 // 深潜', text: '常规补给断绝，流动商人成了唯一的装备来源。' },
  { at: 0.80, title: '第五章 // 临界', text: '敌方核心开始超载，战场的物理规则正在被改写。' },
  { at: 0.96, title: '终章 // 黎明协议', text: '最后一道防线。摧毁守望者，结束这场没有尽头的夜。' },
];
export { DIFFICULTY, MISSIONS, CHAPTERS };

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
  { id: 'frostbite', name: '冰封猎场', desc: '累计击毁 15 个处于减速状态的敌人' },
  { id: 'falconer', name: '隼猎者', desc: '单局击毁 8 只游隼突袭者' },
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
  { id: 'cryo', icon: '❄', type: 'FIREPOWER', name: '极寒增幅', description: '寒霜减速时间延长 60%，减速强度提升至 65%。', apply: (g) => { g.player.frostDuration = (g.player.frostDuration || 1) * 1.6; g.player.frostSlow = (g.player.frostSlow || 1) * 0.65; } },
  { id: 'frostfield', icon: '✲', type: 'ABILITY', name: '冰封脉冲', description: '电磁脉冲范围内的敌人被减速 60%，持续 2.5 秒。', apply: (g) => { g.player.frostPulse = true; } },
];

/**
 * 每波免费基础强化（土豆兄弟式）：三选一、不花钱，但每次刷新货架需要花信用点。
 * 这些是基础属性的小幅永久增益，与战后的肉鸽模块（UPGRADES）区分开。
 */
const BASE_UPGRADES = [
  { id: 'b-health', icon: '✚', name: '强化骨架', desc: '最大生命 +20。', apply: (g) => { g.player.maxHealth += 20; g.player.health += 20; } },
  { id: 'b-shield', icon: '◇', name: '电容矩阵', desc: '最大护盾 +15。', apply: (g) => { g.player.maxShield += 15; g.player.shield += 15; } },
  { id: 'b-damage', icon: '↟', name: '过热膛线', desc: '全武器伤害 +7%。', apply: (g) => { g.player.damageMultiplier *= 1.07; } },
  { id: 'b-firerate', icon: '≫', name: '高速循环', desc: '射速 +7%。', apply: (g) => { g.player.fireRateMultiplier *= 1.07; } },
  { id: 'b-speed', icon: '⌁', name: '伺服腿组', desc: '移动速度 +5%。', apply: (g) => { g.player.speedMultiplier *= 1.05; } },
  { id: 'b-crit', icon: '✦', name: '弱点解析', desc: '暴击率 +4%。', apply: (g) => { g.player.critChance += 0.04; } },
  { id: 'b-critdmg', icon: '✷', name: '暴击回路', desc: '暴击伤害 +12%。', apply: (g) => { g.player.critMultiplier += 0.12; } },
  { id: 'b-ammo', icon: '▤', name: '扩容弹匣', desc: '弹药容量 +10%。', apply: (g) => { g.player.ammoMultiplier *= 1.1; } },
  { id: 'b-reload', icon: '↻', name: '急速装填', desc: '装填速度 +8%。', apply: (g) => { g.player.reloadMultiplier *= 1.08; } },
  { id: 'b-pulse', icon: '◎', name: '脉冲核心', desc: '脉冲伤害 +10 / 半径 +1。', apply: (g) => { g.player.pulseDamage += 10; g.player.pulseRadius += 1; } },
  { id: 'b-execute', icon: '⌖', name: '处决协议', desc: '处决加成 +8%。', apply: (g) => { g.player.executeBonus += 0.08; } },
  { id: 'b-pickup', icon: '⊙', name: '拾取场', desc: '拾取范围 +0.2。', apply: (g) => { g.player.pickupRadius += 0.2; } },
];

/** 货架上的付费武器附件 / 战术模块（稀有度按波次解锁，模仿土豆兄弟分层）。 */
const SHOP_MODS = [
  { id: 'm-mag', icon: '▤', name: '扩容弹匣', rarity: 1, price: 140, desc: '全武器弹药容量 +15%。', apply: (g) => { g.player.ammoMultiplier *= 1.15; } },
  { id: 'm-grip', icon: '≫', name: '稳定握把', rarity: 1, price: 160, desc: '射速 +10%。', apply: (g) => { g.player.fireRateMultiplier *= 1.1; } },
  { id: 'm-spring', icon: '↻', name: '高速弹簧', rarity: 1, price: 150, desc: '装填速度 +18%。', apply: (g) => { g.player.reloadMultiplier *= 1.18; } },
  { id: 'm-barrel', icon: '↟', name: '精密枪管', rarity: 2, price: 190, desc: '全武器伤害 +12%。', apply: (g) => { g.player.damageMultiplier *= 1.12; } },
  { id: 'm-ammo', icon: '✦', name: '穿甲弹头', rarity: 2, price: 210, desc: '暴击率 +6%。', apply: (g) => { g.player.critChance += 0.06; } },
  { id: 'm-over', icon: 'ϟ', name: '过载膛线', rarity: 3, price: 280, desc: '伤害 +25%（射速 -5%）。', apply: (g) => { g.player.damageMultiplier *= 1.25; g.player.fireRateMultiplier *= 0.95; } },
  { id: 'm-crit', icon: '✷', name: '暴击核心', rarity: 4, price: 320, desc: '暴击伤害 +25%。', apply: (g) => { g.player.critMultiplier += 0.25; } },
];

/** 稀有度解锁波次：1 常驻，2 自第 2 波，3 自第 4 波，4 自第 8 波。 */
const MOD_RARITY_UNLOCK = { 1: 0, 2: 2, 3: 4, 4: 8 };

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
    this.losRay = new THREE.Raycaster();   // 独立于开火射线：视线 / 遮挡判定专用
    this.missStreak = 0;                    // 连续落空计数：驱动宽容命中补偿
    this.state = 'menu';
    this.mode = 'campaign';
    this.keys = {};
    this.firing = false;
    this.aiming = false;
    this.shotThisHold = false;
    this.yaw = 0;
    this.pitch = 0;
    this.cheats = { god: false, ammo: false, lock: false, auto: false, wall: false, slow: false };
    this.aimTarget = null;
    this.aimHoldTimer = 0;                  // 目标粘滞计时：自动瞄准不来回乱跳
    this.hitStop = 0;                       // 命中顿帧（绝区零式打击反馈）
    this.cheatBuffer = '';
    this.konami = [];
    this.cheatToastTimer = 0;
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
    this.freePickIndex = -1;
    this.difficulty = DIFFICULTY.standard;
    this.clearedContent = localStorage.getItem('nexus-cleared') === '1';  // 通关基础 10 波后解锁的内容
    this.mission = null;
    this.missionBonus = 1;
    this.shopDiscount = 1;
    this.fieldVendor = null;
    this.waveTimeLeft = 0;
    this.fieldEvent = null;
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
    // 第一人称手臂 / 护手：视图模型不再是一把「悬空的枪」。
    const hands = new THREE.Group();
    const glove = new THREE.MeshStandardMaterial({ color: 0x18292f, metalness: 0.55, roughness: 0.62 });
    const armor = new THREE.MeshStandardMaterial({ color: 0x2c4b48, metalness: 0.82, roughness: 0.34, emissive: 0x0e2b26, emissiveIntensity: 0.5 });
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.105, 0.52, 8), glove);
    forearm.rotation.set(Math.PI / 2.45, 0, -0.25);
    forearm.position.set(0.19, -0.3, 0.16);
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.09, 8), armor);
    cuff.rotation.copy(forearm.rotation);
    cuff.position.set(0.23, -0.21, 0.02);
    const support = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.38, 8), glove);
    support.rotation.set(Math.PI / 2.2, 0, 0.42);
    support.position.set(-0.16, -0.26, -0.3);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.19), armor);
    plate.position.set(-0.13, -0.16, -0.36);
    hands.add(forearm, cuff, support, plate);
    hands.traverse((child) => { child.renderOrder = 10; child.frustumCulled = false; });
    this.weaponRoot.add(hands);
    this.viewHands = hands;
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
    this.currentScopeType = model.scopeType || 'reddot';
    this.scopeReticle = model.reticle || null;
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
    // 瞄具：镜身随瞄准微降；红点随瞄准增亮；倍率镜分划十字随瞄准显形
    if (parts.optics) parts.optics.position.y = lerp(parts.optics.position.y, (parts.redDot ? 0.15 : 0.17) - (this.aimBlend || 0) * 0.035, 1 - Math.exp(-dt * 10));
    if (parts.redDot) {
      parts.redDot.scale.setScalar(0.8 + (this.aimBlend || 0) * 0.8);
      parts.redDot.material.color.setHex(this.aimBlend > 0.45 ? 0xff2038 : 0xa83344);
    }
    if (this.scopeReticle) this.scopeReticle.visible = this.aimBlend > 0.25;
  }

  resetPlayer() {
    this.player = {
      position: new THREE.Vector3(0, 1.7, 22), velocity: new THREE.Vector3(), health: 100, maxHealth: 100, shield: 50, maxShield: 50,
      damageMultiplier: 1, fireRateMultiplier: 1, reloadMultiplier: 1, speedMultiplier: 1, ammoMultiplier: 1,
      dashCooldown: 0, dashMax: 5, dashTime: 0, dashDuration: 0.19, perfectWindow: 0.13, _perfectUsed: false, invulnerable: 0, pulseCooldown: 0, pulseMax: 12, pulseRadius: 12, pulseDamage: 75,
      shieldRegen: 9, shieldDelay: 4.5, lastDamage: 0, killHeal: 0,
      jumpY: 0, jumpVel: 0, grounded: true, slideTime: 0, slideCooldown: 0, slideDir: null,
      critChance: 0.08, critMultiplier: 1.75, executeBonus: 1, executeThreshold: 0.35,
      energy: 0, energyMax: 100, energyGain: 1, overdrive: 0, overdriveMax: 8,
      chainBonus: 0, chainDamage: 1, pickupRadius: 1.45, pickupPower: 1, dashWave: 0,
    };
    this.weaponState = WEAPONS.map((weapon) => ({ ammo: weapon.magazine, reserve: weapon.reserve }));
    this.loadout = [0];          // 已持有的武器（WEAPONS 绝对索引），最多 6 把对应 HUD 槽 1–6
    this.credits = 0;            // 战后商店货币，与积分纪录互不影响
    this.currentShop = [];
    this.weaponIndex = 0;
    this.unlockedWeapon = 0;
    this.weaponCooldown = 0;
    this.reloadTimer = 0;
    this.switchTimer = 0;
    this.score = 0;
    this.kills = 0;
    this.falconKills = 0;
    this.frostKills = 0;
    this.shotsFired = 0;
    this.shotsHit = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.wave = 0;
    this.currentChapter = -1;
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
    this.aimBlend = 0;
    this.sniperZoom = 6;
    this.scopeLevels = [3, 6, 10];
    this.sprintBlend = 0;
    this.slideBlend = 0;
    this.landKick = 0;
    this.hitCombo = 0;
    this.hitComboTimer = 0;
    this.hitStop = 0;
    this.slowmo = 0;
    this.mission = null;
    this.missionBonus = 1;
    this.shopDiscount = 1;
    this.waveTimeLeft = 0;
    this.fieldEvent = null;
  }

  clearDynamicObjects() {
    [...this.enemies, ...this.projectiles, ...this.pickups, ...this.particles, ...this.tracers, ...this.effects].forEach((item) => {
      const object = item.group || item.mesh || item.line;
      if (object) this.scene.remove(object);
    });
    this.enemies = [];
    this.enemyHitMeshes = [];
    this.xrayState = false;      // 新一局的敌人材质需要重新按透视状态初始化
    this.aimTarget = null;
    this.missStreak = 0;
    this.projectiles = [];
    this.pickups = [];
    this.particles = [];
    this.tracers = [];
    this.effects = [];
    this.spawnQueue = [];
    if (this.fieldVendor) { this.fieldVendor.group.removeFromParent(); this.fieldVendor = null; }
    const interact = document.getElementById('interact-toast');
    if (interact) interact.classList.remove('show');
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

  start(mode = 'campaign', difficultyId = 'standard', startWeapon = 0) {
    this.audio.init();
    this.runId = (this.runId || 0) + 1;
    this.clearDynamicObjects();
    this.resetPlayer();
    const initial = Number.isInteger(startWeapon) && startWeapon >= 0 && startWeapon < WEAPONS.length ? startWeapon : 0;
    this.loadout = [initial];
    this.weaponIndex = initial;
    this.unlockedWeapon = initial;
    this.mode = mode;
    this.difficulty = DIFFICULTY[difficultyId] || DIFFICULTY.standard;
    this.waveTimeLeft = mode === 'gauntlet' ? 45 : 0;
    this.firing = false;
    this.aiming = false;
    this.touchMove = { x: 0, y: 0 };
    this.state = 'playing';
    this.weaponRoot.visible = true;
    this.buildWeaponModel(this.weaponIndex);
    this.camera.position.copy(this.player.position);
    this.camera.rotation.set(0, 0, 0);
    this.callbacks.onState('playing');
    this.callbacks.onAnnounce(mode === 'training' ? '模拟训练' : '神经链接建立', mode === 'training' ? `敌方伤害已关闭 · 熟悉你的武器 · ${this.difficulty.label}难度` : `准备迎击第一波敌对单位 · ${this.difficulty.label}难度`, 'TACTICAL LINK / CONNECTED', 2400);
    this.nextWaveTimer = 2.2;
    this.intermission = true;
    this.requestLock();
    this.updateHUD(true);
    if (this.isBoard) this.callbacks.onToast?.('白板课堂模式 // 左下角「移动 / MOVE」圆形摇杆移动 · 右侧滑动瞄准 · 右下 FIRE 开火 · 可开启 AUTO 自动演示', 5200);
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
      if (event.code === 'Space') { event.preventDefault?.(); this.jump(); }
      if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'KeyC') this.slide();
      if (event.code === 'KeyF') this.activateOverdrive();
      // 数字键 1–6 对应当前 loadout 的六个槽位
      const digit = /^Digit([1-6])$/.exec(event.code);
      if (digit) { const w = this.loadout[Number(digit[1]) - 1]; if (w !== undefined) this.switchWeapon(w); }
      if (event.code === 'KeyG') this.openFieldShop();
      if (event.code === 'KeyP' || (event.code === 'Escape' && !document.pointerLockElement)) {
        if (this.state === 'playing') this.pause();
        else if (this.state === 'paused') this.resume();
      }
      this.handleCheatInput(event);
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
      // 开镜状态下的狙击镜：滚轮调节倍率，不再切枪
      if (this.aiming && this.currentScopeType === 'sniper') { this.cycleScope(); return; }
      const direction = event.deltaY > 0 ? 1 : -1;
      const total = this.loadout.length;
      if (total < 2) return;
      const pos = Math.max(0, this.loadout.indexOf(this.weaponIndex));
      this.switchWeapon(this.loadout[(pos + direction + total) % total]);
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
      stick.classList.add('engaged');
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
      stick.classList.remove('engaged');
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
    bindButton('mobile-switch', () => {
      const total = this.loadout.length;
      const pos = Math.max(0, this.loadout.indexOf(this.weaponIndex));
      this.switchWeapon(this.loadout[(pos + 1) % total]);
    });
    bindButton('mobile-jump', () => this.jump());
    bindButton('mobile-slide', () => this.slide());
    bindButton('mobile-overdrive', () => this.activateOverdrive());
    bindButton('mobile-aim', () => { this.aiming = !this.aiming; document.getElementById('mobile-aim')?.classList.toggle('active', this.aiming); });
    bindButton('mobile-scope', () => this.cycleScope());
    bindButton('mobile-cheat', () => this.toggleCheatConsole());
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
    this.assignMission();
    if (this.mode === 'gauntlet') this.waveTimeLeft = 45;
    // 章节剧情：按战役进度里程碑触发，确保所有难度都能看到完整故事线
    const chapterTotal = (this.mode === 'campaign' || this.mode === 'gauntlet') ? this.difficulty.waves : 0;
    let chapterIdx = -1;
    if (chapterTotal > 0) {
      chapterIdx = CHAPTERS.reduce((acc, c, i) => (this.wave >= Math.ceil(c.at * chapterTotal) ? i : acc), -1);
    } else if (this.mode === 'endless') {
      chapterIdx = Math.min(CHAPTERS.length - 1, Math.floor((this.wave - 1) / 5));
    } else if (this.wave === 1) {
      chapterIdx = 0;
    }
    if (chapterIdx >= 0 && chapterIdx !== this.currentChapter) {
      this.currentChapter = chapterIdx;
      this.callbacks.onStory?.(CHAPTERS[chapterIdx]);
    }
    // 流动商人在第 3 / 6 / 9 波固定出现；通关后每 5 波额外投放
    if (this.wave === 3 || this.wave === 6 || this.wave === 9 || (this.clearedContent && this.wave % 5 === 0)) this.spawnFieldVendor();
    const diff = this.difficulty;
    const campaignBoss = (this.mode === 'campaign' || this.mode === 'gauntlet') && this.wave === this.difficulty.waves;
    const endlessBoss = this.mode === 'endless' && this.wave % 5 === 0;
    if (campaignBoss || endlessBoss) {
      this.spawnQueue.push('boss');
      const minions = Math.min(10, Math.ceil((2 + Math.floor(this.wave / 2)) * diff.spawn));
      const escort = ['runner', 'drone', 'phantom', 'bomber', 'tank', 'turret', 'medic'];
      for (let i = 0; i < minions; i++) this.spawnQueue.push(escort[Math.floor(Math.random() * escort.length)]);
      this.callbacks.onAnnounce('守望者降临', '摧毁核心装甲 · 注意范围攻击与自毁单位', 'WARNING / APEX SIGNAL', 3200);
    } else {
      const base = this.mode === 'training' ? Math.min(10, 4 + this.wave) : Math.min(30, 4 + this.wave * 2);
      const count = Math.max(3, Math.round(base * diff.spawn)) + (this.eliteWave || 0);
      this.eliteWave = 0;
      const pool = ['runner'];
      if (this.wave >= 2) pool.push('drone', 'drone');
      if (this.wave >= 3) pool.push('phantom');
      if (this.wave >= 4) pool.push('tank', 'turret');
      if (this.wave >= 5) pool.push('bomber', 'medic');
      if (this.wave >= 6) pool.push('falcon', 'falcon');
      for (let i = 0; i < count; i++) this.spawnQueue.push(pool[Math.floor(Math.random() * pool.length)]);
      this.callbacks.onAnnounce(`第 ${String(this.wave).padStart(2, '0')} 波`, this.wave === 1 ? '敌对信号接近 · 清除所有单位' : '威胁等级上升 · 保持移动', 'HOSTILE SIGNALS DETECTED');
    }
    // 每两波免费配发一把尚未持有的武器；商店可提前购买任意武器
    if (this.wave >= 2 && this.wave % 2 === 0 && this.loadout.length < 6) {
      const free = WEAPONS.findIndex((_, i) => !this.loadout.includes(i));
      if (free >= 0) this.unlockWeapon(free);
    }
    this.spawnTimer = 0.4;
    this.audio.wave();
  }

  unlockWeapon(index) {
    if (!this.loadout.includes(index)) this.loadout.push(index);
    this.loadout.sort((a, b) => a - b);
    this.unlockedWeapon = Math.max(this.unlockedWeapon, index);
    this.weaponState[index].ammo = WEAPONS[index].magazine;
    this.weaponState[index].reserve = WEAPONS[index].reserve;
    this.callbacks.onToast(`武器已解锁 // ${WEAPONS[index].name} · 按 ${this.loadout.indexOf(index) + 1} 切换`, 3500);
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
      speed: data.speed * (1 + Math.min(0.45, this.wave * 0.018)), damage: data.damage * (1 + this.wave * 0.022) * diff.damage, score: Math.round(data.score * diff.score),
      radius: data.radius, name: data.name, attackCooldown: random(0.4, 1.3), spawnTime: 0.85, dead: false, deathTimer: 0,
      strafe: Math.random() > 0.5 ? 1 : -1, phase: Math.random() * Math.PI * 2, hitTimer: 0, healthBar: null, barFill: null,
      phased: false, phaseTimer: random(1.4, 2.8), fuse: 0, chargeTimer: 0, healTimer: 0, slow: 0,
      parts: model.dynamic, height: model.height, baseY: model.baseY, weakpoints: model.weakpoints,
    };
    enemy.maxHealth = enemy.health;
    // 绝区零式「失衡槽」：命中累积失衡值，满槽触发破防（定身 + 受伤加成 + 连携窗口）
    enemy.stagger = 0;
    enemy.staggerMax = Math.max(14, enemy.maxHealth * (type === 'boss' ? 0.5 : 0.42));
    enemy.broken = false;
    enemy.brokenTimer = 0;
    enemy.glitchPhase = Math.random() * Math.PI * 2;
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
    // 血条默认受墙体深度遮挡；只有 X-RAY 开启时由 applyXray 切换为穿墙显示。
    const barBack = new THREE.Mesh(new THREE.PlaneGeometry(barWidth, 0.085), new THREE.MeshBasicMaterial({ color: 0x101818, transparent: true, opacity: 0.85, depthTest: true }));
    const barFill = new THREE.Mesh(new THREE.PlaneGeometry(barWidth, 0.055), new THREE.MeshBasicMaterial({ color: data.color, depthTest: true }));
    barFill.position.z = 0.005;
    barGroup.add(barBack, barFill);
    // 失衡槽：位于血条下方，命中累积；阈值附近转红预示即将破防
    const staggerBack = new THREE.Mesh(new THREE.PlaneGeometry(barWidth, 0.042), new THREE.MeshBasicMaterial({ color: 0x101818, transparent: true, opacity: 0.85, depthTest: true }));
    staggerBack.position.y = -0.13;
    const staggerFill = new THREE.Mesh(new THREE.PlaneGeometry(barWidth, 0.03), new THREE.MeshBasicMaterial({ color: 0x54f7d2, depthTest: true }));
    staggerFill.position.set(0, -0.13, 0.005);
    barGroup.add(staggerBack, staggerFill);
    barGroup.position.y = enemy.height + 0.35;
    barGroup.visible = type === 'boss';
    group.add(barGroup);
    enemy.healthBar = barGroup;
    enemy.barFill = barFill;
    enemy.barHalf = barWidth / 2;
    enemy.staggerFill = staggerFill;
    enemy.staggerHalf = barWidth / 2;
    // 怪物细化：脚下能量光环 + 头顶缓旋装甲环，让轮廓与阵营色更清晰（不参与射线命中）
    const haloMaterial = new THREE.MeshBasicMaterial({ color: data.color, transparent: true, opacity: 0.46, toneMapped: false, depthWrite: false });
    const halo = new THREE.Mesh(new THREE.TorusGeometry(enemy.radius * 1.2, 0.026, 5, 24), haloMaterial);
    halo.rotation.x = -Math.PI / 2;
    halo.position.y = 0.06;
    const crown = new THREE.Mesh(new THREE.TorusGeometry(0.2 + enemy.height * 0.15, 0.016, 5, 20), haloMaterial.clone());
    crown.position.y = enemy.height * 0.84;
    crown.rotation.x = Math.PI / 2.6;
    group.add(halo, crown);
    enemy.crown = crown;
    enemy.halo = halo;
    group.scale.setScalar(0.02);
    this.scene.add(group);
    this.enemies.push(enemy);
    this.spawnParticles(point.clone().add(new THREE.Vector3(0, 1.4, 0)), data.color, type === 'boss' ? 35 : 12, 3.5);
  }

  updateEnemies(dt) {
    const playerFlat = new THREE.Vector3(this.player.position.x, 0, this.player.position.z);
    for (const enemy of this.enemies) {
      if (enemy.crown) enemy.crown.rotation.z += dt * 1.3;
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
      // —— 失衡 / 破防态：定身 + 故障闪烁，期间受到伤害 +60%，并展示失衡槽 ——
      if (enemy.broken) {
        enemy.brokenTimer -= dt;
        enemy.material.emissiveIntensity = 1.3 + Math.sin(this.elapsed * 26 + enemy.glitchPhase) * 1.9;
        enemy.group.scale.setScalar(1 + Math.sin(this.elapsed * 30 + enemy.glitchPhase) * 0.03);
        if (enemy.brokenTimer <= 0) { enemy.broken = false; enemy.stagger = 0; enemy.group.scale.setScalar(1); enemy.material.emissiveIntensity = enemy.type === 'boss' ? 1.0 : 0.8; }
      }
      // 失衡槽渲染：随命中累积，逼近阈值转红，破防时隐藏
      if (enemy.staggerFill) {
        const showBar = enemy.type === 'boss' || enemy.health < enemy.maxHealth || (enemy.stagger > 0 && !enemy.broken);
        enemy.healthBar.visible = showBar;
        if (showBar) {
          const sr = clamp(enemy.stagger / enemy.staggerMax, 0, 1);
          enemy.staggerFill.scale.x = sr;
          enemy.staggerFill.position.x = -(1 - sr) * (enemy.staggerHalf || 0.6);
          enemy.staggerFill.material.color.setHex(sr > 0.72 ? 0xff4d6d : 0x54f7d2);
        }
      }
      if (enemy.broken) { enemy.healthBar.quaternion.copy(this.camera.quaternion); continue; }
      const toPlayer = playerFlat.clone().sub(new THREE.Vector3(enemy.group.position.x, 0, enemy.group.position.z));
      const distance = toPlayer.length();
      toPlayer.normalize();
      enemy.group.rotation.y = Math.atan2(toPlayer.x, toPlayer.z) + Math.PI;
      enemy.attackCooldown -= dt;
      let move = new THREE.Vector3();
      if (enemy.type === 'runner' || enemy.type === 'phantom' || enemy.type === 'falcon') {
        if (distance > 1.45) move.copy(toPlayer);
        if (distance < 1.85 && enemy.attackCooldown <= 0) {
          this.damagePlayer(enemy.damage, enemy.group.position);
          enemy.attackCooldown = enemy.type === 'phantom' ? 0.85 : enemy.type === 'falcon' ? 1.1 : 1.0;
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
            if (ally.group.position.distanceTo(enemy.group.position) > 11) continue;
            const missing = ally.maxHealth - ally.health;
            // 只治疗仍有明显伤势（低于 70% 生命）的友军，避免把满血敌人堆成“打不死”的墙。
            if (ally.health > ally.maxHealth * 0.7) continue;
            if (missing > bestMissing) { bestMissing = missing; bestAlly = ally; }
          }
          if (bestAlly) {
            bestAlly.health = Math.min(bestAlly.maxHealth, bestAlly.health + 14);
            if (bestAlly.barFill && bestAlly.healthBar.visible) {
              const ratio = clamp(bestAlly.health / bestAlly.maxHealth, 0, 1);
              bestAlly.barFill.scale.x = ratio;
              bestAlly.barFill.position.x = -(1 - ratio) * (bestAlly.barHalf || 0.6);
            }
            this.createHealBeam(enemy.group.position.clone().add(new THREE.Vector3(0, 1.4, 0)), bestAlly.group.position.clone().add(new THREE.Vector3(0, (bestAlly.height || 2) * 0.55, 0)));
            enemy.healTimer = 0.9;
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
        const slowFactor = enemy.slow > 0 ? (enemy.slowMul || 0.5) : 1; // 被寒霜命中后减速
        move.normalize().multiplyScalar(enemy.speed * slowFactor * dt);
        this.moveEnemy(enemy, move);
      }
      if (enemy.slow > 0) {
        enemy.slow -= dt;
        // 减速视觉：核心发光维持冷蓝
        enemy.material.emissiveIntensity = Math.max(enemy.material.emissiveIntensity || 0, 1.1);
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
      if (enemy.group.position.distanceTo(center) < 5.5 && this.blastReaches(center, enemy)) {
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
        const prev = projectile.mesh.position.clone();
        projectile.mesh.position.addScaledVector(projectile.velocity, dt);
        projectile.mesh.rotation.x += dt * 14;
        const tunnelled = this.segmentBlocked(prev, projectile.mesh.position);
        if (tunnelled) projectile.mesh.position.copy(prev);
        let struck = null;
        for (const enemy of this.enemies) {
          if (enemy.dead || enemy.phased) continue;
          if (enemy.group.position.distanceTo(projectile.mesh.position) < enemy.radius + 0.9) { struck = enemy; break; }
        }
        const hitWall = tunnelled || this.collides(projectile.mesh.position.x, projectile.mesh.position.z, 0.2)
          || Math.abs(projectile.mesh.position.x) > 70 || Math.abs(projectile.mesh.position.z) > 70;
        if (struck || hitWall || projectile.life <= 0) {
          this.explodeRocket(projectile);
          projectile.life = 0;
        }
        if (projectile.life <= 0) { this.scene.remove(projectile.mesh); projectile.remove = true; }
        continue;
      }
      const prev = projectile.mesh.position.clone();
      projectile.mesh.position.addScaledVector(projectile.velocity, dt);
      projectile.mesh.rotation.x += dt * 8;
      const position = projectile.mesh.position;
      // 防隧穿：一帧内跨过墙体时回退到墙前，敌方弹丸不再「穿墙打人」。
      const tunnelled = this.segmentBlocked(prev, position);
      if (tunnelled) { position.copy(prev); projectile.life = 0; }
      if (!tunnelled && position.distanceTo(this.player.position) < 0.65) {
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

    // —— 动作状态：跳跃 / 滑铲 / 跑动 / 瞄准，全部平滑插值，避免姿态突变 ——
    const p = player;
    if (!p.grounded) {
      p.jumpVel -= 21 * dt;
      p.jumpY += p.jumpVel * dt;
      if (p.jumpY <= 0) { p.jumpY = 0; p.jumpVel = 0; p.grounded = true; this.landKick = 0.45; }
    }
    this.landKick = Math.max(0, this.landKick - dt * 2.2);
    if (p.slideTime > 0) p.slideTime -= dt;
    p.slideCooldown = Math.max(0, p.slideCooldown - dt);
    const sliding = p.slideTime > 0;
    this.sprintBlend = lerp(this.sprintBlend, sprinting ? 1 : 0, 1 - Math.exp(-dt * 8));
    this.slideBlend = lerp(this.slideBlend, sliding ? 1 : 0, 1 - Math.exp(-dt * 12));
    this.aimBlend = lerp(this.aimBlend, this.aiming ? 1 : 0, 1 - Math.exp(-dt * 11));
    if (this.hitComboTimer > 0) { this.hitComboTimer -= dt; if (this.hitComboTimer <= 0) this.hitCombo = 0; }

    let speed = 6.6 * player.speedMultiplier * (1 + this.sprintBlend * 0.5)
      * (1 - this.aimBlend * 0.28) * (player.overdrive > 0 ? 1.2 : 1) * (sliding ? 1.35 : 1);
    if (sliding && p.slideDir) move.copy(p.slideDir);
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
    const bob = moving ? Math.sin(this.elapsed * (sprinting ? 14 : 10)) * (0.025 + this.sprintBlend * 0.02) * (1 - this.slideBlend * 0.6) : 0;
    // 跳跃抬高视角 / 滑铲压低视角；player.position.y 恒为 1.7，敌人瞄准与命中判定不受影响
    const eyeHeight = 1.7 + p.jumpY - this.slideBlend * 0.72 - this.landKick * 0.12;
    this.camera.position.set(player.position.x, eyeHeight + bob, player.position.z);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt * 2.5);
      this.camera.position.x += random(-1, 1) * this.shake * 0.08;
      this.camera.position.y += random(-1, 1) * this.shake * 0.08;
    }
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    const baseFov = 72 + this.sprintBlend * 6 + this.slideBlend * 8;
    // 瞄具决定开镜倍率：红点 1.25x，3 倍镜 3x，5 倍镜 5x，狙击镜可调（默认 6x）
    const scopeZoom = this.currentScopeType === 'sniper' ? this.sniperZoom
      : this.currentScopeType === 'scope5' ? 5
        : this.currentScopeType === 'scope3' ? 3
          : 1.25;
    const targetFov = lerp(baseFov, Math.max(16, baseFov / scopeZoom), this.aimBlend);
    this.camera.fov = lerp(this.camera.fov, targetFov, 1 - Math.exp(-dt * 10));
    this.camera.updateProjectionMatrix();
    this.weaponRecoil = lerp(this.weaponRecoil, 0, 1 - Math.exp(-dt * 13));
    this.updateWeaponParts(dt);
    if (this.isBoard && this.weaponState[this.weaponIndex].ammo === 0 && !player.overdrive && this.reloadTimer <= 0) this.reload();
    this.updateDemoAim(dt);
    const portraitTouch = this.isTouch && innerHeight > innerWidth;
    const restX = lerp(portraitTouch ? 0.17 : 0.36, 0, this.aimBlend);
    const restY = lerp(portraitTouch ? -0.28 : -0.31, -0.20, this.aimBlend);
    const gait = this.elapsed * (6 + this.sprintBlend * 3);
    const swayX = moving ? Math.sin(gait) * (0.012 + this.sprintBlend * 0.024) * (1 - this.aimBlend) : 0;
    const swayY = moving ? Math.abs(Math.cos(gait)) * (0.008 + this.sprintBlend * 0.02) * (1 - this.aimBlend) : 0;
    // 跑步武器下沉、滑铲自然倾斜下压、瞄准时收敛到视线中心
    const runDip = this.sprintBlend * 0.11 * (1 - this.aimBlend);
    const slideDip = this.slideBlend * 0.16;
    this.weaponRoot.position.x = lerp(this.weaponRoot.position.x, restX + swayX, 1 - Math.exp(-dt * 12));
    this.weaponRoot.position.y = lerp(this.weaponRoot.position.y, restY + bob * 0.6 - runDip - slideDip + swayY, 1 - Math.exp(-dt * 12));
    this.weaponRoot.position.z = -0.62 + this.weaponRecoil * 0.13 + this.aimBlend * 0.08;
    this.weaponRoot.rotation.x = this.weaponRecoil * 0.1 + (this.reloadTimer > 0 ? Math.sin(this.reloadTimer * 4) * 0.35 : 0)
      + this.sprintBlend * 0.2 * (1 - this.aimBlend) + this.slideBlend * 0.3;
    this.weaponRoot.rotation.y = this.slideBlend * 0.12;
    this.weaponRoot.rotation.z = (moving ? Math.sin(this.elapsed * 5) * 0.012 : 0) + this.sprintBlend * 0.05 + this.slideBlend * 0.16;
    const redDot = document.getElementById('red-dot');
    if (redDot) redDot.style.opacity = String(this.aimBlend);
    if (this.viewHands) this.viewHands.position.y = lerp(this.viewHands.position.y, -this.slideBlend * 0.1 - this.sprintBlend * 0.04, 1 - Math.exp(-dt * 10));
    if (this.firing && (WEAPONS[this.weaponIndex].auto || this.cheats.auto || !this.shotThisHold)) this.fireWeapon();
    if (this.comboTimer > 0) this.comboTimer -= dt;
    else this.combo = lerp(this.combo, 1, dt * 3);
  }

  /** 课堂演示：自动锁定最近的敌人并持续开火，方便在白板上无键盘展示。 */
  pickDemoTarget(origin) {
    let best = null;
    let bestDistance = Infinity;
    const aim = new THREE.Vector3();
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.phased) continue;
      this.getAimPoint(enemy, aim);
      if (!this.hasLineOfSight(origin, aim)) continue;
      const distance = aim.distanceTo(origin);
      if (distance < bestDistance) { bestDistance = distance; best = aim.clone(); }
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

  // ===== 越界协议 // OVERBOUND 作弊系统 =====

  /** 处理键盘输入的作弊密语与科乐美主开关。 */
  handleCheatInput(event) {
    if (event.code === 'Backquote') { event.preventDefault?.(); this.toggleCheatConsole(); return; }
    const ch = event.key;
    if (ch && ch.length === 1 && /[a-zA-Z]/.test(ch)) {
      this.cheatBuffer = (this.cheatBuffer + ch.toLowerCase()).slice(-26);
      for (const code in CHEAT_CODES) {
        if (this.cheatBuffer.endsWith(code)) { this.applyCheat(code); this.cheatBuffer = ''; break; }
      }
    }
    this.konami.push(event.code);
    if (this.konami.length > 12) this.konami.shift();
    if (this.konami.slice(-KONAMI.length).join(',') === KONAMI.join(',')) {
      this.konami = [];
      this.toggleCheatConsole(true);
      this.cheatToast('作弊码清单已展开 // ↑↑↓↓←→←→BA 或输入 HELP');
    }
  }

  /** 执行一条作弊密语。 */
  applyCheat(code) {
    const action = CHEAT_CODES[code];
    if (!action) return;
    if (action === 'help') { this.toggleCheatConsole(true); this.cheatToast(CHEAT_LABELS.help); return; }
    if (action === 'purge') { this.cheatPurge(); this.cheatToast(CHEAT_LABELS.purge + ' 已执行'); return; }
    if (action === 'arsenal') { this.loadout = WEAPONS.map((_, i) => i); this.unlockedWeapon = WEAPONS.length - 1; this.updateHUD(true); this.cheatToast(CHEAT_LABELS.arsenal); this.refreshCheatBadge(); return; }
    if (action === 'recharge') { this.cheatRecharge(); this.cheatToast(CHEAT_LABELS.recharge); this.refreshCheatBadge(); return; }
    if (action === 'overbound') { Object.keys(this.cheats).forEach((k) => { this.cheats[k] = true; }); this.cheatToast(CHEAT_LABELS.overbound); this.refreshCheatBadge(); this.refreshCheatButtons(); return; }
    if (action === 'standdown') { Object.keys(this.cheats).forEach((k) => { this.cheats[k] = false; }); this.firing = false; this.aimTarget = null; this.updateLockReticle(null); this.cheatToast(CHEAT_LABELS.standdown); this.refreshCheatBadge(); this.refreshCheatButtons(); return; }
    const was = this.cheats[action];
    this.cheats[action] = !was;
    if (action === 'auto' && was) this.firing = false;
    if (action === 'lock' && was) { this.aimTarget = null; this.updateLockReticle(null); }
    this.cheatToast((this.cheats[action] ? '已激活 // ' : '已解除 // ') + CHEAT_LABELS[action]);
    this.refreshCheatBadge();
    this.refreshCheatButtons();
  }

  // ===== 统一瞄准基础：瞄头线 / 视线遮挡 / 宽容命中 =====

  /**
   * 所有敌人共用的瞄准点。优先取「头部弱点网格」的世界坐标——它正是射线会命中并
   * 触发暴击的那块网格，所以瞄的地方和命中判定永远一致；悬浮 / 固定 / 首领单位
   * 不再靠 height*0.85 硬猜。出生缩放动画期间回退到按模型高度推算的点。
   */
  getAimPoint(enemy, out = new THREE.Vector3()) {
    const wp = enemy.weakpoints && enemy.weakpoints[0];
    if (wp && enemy.spawnTime <= 0 && enemy.group.scale.x > 0.9) {
      wp.updateWorldMatrix(true, false);
      return wp.getWorldPosition(out);
    }
    const h = enemy.height || 2.2;
    const base = enemy.baseY || 0;
    const p = enemy.group.position;
    return out.set(p.x, p.y + Math.max(base + 0.45, h * 0.7), p.z);
  }

  /** 墙体规则：两点之间是否被实体遮挡体挡住（地面与装饰不参与判定）。 */
  hasLineOfSight(origin, point, pad = 0.4) {
    const dir = point.clone().sub(origin);
    const dist = dir.length();
    if (dist <= pad) return true;
    dir.normalize();
    this.losRay.set(origin, dir);
    this.losRay.far = dist - pad;
    return this.losRay.intersectObjects(this.worldColliders, false).length === 0;
  }

  /** 爆炸 / 冲击波不得穿墙：墙后的敌人不吃 AoE，与子弹使用同一套遮挡规则。 */
  blastReaches(center, enemy) {
    const from = center.clone();
    from.y = Math.max(0.9, from.y + 0.6);
    return this.hasLineOfSight(from, this.getAimPoint(enemy), 0.9);
  }

  /** 一帧位移是否穿过实体墙：高速弹丸的防隧穿判定。 */
  segmentBlocked(from, to, pad = 0.12) {
    const dir = to.clone().sub(from);
    const dist = dir.length();
    if (dist <= pad) return false;
    dir.normalize();
    this.losRay.set(from, dir);
    this.losRay.far = dist;
    return this.losRay.intersectObjects(this.worldColliders, false).length > 0;
  }

  /** 宽容命中：射线擦身而过时，按统一瞄点到射线的垂直距离做球形补偿。 */
  findTolerantHit(origin, direction, wallDistance) {
    let best = null;
    let bestAlong = Infinity;
    const aim = new THREE.Vector3();
    const v = new THREE.Vector3();
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.phased || enemy.spawnTime > 0) continue;
      this.getAimPoint(enemy, aim);
      v.copy(aim).sub(origin);
      const along = v.dot(direction);
      if (along <= 0 || along > wallDistance) continue;
      const perpendicular = v.addScaledVector(direction, -along).length();
      // 仅保留很小的命中宽容：子弹必须几乎压在敌人身上才算擦中，
      // 不再随连续落空放大窗口（避免「不开挂也自动锁敌」的强追踪感）。
      const tolerance = (enemy.radius || 0.6) * 0.45 + 0.07;
      if (perpendicular > tolerance) continue;
      if (!this.hasLineOfSight(origin, aim)) continue;
      if (along < bestAlong) { bestAlong = along; best = enemy; }
    }
    return best;
  }

  /**
   * 透视：只有开启 X-RAY 时才让敌人本体与血条穿透墙体；关闭时恢复深度遮挡，
   * 修复「不开透视血条也一直穿墙」的异常。
   */
  applyXray() {
    const on = Boolean(this.cheats.wall);
    if (this.xrayState !== on) {
      this.xrayState = on;
      for (const enemy of this.enemies) {
        enemy.fadeMaterials.forEach((m) => { m.depthTest = !on; m.needsUpdate = true; });
        if (enemy.healthBar) {
          enemy.healthBar.children.forEach((child) => { child.material.depthTest = !on; child.material.needsUpdate = true; });
          enemy.healthBar.renderOrder = on ? 999 : 0;
        }
      }
    }
    for (const enemy of this.enemies) {
      if (enemy.dead || !enemy.healthBar) continue;
      enemy.healthBar.visible = on || enemy.health < enemy.maxHealth;
    }
  }

  /** 锁头 / 自动射击：按距离近→远选靶、视线过滤、同帧同步相机。 */
  updateCheats(dt) {
    const c = this.cheats;
    this.applyXray();
    if (c.lock || c.auto) {
      const origin = this.camera.getWorldPosition(new THREE.Vector3());
      const dir = this.camera.getWorldDirection(new THREE.Vector3());
      const target = this.pickCheatTarget(origin, dir);
      this.aimTarget = target;
      if (target) {
        const head = this.getAimPoint(target);
        const dx = head.x - origin.x, dy = head.y - origin.y, dz = head.z - origin.z;
        const desiredYaw = Math.atan2(-dx, -dz);
        let delta = desiredYaw - this.yaw;
        while (delta > Math.PI) delta -= Math.PI * 2;
        while (delta < -Math.PI) delta += Math.PI * 2;
        this.yaw += delta * Math.min(1, dt * 11);
        const horizontal = Math.hypot(dx, dz);
        this.pitch = lerp(this.pitch, Math.atan2(dy, horizontal), Math.min(1, dt * 11));
        // 同帧同步相机：锁环投影与本帧 fireWeapon 都用最新朝向，不再慢一帧。
        this.camera.rotation.set(this.pitch, this.yaw, 0);
        this.camera.updateMatrixWorld(true);
        if (c.auto) this.firing = true;
      } else if (c.auto) {
        this.firing = false;
      }
      this.updateLockReticle(target);
    } else {
      this.aimTarget = null;
      this.updateLockReticle(null);
    }
    if (this.cheatToastTimer > 0) {
      this.cheatToastTimer -= dt;
      if (this.cheatToastTimer <= 0) { const el = document.getElementById('cheat-toast'); if (el) el.classList.remove('show'); }
    }
  }

  /**
   * 自动瞄准选靶：候选按距离由近到远排序；只有视线通畅的目标才能被锁定；
   * 当前目标仍有效且没有被明显更近的目标取代时保持不变（稳定切换，不来回跳）。
   */
  pickCheatTarget(origin, dir = null) {
    const list = [];
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.phased) continue;
      const aim = this.getAimPoint(enemy);
      const dist = aim.distanceTo(origin);
      if (dist > 95) continue;
      if (!this.hasLineOfSight(origin, aim)) continue;
      const facing = dir ? clamp(dir.dot(aim.clone().sub(origin).normalize()), -1, 1) : 1;
      // 出生动画中的单位也能被锁定（解决「偶尔锁不到」），只是排序优先级略低
      const rank = dist + (enemy.spawnTime > 0 ? 5 : 0) - (facing > 0.3 ? 3 : 0);
      list.push({ enemy, dist, rank });
    }
    list.sort((a, b) => a.rank - b.rank);
    if (!list.length) return null;
    const current = this.aimTarget;
    if (current && !current.dead && !current.phased) {
      const still = list.find((item) => item.enemy === current);
      if (still && (list[0].enemy === current || still.dist <= list[0].dist + 6)) return current;
    }
    return list[0].enemy;
  }

  /** 在锁定目标头部绘制锁环准星。 */
  updateLockReticle(target) {
    const el = document.getElementById('lock-reticle');
    if (!el) return;
    if (!target) { el.classList.remove('show'); return; }
    const v = this.getAimPoint(target).project(this.camera);
    if (v.z > 1) { el.classList.remove('show'); return; }
    el.style.left = `${(v.x * 0.5 + 0.5) * innerWidth}px`;
    el.style.top = `${(-v.y * 0.5 + 0.5) * innerHeight}px`;
    el.classList.add('show');
  }

  /** 清场：秒杀当前所有敌人。 */
  cheatPurge() {
    for (const e of this.enemies) {
      if (e.dead) continue;
      this.damageEnemy(e, 99999, new THREE.Vector3(0, 1, 0), { critical: true, critRoll: true });
    }
    this.spawnParticles(this.camera.getWorldPosition(new THREE.Vector3()), 0xff4d6d, 26, 5);
    this.audio.explosion();
    this.shake = Math.min(1.3, this.shake + 0.5);
  }

  /** 回满：生命 / 护盾 / 能量 / 全部武器弹药。 */
  cheatRecharge() {
    this.player.health = this.player.maxHealth;
    this.player.shield = this.player.maxShield;
    this.player.energy = this.player.energyMax;
    for (let i = 0; i < WEAPONS.length; i++) {
      this.weaponState[i].ammo = WEAPONS[i].magazine;
      this.weaponState[i].reserve = WEAPONS[i].reserve;
    }
    this.updateHUD(true);
  }

  /** 刷新右上角“已激活作弊”徽章。 */
  refreshCheatBadge() {
    const el = document.getElementById('cheat-badge');
    if (!el) return;
    const active = Object.keys(this.cheats).filter((k) => this.cheats[k]);
    if (active.length === 0) { el.classList.remove('show'); return; }
    el.innerHTML = '<b>越界协议 // OVERBOUND</b>' + active.map((k) => `<span>${CHEAT_SHORT[k]}</span>`).join('');
    el.classList.add('show');
  }

  /** 唤醒 / 关闭作弊清单面板（手机无键盘，靠点按开启）。 */
  toggleCheatConsole(force) {
    const el = document.getElementById('cheat-console');
    if (!el) return;
    const show = force !== undefined ? force : !el.classList.contains('active');
    el.classList.toggle('active', show);
    if (show) this.refreshCheatButtons();
  }

  /** 同步作弊面板上的可点按开关高亮状态（键盘 / 点按通用）。 */
  refreshCheatButtons() {
    const root = document.getElementById('cheat-buttons');
    if (!root) return;
    root.querySelectorAll('[data-cheat-key]').forEach((btn) => {
      const key = btn.dataset.cheatKey;
      btn.classList.toggle('active', Boolean(this.cheats[key]));
    });
  }

  /** 顶部作弊提示气泡。 */
  cheatToast(msg) {
    this.cheatToastTimer = 2.4;
    const el = document.getElementById('cheat-toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
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
    // origin / baseDirection 必须早于火箭分支求出：此前火箭分支先引用后声明，会直接抛 ReferenceError。
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const baseDirection = this.camera.getWorldDirection(new THREE.Vector3());
    const infinite = overdrive || this.cheats.ammo;
    if (state.ammo <= 0 && !infinite) {
      this.audio.empty();
      this.weaponCooldown = 0.25;
      this.shotThisHold = true;
      this.reload();
      return;
    }
    if (!infinite) state.ammo -= 1;
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
      let hits = this.raycaster.intersectObjects(this.enemyHitMeshes, false).filter((hit) => {
        const target = hit.object.userData.enemy;
        return target && !target.dead && !target.phased && hit.distance < wallDistance;
      });
      // 命中宽容：子弹有散布偏移、目标在移动，射线常常擦身而过。
      // 用「统一瞄点 + 球形补偿」兜底；连续 4 发落空后窗口再放宽一次，保证不会一直打不中。
      if (!hits.length && !weapon.rocket) {
        const forgiving = this.findTolerantHit(origin, direction, wallDistance);
        if (forgiving) {
          const point = this.getAimPoint(forgiving).clone();
          hits = [{ object: { userData: { enemy: forgiving, critical: Boolean(forgiving.weakpoints?.length) } }, point, distance: origin.distanceTo(point), tolerant: true }];
        }
      }
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
          const critRoll = Math.random() < player.critChance + (weapon.critBonus || 0);
          const amount = weapon.damage * player.damageMultiplier * (overdrive ? 1.5 : 1) * (critical ? 1.65 : 1) * (critRoll ? player.critMultiplier : 1);
          if (this.mission?.id === 'headshot' && hit.object.userData.critical) this.addMissionProgress();
          const killed = this.damageEnemy(enemy, amount, direction, { critical: Boolean(critical || critRoll), critRoll });
          if (weapon.chain) this.chainLightning(enemy, hit.point, amount, weapon.chain + player.chainBonus, new Set(uniqueEnemies));
          if (weapon.frost) {
            enemy.slow = Math.max(enemy.slow || 0, weapon.slowDuration * (player.frostDuration || 1));
            enemy.slowMul = Math.max(0.2, weapon.slowStrength * (player.frostSlow || 1));
            this.spawnParticles(hit.point, 0x9fe8ff, 5, 1.6);
          }
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
      this.missStreak = 0;
      this.shotsHit += 1;
      this.addEnergy(1.4);
      this.audio.hit();
      this.callbacks.onHit(anyKill);
    } else {
      this.missStreak = Math.min(9, this.missStreak + 1);
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
      if (distance < aoe + enemy.radius && this.blastReaches(center, enemy)) {
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
    // 油桶挂在 world（scene 的子节点）下，必须用 removeFromParent 才能正确移除，
    // 直接用 scene.remove 因父节点不是 scene 而失效，导致爆炸后油桶“不消失”。
    barrel.group.removeFromParent();
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
      if (distance < aoe + enemy.radius && this.blastReaches(center, enemy)) {
        if (this.damageEnemy(enemy, 120 * (1 - distance / (aoe + enemy.radius) * 0.5), center.clone().sub(enemy.group.position).setY(0).normalize())) kills += 1;
      }
    }
    if (center.distanceTo(this.player.position) < 4.5) this.damagePlayer(34 * (1 - center.distanceTo(this.player.position) / 4.5 * 0.6), center);
    for (const other of this.barrels) {
      if (!other.dead && other !== barrel && other.group.position.distanceTo(center) < 4.5) this.damageBarrel(other, 999, new THREE.Vector3());
    }
    if (this.mission?.id === 'barrel' && kills > 0) this.addMissionProgress(kills);
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
        if (distance >= bestDistance || !this.hasLineOfSight(from, this.getAimPoint(enemy), 0.7)) continue;
        bestDistance = distance; best = enemy;
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
    let bestAngle = this.isBoard ? 0.13 : 0.08;
    const maxRange = this.isBoard ? 46 : 32;
    for (const enemy of this.enemies) {
      if (enemy.dead || enemy.spawnTime > 0 || enemy.phased) continue;
      const aim = this.getAimPoint(enemy);
      if (!this.hasLineOfSight(origin, aim)) continue;
      const toTarget = aim.sub(origin);
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
    if (enemy.broken) final *= 1.6; // 破防态：受到伤害 +60%
    if (meta.critRoll) {
      this.critCount += 1;
      if (this.critCount >= 10) this.unlockAchievement('crit-10');
    }
    if (this.mission?.id === 'crit' && meta.critRoll) this.addMissionProgress();
    if (this.mission?.id === 'combo' && this.hitCombo >= this.mission.target) this.addMissionProgress(this.mission.target);
    enemy.health -= final;
    // 失衡值累积：暴击 / 重击累积更快；满槽即触发破防（在确认未击杀的前提下）
    const staggerGain = final * (meta.critical ? 1.7 : 1) * (meta.heavy ? 2 : 1);
    enemy.stagger = (enemy.stagger || 0) + staggerGain;
    const willBreak = !enemy.broken && enemy.stagger >= enemy.staggerMax && enemy.health > 0;
    // 绝区零式反馈：连续命中数、短暂顿帧、暴击震屏
    this.hitCombo = (this.hitCombo || 0) + 1;
    this.hitComboTimer = 3.2;
    this.hitStop = Math.max(this.hitStop || 0, meta.critical ? 0.05 : 0.022);
    this.shake = Math.min(1.2, this.shake + (meta.critical ? 0.2 : 0.07));
    enemy.hitTimer = 0.07;
    const damaged = enemy.health < enemy.maxHealth;
    enemy.healthBar.visible = enemy.type === 'boss' || damaged || (enemy.stagger > 0 && !enemy.broken);
    const ratio = clamp(enemy.health / enemy.maxHealth, 0, 1);
    enemy.barFill.scale.x = ratio;
    enemy.barFill.position.x = -(1 - ratio) * (enemy.barHalf || 0.6);
    this.showDamageNumber(enemy, final, Boolean(meta.critical), enemy.health <= 0);
    if (enemy.health <= 0) {
      this.killEnemy(enemy, direction);
      return true;
    }
    if (willBreak) this.breakEnemy(enemy, direction);
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
      critical, kill, combo: this.hitCombo || 0,
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
    if (enemy.type === 'falcon') { this.falconKills = (this.falconKills || 0) + 1; if (this.falconKills >= 8) this.unlockAchievement('falconer'); }
    if (enemy.slow > 0) { this.frostKills = (this.frostKills || 0) + 1; if (this.frostKills >= 15) this.unlockAchievement('frostbite'); }
    const gained = Math.floor(enemy.score * this.combo);
    this.score += gained;
    this.credits += Math.round(enemy.score * 0.12);
    if (this.mode === 'gauntlet') this.waveTimeLeft = Math.min(90, this.waveTimeLeft + 2.5);
    if (this.mission?.id === 'kills') this.addMissionProgress();
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
    if (this.state !== 'playing' || index === this.weaponIndex || !this.loadout.includes(index)) return;
    this.weaponIndex = index;
    this.reloadTimer = 0;
    this.switchTimer = 0.32;
    this.weaponRecoil = 0.8;
    this.buildWeaponModel(index);
    this.audio.ui();
  }

  /** 跳跃：短促抬升视角，落地带缓冲。player.position.y 保持不变，敌方瞄准不受影响。 */
  jump() {
    const p = this.player;
    if (this.state !== 'playing' || !p.grounded || p.slideTime > 0 || p.dashTime > 0) return;
    p.jumpVel = 7.1;
    p.grounded = false;
    this.audio.dash?.();
  }

  /** 滑铲：需正在移动；锁定当前方向加速滑行，压低视角并让武器自然倾斜。 */
  slide() {
    const p = this.player;
    if (this.state !== 'playing' || p.slideTime > 0 || p.slideCooldown > 0 || !p.grounded) return;
    const touch = this.touchMove && Math.hypot(this.touchMove.x, this.touchMove.y) > 0.2;
    const moving = this.keys.KeyW || this.keys.KeyA || this.keys.KeyS || this.keys.KeyD || touch;
    if (!moving) return;
    p.slideTime = 0.62;
    p.slideCooldown = 1.5;
    p.slideDir = p.velocity.lengthSq() > 0.4
      ? p.velocity.clone().setY(0).normalize()
      : new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this.spawnParticles(p.position.clone().add(new THREE.Vector3(0, -1.5, 0)), 0x54f7d2, 8, 2.2);
    this.audio.dash?.();
  }

  dash() {
    if (this.state !== 'playing' || this.player.dashCooldown > 0 || this.player.dashTime > 0) return;
    this.player.dashCooldown = this.player.dashMax;
    this.player.dashTime = 0.19;
    this.player.dashDuration = 0.19;
    this.player._perfectUsed = false;
    this.player.invulnerable = 0.28;
    this.audio.dash();
  }

  /** 绝区零式失衡突破：定身敌人并开启「连携窗口」（受伤加成 + 慢动作 + 闪屏）。 */
  breakEnemy(enemy, direction) {
    if (enemy.dead || enemy.broken) return;
    enemy.broken = true;
    enemy.brokenTimer = 4.2;
    enemy.stagger = enemy.staggerMax;
    this.shake = Math.min(1.6, this.shake + 0.7);
    this.hitStop = Math.max(this.hitStop, 0.06);
    this.triggerSlowmo(0.7);
    this.audio.break?.();
    this.callbacks.onBreak?.({ name: enemy.name });
    this.callbacks.onGlitch?.('strong');
    const pos = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.height * 0.5, 0));
    this.spawnParticles(pos, 0xff4d6d, 26, 5);
    this.createPulseEffect(pos, 0xff4d6d, enemy.radius * 4);
  }

  /** 绝区零式极限闪避：冲刺前段窗口内被攻击，触发时停反击窗口。 */
  triggerPerfectDodge(source) {
    this.triggerSlowmo(1.15);
    this.audio.perfectDodge?.();
    this.callbacks.onPerfect?.({});
    this.callbacks.onGlitch?.('light');
    this.addEnergy(10);
    this.spawnParticles(this.player.position.clone().add(new THREE.Vector3(0, -0.6, 0)), 0x54f7d2, 16, 3);
  }

  /** 时停：放慢整个世界（HUD 不受影响），用于破防与极限闪避的演出。 */
  triggerSlowmo(duration) {
    const was = this.slowmo > 0;
    this.slowmo = Math.max(this.slowmo, duration);
    if (!was) this.callbacks.onSlowmo?.(true);
  }

  /** 狙击镜可调倍率：滚轮 / 专用按钮在 3/6/10 倍间循环。 */
  cycleScope() {
    if (this.currentScopeType !== 'sniper') return;
    const idx = (this.scopeLevels.indexOf(this.sniperZoom) + 1) % this.scopeLevels.length;
    this.sniperZoom = this.scopeLevels[idx];
    this.callbacks.onToast?.(`狙击镜倍率 // ${this.sniperZoom}×`, 1200);
    this.audio.ui();
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
      if (distance <= this.player.pulseRadius && this.blastReaches(center, enemy)) {
        const direction = enemy.group.position.clone().sub(center).setY(0).normalize();
        this.damageEnemy(enemy, this.player.pulseDamage * this.player.damageMultiplier * (1 - distance / this.player.pulseRadius * 0.35), direction);
        if (!enemy.dead) {
          enemy.group.position.addScaledVector(direction, enemy.type === 'boss' ? 0.4 : 1.4);
          if (this.player.frostPulse) { enemy.slow = Math.max(enemy.slow || 0, 2.5); enemy.slowMul = Math.max(0.2, 0.4); }
        }
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
    if (this.state !== 'playing' || this.mode === 'training') return;
    // 极限闪避：冲刺前段窗口内被攻击即触发完美闪避（慢动作 + 闪屏 + 反击窗口），伤害已被冲刺无敌抵消
    if (this.player.dashTime > 0 && this.player.dashTime > (this.player.dashDuration - this.player.perfectWindow) && !this.player._perfectUsed) {
      this.player._perfectUsed = true;
      this.triggerPerfectDodge(source);
      return;
    }
    if (this.player.invulnerable > 0) return;
    if (this.cheats.god) return;
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
    // 限时歼灭：倒计时归零即失败，击毁敌人可续时
    if (this.mode === 'gauntlet' && this.waveTimeLeft > 0) {
      this.waveTimeLeft -= dt;
      if (this.waveTimeLeft <= 0) { this.waveTimeLeft = 0; this.end(false); return; }
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
      if (this.mission?.id === 'flawless' && this.waveDamageTaken === 0) this.addMissionProgress(1);
      if (this.clearedContent) this.rollFieldEvent();
      const runId = this.runId;
      if ((this.mode === 'campaign' || this.mode === 'gauntlet') && this.wave >= this.difficulty.waves) {
        setTimeout(() => { if (this.runId === runId && this.state === 'playing') this.end(true); }, 1200);
      } else {
        setTimeout(() => { if (this.runId === runId && this.state === 'playing' && this.waveClearPending) this.offerUpgrades(); }, 900);
      }
    }
  }

  /** 每波随机分配一个战术任务。 */
  assignMission() {
    const template = MISSIONS[Math.floor(Math.random() * MISSIONS.length)];
    this.mission = { ...template, progress: 0, done: false };
  }

  addMissionProgress(amount = 1) {
    const mission = this.mission;
    if (!mission || mission.done) return;
    mission.progress += amount;
    if (mission.progress < mission.target) return;
    mission.done = true;
    const reward = Math.round(mission.reward * (this.missionBonus || 1));
    this.credits += reward;
    this.callbacks.onToast?.(`战术任务完成 // ${mission.text} · +${reward} CR`, 3400);
    this.audio.upgrade();
  }

  /** 流动商人：悬浮机体 + 旋转光环 + 补给箱，靠近按 G 交易。 */
  spawnFieldVendor() {
    if (this.fieldVendor) return;
    const group = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.75, 1.3, 8), new THREE.MeshStandardMaterial({ color: 0x1b3a33, emissive: 0x2fd8a8, emissiveIntensity: 0.5, metalness: 0.8, roughness: 0.3 }));
    shell.position.y = 1.5;
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), new THREE.MeshStandardMaterial({ color: 0x0d2420, emissive: 0x54f7d2, emissiveIntensity: 0.9, metalness: 0.7, roughness: 0.25 }));
    head.position.y = 2.5;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.05, 6, 28), new THREE.MeshBasicMaterial({ color: this.clearedContent ? 0xff8ad2 : 0xffd45c, toneMapped: false }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.2;
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe58a, toneMapped: false }));
    beacon.position.y = 3.2;
    const crate = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.7), new THREE.MeshStandardMaterial({ color: 0x243b36, emissive: 0x1a5a4a, emissiveIntensity: 0.4, metalness: 0.7 }));
    crate.position.set(1.1, 0.25, 0);
    group.add(shell, head, ring, beacon, crate);
    const angle = random(-0.5, 0.5);
    group.position.set(Math.sin(angle) * 14, 0, 12 + Math.cos(angle) * 3);
    this.scene.add(group);
    this.fieldVendor = { group, ring, beacon };
    this.callbacks.onToast?.(this.clearedContent ? '军需官已抵达 // 精英补给 · 靠近按 G 交易' : '流动商人已抵达 // 靠近按 G 交易', 4200);
  }

  updateFieldVendor(dt) {
    if (!this.fieldVendor) return;
    this.fieldVendor.group.rotation.y += dt * 0.55;
    this.fieldVendor.ring.rotation.z += dt * 1.3;
    this.fieldVendor.beacon.position.y = 3.2 + Math.sin(this.elapsed * 3) * 0.12;
    const distance = this.fieldVendor.group.position.distanceTo(this.player.position);
    const el = document.getElementById('interact-toast');
    if (el) {
      const show = distance < 7 && this.state === 'playing';
      el.textContent = show ? '按 G 与流动商人交易' : '';
      el.classList.toggle('show', show);
    }
  }

  /** 通关后开放：波次间随机战场事件，进一步扩充内容。 */
  rollFieldEvent() {
    const events = [
      { text: '补给空投 // +260 CR', apply: (g) => { g.credits += 260; } },
      { text: '情报官接入 // 本局任务奖励翻倍', apply: (g) => { g.missionBonus = 2; } },
      { text: '工程师折扣 // 商店 8 折', apply: (g) => { g.shopDiscount = 0.8; } },
      { text: '精英信号 // 下一波额外增援', apply: (g) => { g.eliteWave = 3; } },
    ];
    const event = events[Math.floor(Math.random() * events.length)];
    event.apply(this);
    this.fieldEvent = event.text;
    this.callbacks.onToast?.(`战场事件 // ${event.text}`, 3600);
  }

  /** 整备页：每波随机 3 个免费基础强化（三选一），刷新货架需花信用点（土豆兄弟式）。 */
  offerUpgrades() {
    this.state = 'upgrade';
    this.firing = false;
    document.exitPointerLock?.();
    this.currentFreeChoices = this.rollFreeChoices();
    this.freePicked = false;
    this.freePickIndex = -1;
    this.credits += 110 + this.wave * 22;
    this.rerollCount = 0;
    this.rerollCost = 20 + this.wave * 5;
    this.currentShop = this.generateShop();
    this.callbacks.onUpgrades(this.prepPayload());
    this.callbacks.onState('upgrade');
  }

  /** 从 BASE_UPGRADES 中无放回抽取 3 个免费基础强化。 */
  rollFreeChoices() {
    const pool = [...BASE_UPGRADES];
    const picks = [];
    while (picks.length < 3 && pool.length) picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return picks;
  }

  /** 整备页数据快照，供 UI 渲染。 */
  prepPayload() {
    return {
      freeChoices: this.currentFreeChoices, shop: this.currentShop, credits: this.credits,
      wave: this.wave, rerollCost: this.rerollCost, freePicked: this.freePicked,
      freePickIndex: this.freePickIndex,
    };
  }

  /** 货架：2 件未持有武器 + 2 件消耗补给 + 1 件武器附件/战术模块，凑足 5 格（刷新时锁定项保留）。 */
  generateShop(prev) {
    const owned = new Set(this.loadout);
    const weaponCandidates = WEAPONS.map((w, i) => ({ type: 'weapon', weaponIndex: i, name: w.name, category: w.category, price: Math.round(w.price * (this.shopDiscount || 1)), desc: w.desc }))
      .filter((item) => !owned.has(item.weaponIndex));
    const slots = [];
    // 武器：最多 2 件
    while (slots.filter((s) => s.type === 'weapon').length < 2 && weaponCandidates.length) slots.push(weaponCandidates.splice(Math.floor(Math.random() * weaponCandidates.length), 1)[0]);
    // 补给：固定 2 件
    slots.push({ type: 'repair', name: '纳米修复包', category: 'supply', price: 120, desc: '立即回满生命与护盾。' });
    slots.push({ type: 'ammo', name: '弹药补给箱', category: 'supply', price: 90, desc: '全部武器补满备用弹药。' });
    // 武器附件 / 战术模块：按波次解锁稀有度，至少 1 件，不足 5 格则补足
    const unlockedMods = SHOP_MODS.filter((m) => this.wave >= (MOD_RARITY_UNLOCK[m.rarity] || 0));
    while (slots.length < 5) {
      const mod = unlockedMods.length ? unlockedMods[Math.floor(Math.random() * unlockedMods.length)] : null;
      if (!mod) break;
      slots.push({ type: 'mod', modId: mod.id, name: mod.name, icon: mod.icon, rarity: mod.rarity, price: Math.round(mod.price * (this.shopDiscount || 1)), desc: mod.desc });
    }
    const items = slots.map((item) => ({ ...item, sold: false, locked: false }));
    // 刷新时保留上一轮的锁定（未售出）项到原下标
    if (prev) prev.forEach((old, i) => { if (old.locked && !old.sold && items[i]) items[i] = old; });
    return items;
  }

  /** 购买货架物品（武器 / 补给 / 模块）。 */
  buyShopItem(index) {
    const item = this.currentShop?.[index];
    if (!item || item.sold || this.credits < item.price || item.locked) return false;
    this.credits -= item.price;
    item.sold = true;
    if (item.type === 'weapon') this.unlockWeapon(item.weaponIndex);
    else if (item.type === 'repair') { this.player.health = this.player.maxHealth; this.player.shield = this.player.maxShield; }
    else if (item.type === 'ammo') { this.weaponState.forEach((state, i) => { state.ammo = WEAPONS[i].magazine; state.reserve = WEAPONS[i].reserve; }); }
    else if (item.type === 'mod') { const mod = SHOP_MODS.find((m) => m.id === item.modId); mod?.apply(this); }
    this.audio.upgrade();
    if (this.state === 'upgrade') this.callbacks.onUpgrades?.(this.prepPayload());
    else this.callbacks.onShop?.({ shop: this.currentShop, credits: this.credits, standalone: this.state === 'shop' });
    return true;
  }

  /** 锁定 / 解锁货架物品（刷新时不被替换）。 */
  lockShopItem(index) {
    const item = this.currentShop?.[index];
    if (!item || item.sold) return;
    item.locked = !item.locked;
    if (this.state === 'upgrade') this.callbacks.onUpgrades?.(this.prepPayload());
    else if (this.state === 'shop') this.callbacks.onShop?.({ shop: this.currentShop, credits: this.credits, standalone: true });
  }

  /** 土豆兄弟式刷新：花费信用点重抽免费强化与货架（保留锁定项）。 */
  rerollShop() {
    if (this.state !== 'upgrade' || this.credits < this.rerollCost) { this.audio.empty?.(); return; }
    this.credits -= this.rerollCost;
    this.rerollCount += 1;
    this.rerollCost += 10 + Math.floor(this.wave * 0.5) * 5;
    this.currentFreeChoices = this.rollFreeChoices();
    this.freePicked = false;
    this.freePickIndex = -1;
    this.currentShop = this.generateShop(this.currentShop);
    this.audio.upgrade();
    this.callbacks.onUpgrades?.(this.prepPayload());
  }

  /** 选择免费基础强化（三选一），选后仍可继续购物 / 刷新。 */
  chooseFreeUpgrade(index) {
    if (this.state !== 'upgrade' || this.freePicked || !this.currentFreeChoices[index]) return;
    this.currentFreeChoices[index].apply(this);
    this.freePicked = true;
    this.freePickIndex = index;
    this.appliedUpgrades.push({ name: this.currentFreeChoices[index].name, icon: this.currentFreeChoices[index].icon });
    this.audio.upgrade();
    this.callbacks.onUpgrades?.(this.prepPayload());
  }

  /** 确认整备、出击下一波（必须先领取一项免费基础强化）。 */
  deploy() {
    if (this.state !== 'upgrade' || !this.freePicked) { this.audio.empty?.(); return; }
    this.state = 'playing';
    this.waveClearPending = false;
    this.intermission = true;
    this.nextWaveTimer = 2.1;
    this.callbacks.onState('playing');
    this.callbacks.onAnnounce('整备完成', '下一波即将到来', 'DEPLOY / READY', 1900);
    this.requestLock();
  }

  /** 战场商人：靠近 NPC 时按 G 打开补给站。 */
  openFieldShop() {
    if (this.state !== 'playing' || !this.fieldVendor) return;
    if (this.fieldVendor.group.position.distanceTo(this.player.position) > 7) {
      this.callbacks.onToast?.('距离商人过远 // 靠近后按 G 交易', 1800);
      return;
    }
    this.openShopStandalone();
  }

  openShopStandalone() {
    if (this.state !== 'playing') return;
    if (!this.currentShop?.length) this.currentShop = this.generateShop();
    this.state = 'shop';
    this.firing = false;
    document.exitPointerLock?.();
    this.callbacks.onShop?.({ shop: this.currentShop, credits: this.credits, standalone: true });
    this.callbacks.onState?.('shop');
  }

  closeShopStandalone() {
    if (this.state !== 'shop') return;
    this.state = 'playing';
    this.callbacks.onState?.('playing');
    this.requestLock();
  }

  chooseUpgrade(index) {
    // 兼容键位 1—3：等同于领取免费基础强化（不再自动出击，需手动确认整备）。
    this.chooseFreeUpgrade(index);
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
    // 通关基础战役（≥10 波）后永久解锁极限难度、军需官与战场事件
    if (victory && this.wave >= 10) {
      const first = !this.clearedContent;
      try { localStorage.setItem('nexus-cleared', '1'); } catch (_) { /* storage unavailable */ }
      this.clearedContent = true;
      this.callbacks.onToast?.(first
        ? '基础战役通关 // 解锁「极限」难度 · 军需官 · 战场事件 · 隐藏内容'
        : '战役通关 // 进度已同步', 6000);
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
      scopeType: this.currentScopeType, sniperZoom: this.sniperZoom, aiming: this.aiming,
      ammo: this.weaponState[this.weaponIndex].ammo, reserve: this.weaponState[this.weaponIndex].reserve,
      reloading: this.reloadTimer > 0, unlockedWeapon: this.unlockedWeapon, dashCooldown: this.player.dashCooldown,
      dashMax: this.player.dashMax, pulseMax: this.player.pulseMax * (this.player.overdrive > 0 ? 0.5 : 1),
      pulseCooldown: this.player.pulseCooldown, boss: boss ? { health: boss.health, maxHealth: boss.maxHealth } : null,
      energy: this.player.energy, energyMax: this.player.energyMax, overdrive: this.player.overdrive,
      difficulty: this.difficulty.label, critChance: this.player.critChance,
      intermission: this.intermission, elapsed: this.elapsed,
      loadout: this.loadout, credits: this.credits, weaponSlot: this.loadout.indexOf(this.weaponIndex),
      waveTotal: this.difficulty.waves, waveTimeLeft: this.waveTimeLeft,
      mission: this.mission, clearedContent: this.clearedContent, fieldEvent: this.fieldEvent,
      vendorNearby: Boolean(this.fieldVendor && this.fieldVendor.group.position.distanceTo(this.player.position) < 7),
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
    this.enemies.forEach((enemy) => { if (!enemy.dead && (!enemy.phased || this.cheats.wall)) plot(enemy.group.position, enemy.type === 'boss' ? '#ff9a55' : enemy.type === 'turret' ? '#ffb24d' : enemy.type === 'medic' ? '#47e0a0' : enemy.type === 'bomber' ? '#ffc24d' : enemy.type === 'phantom' ? '#5ce1ff' : enemy.type === 'falcon' ? '#c6ff3d' : '#ff5362', enemy.type === 'boss' ? 4 : 2.2); });
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
    // 命中顿帧：极短时间放慢整个世界以强化打击感（绝区零式 hitstop），HUD 与波次计时不受影响
    if (this.hitStop > 0) this.hitStop = Math.max(0, this.hitStop - dt);
    let worldDt = this.hitStop > 0 ? dt * 0.22 : dt;
    // 时停（绝区零式演出）：放慢整个世界，HUD 与波次计时不受影响
    if (this.slowmo > 0) {
      this.slowmo = Math.max(0, this.slowmo - dt);
      worldDt *= 0.34;
      if (this.slowmo === 0) this.callbacks.onSlowmo?.(false);
    }
    this.animatedWorld.forEach(({ mesh, speed, axis, update }) => {
      if (update) update(dt, this.menuTime + this.elapsed);
      else if (axis) mesh.rotation[axis] += speed * dt;
    });
    if (this.dust) this.dust.rotation.y += dt * 0.003;
    if (this.state === 'playing') {
      this.elapsed += worldDt;
      this.hudTimer -= dt;
      this.radarTimer -= dt;
      this.updateCheats(worldDt);
      const cdt = (this.cheats.slow ? 0.4 : 1) * worldDt;
      this.updatePlayer(worldDt);
      this.updateEnemies(cdt);
      this.updateProjectiles(cdt);
      this.updatePickups(cdt);
      this.updateEffects(cdt);
      this.updateBarrels(cdt);
      this.updateFieldVendor(worldDt);
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
