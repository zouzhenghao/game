/**
 * NEXUS STRIKE 1.1.0 · 玩家偏好设置
 * 单例对象：Game 每帧直接读取，设置面板里改动即时生效；所有变更同步到 localStorage。
 * 键鼠与触屏灵敏度分开记忆，避免切换设备后手感突变。
 */
const STORAGE_KEY = 'nexus-settings-v1';

export const SETTINGS_DEFAULTS = Object.freeze({
  mouseSensitivity: 1.0,      // 键鼠视角灵敏度（0.30–2.50）
  touchSensitivity: 1.0,      // 触屏滑动视角灵敏度（0.30–2.50）
  fireLook: true,             // 按住开火键时滑动也能转视角（主流 FPS 手游手感）
  fireLookSensitivity: 0.85,  // 开火滑视角相对触屏灵敏度的倍率（0.30–1.60）
  invertY: false,             // 纵向反转
  aimAssist: 100,             // 辅助瞄准强度 %（0 = 关闭，100 = 标准，150 = 增强）
  volume: 100,                // 主音量 %（100 = 原始音量）
  feedback: 100,              // 打击反馈 / 震屏强度 %
  showFps: false,             // 游戏中显示帧率
});

const RANGES = {
  mouseSensitivity: [0.3, 2.5],
  touchSensitivity: [0.3, 2.5],
  fireLookSensitivity: [0.3, 1.6],
  aimAssist: [0, 150],
  volume: [0, 100],
  feedback: [0, 150],
};

function coerce(key, value) {
  const def = SETTINGS_DEFAULTS[key];
  if (typeof def === 'boolean') return typeof value === 'boolean' ? value : def;
  const n = Number(value);
  if (!Number.isFinite(n)) return def;
  const [min, max] = RANGES[key] || [0, 150];
  return Math.min(max, Math.max(min, n));
}

function read() {
  let raw = {};
  try { raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch (_) { /* 存储不可用/损坏时用默认值 */ }
  const out = {};
  for (const key of Object.keys(SETTINGS_DEFAULTS)) {
    out[key] = Object.prototype.hasOwnProperty.call(raw, key) ? coerce(key, raw[key]) : SETTINGS_DEFAULTS[key];
  }
  return out;
}

export const settings = read();

export function saveSettings() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)); } catch (_) { /* 隐私模式下静默降级 */ }
}

export function setSetting(key, value) {
  if (!(key in SETTINGS_DEFAULTS)) return;
  settings[key] = coerce(key, value);
  saveSettings();
}

export function resetSettings() {
  for (const key of Object.keys(SETTINGS_DEFAULTS)) settings[key] = SETTINGS_DEFAULTS[key];
  saveSettings();
}

/** 辅助瞄准强度倍率：0 = 关闭，1 = 标准，1.5 = 增强。 */
export function assistFactor() { return settings.aimAssist / 100; }
/** 打击反馈（震屏）倍率。 */
export function feedbackFactor() { return settings.feedback / 100; }
