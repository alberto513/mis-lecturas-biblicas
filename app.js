const VERSIONS = {
  vbl: {
    id: 'vbl', shortName: 'VBL', label: 'Versión Biblia Libre · VBL', folder: '', credit: '',
    readings: [
      ['NT_001_Mateo_1-18.txt', 'Mateo 1–18'], ['NT_002_Mateo_19-28_Marcos_1-5.txt', 'Mateo 19–28 · Marcos 1–5'],
      ['NT_003_Marcos_6-16_Lucas_1-3.txt', 'Marcos 6–16 · Lucas 1–3'], ['NT_004_Lucas_4-16.txt', 'Lucas 4–16'],
      ['NT_005_Lucas_17-24_Juan_1-6.txt', 'Lucas 17–24 · Juan 1–6'], ['NT_006_Juan_7-21_Hechos_1.txt', 'Juan 7–21 · Hechos 1'],
      ['NT_007_Hechos_2-16.txt', 'Hechos 2–16'], ['NT_008_Hechos_17-28_Romanos_1-5.txt', 'Hechos 17–28 · Romanos 1–5'],
      ['NT_009_Romanos_6-16_1_Corintios_1-11.txt', 'Romanos 6–16 · 1 Corintios 1–11'],
      ['NT_010_1_Corintios_12-16_2_Corintios_1-13_Gálatas_1-6.txt', '1 Corintios 12–16 · 2 Corintios 1–13 · Gálatas 1–6'],
      ['NT_011_Efesios_1-6_Filipenses_1-4_Colosenses_1-4_1_Tesalonicenses_1-5_2_Tesalonicenses_1-3_1_Timoteo_1-6.txt', 'Efesios 1–6 · Filipenses 1–4 · Colosenses 1–4 · 1–2 Tesalonicenses · 1 Timoteo 1–6'],
      ['NT_012_2_Timoteo_1-4_Tito_1-3_Filemón_1_Hebreos_1-13_Santiago_1-5_1_Pedro_1.txt', '2 Timoteo 1–4 · Tito · Filemón · Hebreos · Santiago · 1 Pedro 1'],
      ['NT_013_1_Pedro_2-5_2_Pedro_1-3_1_Juan_1-5_2_Juan_1_3_Juan_1_Judas_1_Apocalipsis_1-14.txt', '1 Pedro 2–5 · 2 Pedro · 1–3 Juan · Judas · Apocalipsis 1–14'],
      ['NT_014_Apocalipsis_15-22.txt', 'Apocalipsis 15–22'],
    ],
  },
  pddpt: {
    id: 'pddpt', shortName: 'PdDpt', label: 'Palabra de Dios para ti · PdDpt', folder: 'pddpt',
    credit: '© 2020 Asociación Bíblica Latinoamericana · Fuente: eBible.org',
    readings: [
      ['NT_001_Mateo_01_a_20.txt', 'Mateo 1–20'], ['NT_002_Mateo_21_a_Marcos_08.txt', 'Mateo 21–28 · Marcos 1–8'],
      ['NT_003_Marcos_09_a_Lucas_07.txt', 'Marcos 9–16 · Lucas 1–7'], ['NT_004_Lucas_08_a_22.txt', 'Lucas 8–22'],
      ['NT_005_Lucas_23_a_Juan_14.txt', 'Lucas 23–24 · Juan 1–14'], ['NT_006_Juan_15_a_Hechos_11.txt', 'Juan 15–21 · Hechos 1–11'],
      ['NT_007_Hechos_12_a_28.txt', 'Hechos 12–28'], ['NT_008_Romanos_01_a_1Corintios_09.txt', 'Romanos 1–16 · 1 Corintios 1–9'],
      ['NT_009_1Corintios_10_a_Galatas_06.txt', '1 Corintios 10–16 · Gálatas 1–6'],
      ['NT_010_Efesios_01_a_2Timoteo_02.txt', 'Efesios · Filipenses · Colosenses · 1–2 Tesalonicenses · 1 Timoteo · 2 Timoteo 1–2'],
      ['NT_011_2Timoteo_03_a_1Pedro_05.txt', '2 Timoteo 3–4 · Tito · Filemón · Hebreos · Santiago · 1 Pedro 1–5'],
      ['NT_012_2Pedro_01_a_Apocalipsis_18.txt', '2 Pedro · 1–3 Juan · Judas · Apocalipsis 1–18'], ['NT_013_Apocalipsis_19_a_22.txt', 'Apocalipsis 19–22'],
    ],
  },
};

