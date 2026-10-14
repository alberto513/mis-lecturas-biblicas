const RVR1960_FILES = [
  'AT_001_Genesis_01_a_Genesis_23.txt', 'AT_002_Genesis_24_a_Genesis_40.txt', 'AT_003_Genesis_41_a_Exodo_08.txt',
  'AT_004_Exodo_09_a_Exodo_27.txt', 'AT_005_Exodo_28_a_Levitico_05.txt', 'AT_006_Levitico_06_a_Levitico_22.txt',
  'AT_007_Levitico_23_a_Numeros_09.txt', 'AT_008_Numeros_10_a_Numeros_26.txt', 'AT_009_Numeros_27_a_Deuteronomio_07.txt',
  'AT_010_Deuteronomio_08_a_Deuteronomio_27.txt', 'AT_011_Deuteronomio_28_a_Josue_09.txt', 'AT_012_Josue_10_a_Jueces_03.txt',
  'AT_013_Jueces_04_a_Jueces_19.txt', 'AT_014_Jueces_20_a_1Samuel_13.txt', 'AT_015_1Samuel_14_a_1Samuel_29.txt',
  'AT_016_1Samuel_30_a_2Samuel_17.txt', 'AT_017_2Samuel_18_a_1Reyes_07.txt', 'AT_018_1Reyes_08_a_1Reyes_21.txt',
  'AT_019_1Reyes_22_a_2Reyes_15.txt', 'AT_020_2Reyes_16_a_1Cronicas_07.txt', 'AT_021_1Cronicas_08_a_1Cronicas_28.txt',
  'AT_022_1Cronicas_29_a_2Cronicas_21.txt', 'AT_023_2Cronicas_22_a_Esdras_03.txt', 'AT_024_Esdras_04_a_Nehemias_11.txt',
  'AT_025_Nehemias_12_a_Job_17.txt', 'AT_026_Job_18_a_Salmos_17.txt', 'AT_027_Salmos_18_a_Salmos_67.txt',
  'AT_028_Salmos_68_a_Salmos_108.txt', 'AT_029_Salmos_109_a_Proverbios_09.txt', 'AT_030_Proverbios_10_a_Eclesiastes_07.txt',
  'AT_031_Eclesiastes_08_a_Isaias_20.txt', 'AT_032_Isaias_21_a_Isaias_44.txt', 'AT_033_Isaias_45_a_Jeremias_04.txt',
  'AT_034_Jeremias_05_a_Jeremias_24.txt', 'AT_035_Jeremias_25_a_Jeremias_42.txt', 'AT_036_Jeremias_43_a_Ezequiel_03.txt',
  'AT_037_Ezequiel_04_a_Ezequiel_22.txt', 'AT_038_Ezequiel_23_a_Ezequiel_39.txt', 'AT_039_Ezequiel_40_a_Daniel_06.txt',
  'AT_040_Daniel_07_a_Amos_06.txt', 'AT_041_Amos_07_a_Zacarias_07.txt', 'AT_042_Zacarias_08_a_Malaquias_04.txt',
  'NT_001_Mateo_01_a_19.txt', 'NT_002_Mateo_20_a_Marcos_06.txt', 'NT_003_Marcos_07_a_Lucas_04.txt',
  'NT_004_Lucas_05_a_18.txt', 'NT_005_Lucas_19_a_Juan_08.txt', 'NT_006_Juan_09_a_Hechos_04.txt',
  'NT_007_Hechos_05_a_19.txt', 'NT_008_Hechos_20_a_Romanos_10.txt', 'NT_009_Romanos_11_a_2Corintios_02.txt',
  'NT_010_2Corintios_03_a_Filipenses_04.txt', 'NT_011_Colosenses_a_Hebreos_08.txt', 'NT_012_Hebreos_09_a_3Juan.txt',
  'NT_013_Judas_a_Apocalipsis.txt',
];

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
  rvr1960: {
    id: 'rvr1960', shortName: 'RVR1960', label: 'Reina-Valera 1960 · RVR1960', folder: 'rvr1960',
    credit: 'Reina-Valera 1960 · Antiguo y Nuevo Testamento', readings: RVR1960_FILES,
  },
};

const SETTINGS_KEY = 'lecturas-biblicas:settings';
const PROGRESS_PREFIX = 'lecturas-biblicas:progress:';
const clamp = (number, minimum, maximum) => Math.min(maximum, Math.max(minimum, number));

