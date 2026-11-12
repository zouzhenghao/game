export class AudioSystem {
  constructor() {
    this.enabled = true;
    this.context = null;
    this.master = null;
    this.noiseBuffer = null;
    this.volume = 1; // 0–1，1 = 原始音量（设置面板「主音量 100%」）
  }

  init() {
    if (this.context) {
      if (this.context.state === 'suspended') this.context.resume();
      return;
    }
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    this.context = new Context();
    this.master = this.context.createGain();
    this.master.gain.value = 0.28 * this.volume;
    this.master.connect(this.context.destination);
    const length = this.context.sampleRate;
    this.noiseBuffer = this.context.createBuffer(1, length, this.context.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) this.init();
    return this.enabled;
  }

  /** 设置主音量（0–100），即时生效；音频上下文尚未初始化时延迟到 init 应用。 */
  setVolume(percent) {
    const value = Number(percent);
    this.volume = Number.isFinite(value) ? Math.min(1, Math.max(0, value / 100)) : 1;
    if (this.master) this.master.gain.value = 0.28 * this.volume;
  }

  tone(frequency, duration, volume = 0.15, type = 'sine', endFrequency = frequency, delay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.context) return;
    const time = this.context.currentTime + delay;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, time);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), time + duration);
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(gain);
    gain.connect(this.master);
    oscillator.start(time);
    oscillator.stop(time + duration);
  }

  noise(duration, volume = 0.15, filterFrequency = 1200, delay = 0) {
    if (!this.enabled) return;
    this.init();
    if (!this.context) return;
    const time = this.context.currentTime + delay;
    const source = this.context.createBufferSource();
    const filter = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    source.buffer = this.noiseBuffer;
    filter.type = 'lowpass';
    filter.frequency.value = filterFrequency;
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    source.start(time);
    source.stop(time + duration);
  }

  shot(type) {
    if (type === 'shotgun') {
      this.noise(0.22, 0.42, 950);
      this.tone(105, 0.18, 0.25, 'sawtooth', 42);
    } else if (type === 'rail') {
      this.tone(1250, 0.28, 0.18, 'sawtooth', 85);
      this.tone(90, 0.35, 0.22, 'sine', 35);
      this.noise(0.16, 0.2, 3000);
    } else if (type === 'arc') {
      this.tone(920, 0.12, 0.13, 'square', 230);
      this.tone(1560, 0.09, 0.08, 'sine', 440);
      this.noise(0.09, 0.12, 4200);
    } else if (type === 'rocket') {
      this.noise(0.2, 0.32, 1300);
      this.tone(150, 0.32, 0.2, 'sawtooth', 55);
      this.tone(420, 0.12, 0.1, 'sine', 180, 0.05);
    } else {
      this.noise(0.075, 0.18, 1900);
      this.tone(190, 0.07, 0.12, 'square', 70);
    }
  }

  hit() { this.tone(1250, 0.035, 0.055, 'square', 800); }
  kill() { this.tone(320, 0.1, 0.08, 'sine', 680); this.tone(740, 0.12, 0.06, 'sine', 980, 0.05); }
  enemyShot() { this.tone(260, 0.14, 0.07, 'sawtooth', 90); }
  damage() { this.noise(0.16, 0.2, 450); this.tone(70, 0.2, 0.12, 'sawtooth', 35); }
  pickup() { this.tone(540, 0.08, 0.09, 'sine', 860); this.tone(850, 0.13, 0.07, 'sine', 1200, 0.07); }
  reload() { this.noise(0.035, 0.08, 2300); this.tone(430, 0.04, 0.04, 'square', 330, 0.12); }
  empty() { this.tone(180, 0.035, 0.05, 'square', 150); }
  ui() { this.tone(620, 0.04, 0.035, 'sine', 760); }
  dash() { this.noise(0.2, 0.13, 1400); this.tone(160, 0.2, 0.12, 'sine', 640); }
  pulse() { this.tone(85, 0.65, 0.22, 'sine', 30); this.tone(340, 0.35, 0.12, 'sawtooth', 70); }
  explosion() { this.noise(0.48, 0.4, 600); this.tone(90, 0.4, 0.2, 'sine', 25); }
  wave() { [220, 330, 440].forEach((f, i) => this.tone(f, 0.22, 0.07, 'sine', f * 1.02, i * 0.1)); }
  upgrade() { [380, 570, 760].forEach((f, i) => this.tone(f, 0.25, 0.08, 'triangle', f * 1.1, i * 0.08)); }
  gameOver() { this.tone(210, 0.8, 0.15, 'sawtooth', 45); }
  victory() { [262, 330, 392, 523].forEach((f, i) => this.tone(f, 0.5, 0.09, 'triangle', f, i * 0.13)); }
  overdrive() { [330, 440, 660, 880].forEach((f, i) => this.tone(f, 0.45, 0.1, 'sawtooth', f * 1.35, i * 0.06)); this.tone(70, 0.6, 0.18, 'sine', 40); }
  achievement() { [660, 880, 1320].forEach((f, i) => this.tone(f, 0.15, 0.07, 'triangle', f, i * 0.07)); }
  warning() { this.tone(780, 0.12, 0.09, 'square', 520); this.tone(780, 0.12, 0.09, 'square', 520, 0.2); }
  // —— 绝区零式演出音效 ——
  break() { this.tone(140, 0.5, 0.22, 'sawtooth', 60); this.noise(0.3, 0.32, 900); this.tone(1200, 0.18, 0.12, 'square', 320); }
  perfectDodge() { this.tone(900, 0.18, 0.12, 'sine', 1700); this.tone(1500, 0.12, 0.08, 'triangle', 2400, 0.05); this.noise(0.12, 0.1, 5000); }
  glitch() { this.tone(60, 0.12, 0.16, 'square', 140); this.noise(0.1, 0.14, 2600); }
  staggerHit() { this.tone(520, 0.05, 0.05, 'square', 360); }
}