const SETTINGS_KEY = 'lecturas-biblicas:settings';
const PROGRESS_PREFIX = 'lecturas-biblicas:progress:';
const clamp = (number, minimum, maximum) => Math.min(maximum, Math.max(minimum, number));

let settings = { speed: 250, fontSize: 0, versionId: 'vbl' };
try { settings = { ...settings, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') }; } catch { /* Local storage may be unavailable. */ }
if (!VERSIONS[settings.versionId]) settings.versionId = 'vbl';

let activeReading = null;
let activeVersion = null;
let words = [];
let position = 0;
let isPlaying = false;
let timer = null;

const ui = {
  library: document.querySelector('#library-view'), reader: document.querySelector('#reader-view'), grid: document.querySelector('#reading-grid'),
  status: document.querySelector('#library-status'), title: document.querySelector('#reader-title'), word: document.querySelector('#word-display'),
  progress: document.querySelector('#progress-input'), progressLabel: document.querySelector('#progress-label'), count: document.querySelector('#word-count'),
  play: document.querySelector('#play-button'), speed: document.querySelector('#speed-label'), versionSelect: document.querySelector('#version-select'),
  versionCredit: document.querySelector('#version-credit'),
};

function selectedVersion() { return VERSIONS[settings.versionId]; }
function readingsFor(version = selectedVersion()) { return version.readings.map(([file, title], index) => ({ id: String(index + 1).padStart(3, '0'), file, title })); }
function progressKey(reading, version = selectedVersion()) { return `${PROGRESS_PREFIX}${version.id}:${reading.id}`; }
function saveSettings() { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch { /* Local storage may be unavailable. */ } }

function progressFor(reading, version = selectedVersion()) {
  try {
    const saved = localStorage.getItem(progressKey(reading, version));
    const legacyVbl = version.id === 'vbl' ? localStorage.getItem(PROGRESS_PREFIX + reading.id) : null;
    return JSON.parse(saved || legacyVbl || 'null');
  } catch { return null; }
}

function saveProgress() {
  if (!activeReading || !words.length) return;
  try {
    localStorage.setItem(progressKey(activeReading, activeVersion), JSON.stringify({ position, total: words.length, updatedAt: Date.now() }));
    saveSettings();
  } catch { /* The reader remains usable if storage is blocked. */ }
}

function formatProgress(value) { return `${Math.round(value)} % leído`; }

function formatDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} min ${String(seconds).padStart(2, '0')} s`;
}

function renderLibrary() {
  const version = selectedVersion();
  ui.versionSelect.value = version.id;
  ui.versionCredit.textContent = version.credit;
  ui.grid.setAttribute('aria-label', `${version.readings.length} lecturas de ${version.label}`);
  ui.grid.replaceChildren(...readingsFor(version).map((reading) => {
    const saved = progressFor(reading, version);
    const percentage = saved?.total ? clamp((saved.position / saved.total) * 100, 0, 100) : 0;
    const button = document.createElement('button');
    button.className = 'reading-card';
    button.type = 'button';
    button.innerHTML = `<span class="reading-number">${reading.id}</span><span><strong class="reading-name">${reading.title}</strong><small class="reading-progress">${saved ? formatProgress(percentage) : 'Comenzar lectura'}</small></span><span class="card-arrow" aria-hidden="true">›</span>`;
    button.addEventListener('click', () => openReader(reading));
    return button;
  }));
}

function pause() {
  isPlaying = false;
  window.clearTimeout(timer);
  timer = null;
  ui.play.textContent = '▶';
  ui.play.setAttribute('aria-label', 'Reproducir');
  saveProgress();
}

function renderReader() {
  if (!words.length) return;
  position = clamp(position, 0, words.length - 1);
  ui.word.textContent = words[position];
  ui.progress.max = String(words.length - 1);
  ui.progress.value = String(position);
  ui.count.textContent = `${position + 1} / ${words.length}`;
  ui.progressLabel.textContent = formatProgress(((position + 1) / words.length) * 100);
  ui.speed.textContent = `${settings.speed} palabras por minuto\nTiempo restante: ${formatDuration(remainingDuration())}`;
  document.documentElement.style.setProperty('--reader-word-size', settings.fontSize);
  ui.word.style.fontSize = `clamp(${2.9 + settings.fontSize * .28}rem, ${13 + settings.fontSize}vw, ${6.8 + settings.fontSize * .4}rem)`;
}

function delayFor(word) {
  const base = 60000 / settings.speed;
  if (/[.!?][”"')\]]?$/.test(word)) return base * 1.8;
  if (/[:;][”"')\]]?$/.test(word)) return base * 1.55;
  if (/,[”"')\]]?$/.test(word)) return base * 1.3;
  return base;
}

function remainingDuration() {
  let milliseconds = 0;
  for (let index = position; index < words.length - 1; index += 1) milliseconds += delayFor(words[index]);
  return milliseconds;
}

function nextWord() {
  if (!isPlaying) return;
  if (position >= words.length - 1) { pause(); renderReader(); return; }
  const delay = delayFor(words[position]);
  timer = window.setTimeout(() => {
    position += 1;
    renderReader();
    saveProgress();
    nextWord();
  }, delay);
}

function play() {
  if (!words.length) return;
  isPlaying = true;
  ui.play.textContent = '❚❚';
  ui.play.setAttribute('aria-label', 'Pausar');
  nextWord();
}

async function openReader(reading) {
  pause();
  activeVersion = selectedVersion();
  activeReading = reading;
  ui.status.textContent = '';
  ui.title.textContent = `${activeVersion.shortName} · ${reading.title}`;
  ui.library.classList.add('is-hidden');
  ui.reader.classList.remove('is-hidden');
  ui.word.textContent = 'Cargando…';
  try {
    const folder = activeVersion.folder ? `${activeVersion.folder}/` : '';
    const response = await fetch(`./content/${folder}${encodeURIComponent(reading.file)}`);
    if (!response.ok) throw new Error(`No se pudo abrir la lectura (${response.status}).`);
    const text = await response.text();
    words = text.trim().split(/\s+/).filter(Boolean);
    if (!words.length) throw new Error('La lectura está vacía.');
    const saved = progressFor(reading, activeVersion);
    position = saved?.total === words.length ? clamp(saved.position, 0, words.length - 1) : 0;
    renderReader();
    document.querySelector('#play-button').focus();
  } catch (error) {
    ui.word.textContent = 'No se pudo abrir esta lectura.';
    ui.status.textContent = error.message;
  }
}

function showLibrary() {
  pause();
  ui.reader.classList.add('is-hidden');
  ui.library.classList.remove('is-hidden');
  renderLibrary();
}

document.querySelector('#back-button').addEventListener('click', showLibrary);
ui.versionSelect.addEventListener('change', () => {
  settings.versionId = ui.versionSelect.value;
  saveSettings();
  renderLibrary();
});
ui.play.addEventListener('click', () => isPlaying ? pause() : play());
document.querySelector('#back-word-button').addEventListener('click', () => { pause(); position = clamp(position - 10, 0, words.length - 1); renderReader(); saveProgress(); });
document.querySelector('#slower-button').addEventListener('click', () => { settings.speed = clamp(settings.speed - 25, 100, 1000); renderReader(); saveProgress(); });
document.querySelector('#faster-button').addEventListener('click', () => { settings.speed = clamp(settings.speed + 25, 100, 1000); renderReader(); saveProgress(); });
document.querySelector('#font-button').addEventListener('click', () => { settings.fontSize = (settings.fontSize + 1) % 4; renderReader(); saveProgress(); });
ui.progress.addEventListener('input', () => { pause(); position = Number(ui.progress.value); renderReader(); saveProgress(); });
document.querySelector('#fullscreen-button').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch { /* Some mobile browsers intentionally do not support fullscreen. */ }
});

renderLibrary();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js?v=6'));