let settings = { speed: 250, fontSize: 10, versionId: 'vbl' };
try { settings = { ...settings, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') }; } catch { /* Local storage may be unavailable. */ }
if (!VERSIONS[settings.versionId]) settings.versionId = 'vbl';
settings.fontSize = clamp(Number(settings.fontSize) || 10, 1, 20);

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
  play: document.querySelector('#play-button'), speed: document.querySelector('#speed-label'), fontSize: document.querySelector('#font-size-label'), versionSelect: document.querySelector('#version-select'),
  versionCredit: document.querySelector('#version-credit'),
};

function selectedVersion() { return VERSIONS[settings.versionId]; }
function rvrTitle(file) {
  const accents = { Genesis: 'Génesis', Exodo: 'Éxodo', Levitico: 'Levítico', Numeros: 'Números', Josue: 'Josué', Cronicas: 'Crónicas', Eclesiastes: 'Eclesiastés', Isaias: 'Isaías', Jeremias: 'Jeremías', Zacarias: 'Zacarías', Malaquias: 'Malaquías' };
  const formatPart = (part) => {
    let title = part.replace(/^([12])(?=[A-Z])/, '$1 ').replaceAll('_', ' ').replace(/\b0+(\d+)\b/g, '$1');
    Object.entries(accents).forEach(([plain, accented]) => { title = title.replace(new RegExp(`\\b${plain}\\b`, 'g'), accented); });
    return title;
  };
  return file.replace(/^(AT|NT)_\d{3}_/, '').replace(/\.txt$/, '').split('_a_').map(formatPart).join(' · ');
}

function readingsFor(version = selectedVersion()) {
  return version.readings.map((entry, index) => {
    const [file, title] = Array.isArray(entry) ? entry : [entry, rvrTitle(entry)];
    const id = version.id === 'rvr1960' ? file.slice(0, 6).replace('_', ' ') : String(index + 1).padStart(3, '0');
    return { id, file, title };
  });
}
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
    const numberClass = reading.id.includes(' ') ? 'reading-number reading-number-testament' : 'reading-number';
    button.innerHTML = `<span class="${numberClass}">${reading.id}</span><span><strong class="reading-name">${reading.title}</strong><small class="reading-progress">${saved ? formatProgress(percentage) : 'Comenzar lectura'}</small></span><span class="card-arrow" aria-hidden="true">›</span>`;
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

function renderFocusedWord(word) {
  const characters = Array.from(word);
  const letterIndexes = characters.flatMap((character, index) => /\p{L}/u.test(character) ? [index] : []);
  if (!letterIndexes.length) { ui.word.textContent = word; return; }
  const pivotIndex = letterIndexes[Math.floor(letterIndexes.length / 3)];
  const pivot = document.createElement('span');
  pivot.className = 'word-pivot';
  pivot.textContent = characters[pivotIndex];
  ui.word.replaceChildren(characters.slice(0, pivotIndex).join(''), pivot, characters.slice(pivotIndex + 1).join(''));
}

function renderReader() {
  if (!words.length) return;
  position = clamp(position, 0, words.length - 1);
  renderFocusedWord(words[position]);
  ui.progress.max = String(words.length - 1);
  ui.progress.value = String(position);
  ui.count.textContent = `${position + 1} / ${words.length}`;
  ui.progressLabel.textContent = formatProgress(((position + 1) / words.length) * 100);
  ui.speed.textContent = `${settings.speed} palabras por minuto\nTiempo restante: ${formatDuration(remainingDuration())}`;
  ui.fontSize.value = String(settings.fontSize);
  ui.word.style.fontSize = `clamp(${2.2 + settings.fontSize * .12}rem, ${11 + settings.fontSize * .45}vw, ${5 + settings.fontSize * .23}rem)`;
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
document.querySelector('#smaller-font-button').addEventListener('click', () => { settings.fontSize = clamp(settings.fontSize - 1, 1, 20); renderReader(); saveProgress(); });
document.querySelector('#larger-font-button').addEventListener('click', () => { settings.fontSize = clamp(settings.fontSize + 1, 1, 20); renderReader(); saveProgress(); });
ui.progress.addEventListener('input', () => { pause(); position = Number(ui.progress.value); renderReader(); saveProgress(); });
document.querySelector('#fullscreen-button').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch { /* Some mobile browsers intentionally do not support fullscreen. */ }
});

renderLibrary();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js?v=10'));
