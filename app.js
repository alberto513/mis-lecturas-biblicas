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
const FOCUS_SETTINGS_KEY = 'lecturas-biblicas:focus-settings';
const FOCUS_RESULTS_KEY = 'lecturas-biblicas:focus-results';
const ATMOSPHERE_SETTINGS_KEY = 'lecturas-biblicas:atmosphere-settings';
const ATMOSPHERE_CATALOG = [
  { id: 'desierto-alba', title: 'Desierto del alba', file: 'desierto-del-alba.png', category: 'paisajes', tags: ['antiguo', 'genesis', 'exodo', 'salmos', 'desierto'], accent: '#d8a454', surface: 'rgba(17, 12, 7, .89)' },
  { id: 'sinai-moise', title: 'Sinaí · escena inspirada en Moisés', file: 'sinai-moise.png', category: 'antiguo', tags: ['antiguo', 'exodo', 'deuteronomio', 'moises', 'sinai'], accent: '#ce9255', surface: 'rgba(18, 10, 7, .89)' },
  { id: 'galilea-azul', title: 'Galilea azul', file: 'galilea-azul.png', category: 'paisajes', tags: ['nuevo', 'mateo', 'marcos', 'lucas', 'juan', 'hechos', 'galilea'], accent: '#78b6d4', surface: 'rgba(5, 13, 22, .89)' },
  { id: 'ensenanza-galilea', title: 'Galilea · escena de enseñanza', file: 'ensenanza-galilea.png', category: 'nuevo', tags: ['nuevo', 'mateo', 'marcos', 'lucas', 'juan', 'jesus', 'galilea'], accent: '#caa965', surface: 'rgba(16, 14, 8, .89)' },
  { id: 'jerusalen-amanecer', title: 'Jerusalén al amanecer', file: 'jerusalen-amanecer.png', category: 'paisajes', tags: ['antiguo', 'nuevo', 'salmos', 'mateo', 'marcos', 'lucas', 'juan', 'hechos', 'jerusalen'], accent: '#e5b66b', surface: 'rgba(19, 12, 6, .88)' },
  { id: 'vision-celestial', title: 'Visión celestial', file: 'vision-celestial.png', category: 'celestial', tags: ['celestial', 'daniel', 'ezequiel', 'apocalipsis'], accent: '#a6b9ef', surface: 'rgba(5, 9, 20, .88)' },
];
const clamp = (number, minimum, maximum) => Math.min(maximum, Math.max(minimum, number));

let settings = { speed: 250, fontSize: 10, versionId: 'vbl' };
try { settings = { ...settings, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') }; } catch { /* Local storage may be unavailable. */ }
if (!VERSIONS[settings.versionId]) settings.versionId = 'vbl';
settings.fontSize = clamp(Number(settings.fontSize) || 10, 1, 20);

let focusSettings = { mode: 'silence', betaFrequency: 18, masterVolume: .4, toneVolume: .18, musicVolume: .35, musicEnabled: false, musicTrack: '', sessionMinutes: 60, youtubeUrl: '' };
try { focusSettings = { ...focusSettings, ...JSON.parse(localStorage.getItem(FOCUS_SETTINGS_KEY) || '{}') }; } catch { /* Local storage may be unavailable. */ }
focusSettings.mode = ['beta', 'gamma', 'instrumental', 'silence'].includes(focusSettings.mode) ? focusSettings.mode : 'silence';
focusSettings.betaFrequency = clamp(Number(focusSettings.betaFrequency) || 18, 14, 20);
focusSettings.masterVolume = clamp(Number(focusSettings.masterVolume), 0, 1);
focusSettings.toneVolume = clamp(Number(focusSettings.toneVolume), 0, 1);
focusSettings.musicVolume = clamp(Number(focusSettings.musicVolume), 0, 1);
focusSettings.sessionMinutes = [30, 45, 60].includes(Number(focusSettings.sessionMinutes)) ? Number(focusSettings.sessionMinutes) : 60;

let atmosphereSettings = { enabled: true, followBook: true, category: 'all', interval: '10', customMinutes: 10, intensity: 'balanced', rotationPaused: false, favorites: [], hidden: [] };
try { atmosphereSettings = { ...atmosphereSettings, ...JSON.parse(localStorage.getItem(ATMOSPHERE_SETTINGS_KEY) || '{}') }; } catch { /* The visual layer remains optional if storage is blocked. */ }
atmosphereSettings.category = ['all', 'paisajes', 'antiguo', 'nuevo', 'celestial'].includes(atmosphereSettings.category) ? atmosphereSettings.category : 'all';
atmosphereSettings.interval = ['fixed', '3', '5', '10', '15', 'custom'].includes(String(atmosphereSettings.interval)) ? String(atmosphereSettings.interval) : '10';
atmosphereSettings.customMinutes = clamp(Number(atmosphereSettings.customMinutes) || 10, 1, 60);
atmosphereSettings.intensity = ['soft', 'balanced', 'immersive'].includes(atmosphereSettings.intensity) ? atmosphereSettings.intensity : 'balanced';
atmosphereSettings.favorites = Array.isArray(atmosphereSettings.favorites) ? atmosphereSettings.favorites : [];
atmosphereSettings.hidden = Array.isArray(atmosphereSettings.hidden) ? atmosphereSettings.hidden : [];

let activeReading = null;
let activeVersion = null;
let words = [];
let position = 0;
let isPlaying = false;
let timer = null;
let focusAudio = { context: null, masterGain: null, toneGain: null, musicGain: null, oscillators: [], musicElement: new Audio(), musicSource: null, running: false, interval: null, remainingMs: 0, startedAt: 0, toneRevision: 0, fileUrl: null, sessionMode: 'silence' };
let atmosphereTimer = null;
let atmosphereCurrentId = null;
let atmosphereVisibleLayer = 'a';

const ui = {
  library: document.querySelector('#library-view'), reader: document.querySelector('#reader-view'), grid: document.querySelector('#reading-grid'),
  status: document.querySelector('#library-status'), title: document.querySelector('#reader-title'), word: document.querySelector('#word-display'),
  progress: document.querySelector('#progress-input'), progressLabel: document.querySelector('#progress-label'), count: document.querySelector('#word-count'),
  play: document.querySelector('#play-button'), speed: document.querySelector('#speed-label'), fontSize: document.querySelector('#font-size-label'), versionSelect: document.querySelector('#version-select'),
  versionCredit: document.querySelector('#version-credit'),
  focusPanel: document.querySelector('#focus-panel'), focusToggle: document.querySelector('#focus-panel-button'), focusClose: document.querySelector('#focus-panel-close'), audioStatus: document.querySelector('#audio-status'), audioTest: document.querySelector('#audio-test-button'),
  betaFrequency: document.querySelector('#beta-frequency'), betaFrequencyValue: document.querySelector('#beta-frequency-value'), masterVolume: document.querySelector('#master-volume'), masterVolumeValue: document.querySelector('#master-volume-value'),
  toneVolume: document.querySelector('#tone-volume'), toneVolumeValue: document.querySelector('#tone-volume-value'), musicVolume: document.querySelector('#music-volume'), musicVolumeValue: document.querySelector('#music-volume-value'),
  musicLibrary: document.querySelector('#music-library'), musicFile: document.querySelector('#music-file'), musicFileName: document.querySelector('#music-file-name'), musicEnabled: document.querySelector('#music-enabled'),
  sessionClock: document.querySelector('#session-clock'), audioPlay: document.querySelector('#audio-play-button'), toneNote: document.querySelector('#tone-note'), sessionSummary: document.querySelector('#session-summary'),
  youtubeUrl: document.querySelector('#youtube-url'), youtubeShow: document.querySelector('#youtube-show'), youtubeClear: document.querySelector('#youtube-clear'), youtubePlayer: document.querySelector('#youtube-player'),
  evaluationDialog: document.querySelector('#evaluation-dialog'), evaluationForm: document.querySelector('#evaluation-form'), evaluationMode: document.querySelector('#evaluation-mode'),
  atmosphereRoot: document.querySelector('#atmosphere-root'), atmosphereLayerA: document.querySelector('#atmosphere-layer-a'), atmosphereLayerB: document.querySelector('#atmosphere-layer-b'),
  atmospherePanel: document.querySelector('#atmosphere-panel'), atmosphereToggle: document.querySelector('#atmosphere-panel-button'), atmosphereClose: document.querySelector('#atmosphere-panel-close'), atmosphereStatus: document.querySelector('#atmosphere-status'), atmosphereEnabled: document.querySelector('#atmosphere-enabled'), atmosphereFollowBook: document.querySelector('#atmosphere-follow-book'), atmosphereCategory: document.querySelector('#atmosphere-category'), atmosphereInterval: document.querySelector('#atmosphere-interval'), atmosphereCustomMinutes: document.querySelector('#atmosphere-custom-minutes'), customIntervalField: document.querySelector('#custom-interval-field'), atmospherePause: document.querySelector('#atmosphere-pause'), atmosphereFavorite: document.querySelector('#atmosphere-favorite'), atmosphereHide: document.querySelector('#atmosphere-hide'), atmosphereGallery: document.querySelector('#atmosphere-gallery'), galleryCount: document.querySelector('#gallery-count'), atmosphereCredit: document.querySelector('#atmosphere-credit'),
};
const hasFocusPanel = Boolean(ui.focusPanel && ui.focusToggle && ui.focusClose && ui.audioStatus && ui.audioTest && ui.audioPlay && ui.musicLibrary && ui.evaluationDialog && ui.evaluationForm);
const hasAtmospherePanel = Boolean(ui.atmosphereRoot && ui.atmosphereLayerA && ui.atmosphereLayerB && ui.atmospherePanel && ui.atmosphereToggle && ui.atmosphereClose && ui.atmosphereEnabled && ui.atmosphereFollowBook && ui.atmosphereCategory && ui.atmosphereInterval && ui.atmosphereCustomMinutes && ui.atmosphereGallery);

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

function saveFocusSettings() { try { localStorage.setItem(FOCUS_SETTINGS_KEY, JSON.stringify(focusSettings)); } catch { /* The panel remains usable if storage is blocked. */ } }
function modeName(mode = focusSettings.mode) { return ({ beta: 'Alerta activa · beta', gamma: 'Concentración experimental · gamma', instrumental: 'Energía instrumental', silence: 'Silencio' })[mode]; }
function sessionModeName() { return `${modeName()}${focusSettings.musicEnabled && focusSettings.mode !== 'instrumental' ? ' + música' : ''}`; }
function formatSessionTime(milliseconds) { const seconds = Math.max(0, Math.ceil(milliseconds / 1000)); return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`; }
function currentSessionRemaining() { return focusAudio.running ? Math.max(0, focusAudio.remainingMs - (Date.now() - focusAudio.startedAt)) : focusAudio.remainingMs; }
function toneMode() { return ['beta', 'gamma'].includes(focusSettings.mode) ? focusSettings.mode : null; }
function delay(milliseconds) { return new Promise((resolve) => window.setTimeout(resolve, milliseconds)); }

function saveAtmosphereSettings() { try { localStorage.setItem(ATMOSPHERE_SETTINGS_KEY, JSON.stringify(atmosphereSettings)); } catch { /* The visual layer remains usable without persistence. */ } }
function currentAtmosphere() { return ATMOSPHERE_CATALOG.find((scene) => scene.id === atmosphereCurrentId) || null; }
function atmosphereTagsForReading() {
  const title = `${activeReading?.title || ''} ${activeVersion?.id || ''}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const tags = [];
  if (/genesis|exodo|levitico|numeros|deuteronomio|josue|jueces|samuel|reyes|cronicas|esdras|nehemias|job|salmos|proverbios|eclesiastes|isaias|jeremias|ezequiel|oseas|joel|amos|abdias|jonas|miqueas|nahum|habacuc|sofonias|hageo|zacarias|malaquias/.test(title)) tags.push('antiguo');
  if (/mateo|marcos|lucas|juan|hechos|romanos|corintios|galatas|efesios|filipenses|colosenses|tesalonicenses|timoteo|tito|filemon|hebreos|santiago|pedro|judas/.test(title)) tags.push('nuevo');
  if (/apocalipsis|daniel|ezequiel/.test(title)) tags.push('celestial');
  ['genesis', 'exodo', 'salmos', 'mateo', 'marcos', 'lucas', 'juan', 'hechos', 'daniel', 'ezequiel', 'apocalipsis'].forEach((book) => { if (title.includes(book)) tags.push(book); });
  return tags;
}
function availableAtmospheres({ contextual = false } = {}) {
  let scenes = ATMOSPHERE_CATALOG.filter((scene) => !atmosphereSettings.hidden.includes(scene.id));
  if (atmosphereSettings.category !== 'all') scenes = scenes.filter((scene) => scene.category === atmosphereSettings.category || scene.tags.includes(atmosphereSettings.category));
  if (!scenes.length) scenes = ATMOSPHERE_CATALOG.filter((scene) => !atmosphereSettings.hidden.includes(scene.id));
  if (contextual && atmosphereSettings.followBook) {
    const tags = atmosphereTagsForReading();
    const matched = scenes.filter((scene) => scene.tags.some((tag) => tags.includes(tag)));
    if (matched.length) return matched;
  }
  return scenes;
}
function atmosphereDelay() {
  if (atmosphereSettings.interval === 'fixed') return 0;
  const minutes = atmosphereSettings.interval === 'custom' ? atmosphereSettings.customMinutes : Number(atmosphereSettings.interval);
  return Number.isFinite(minutes) && minutes > 0 ? minutes * 60000 : 0;
}
function preloadNextAtmosphere() {
  const scenes = availableAtmospheres({ contextual: false });
  const next = scenes.find((scene) => scene.id !== atmosphereCurrentId);
  if (next) { const image = new Image(); image.src = `./assets/backgrounds/${next.file}`; }
}
function applyAtmosphere(scene, { announce = false } = {}) {
  if (!hasAtmospherePanel || !scene) return;
  const incoming = atmosphereVisibleLayer === 'a' ? ui.atmosphereLayerB : ui.atmosphereLayerA;
  const outgoing = atmosphereVisibleLayer === 'a' ? ui.atmosphereLayerA : ui.atmosphereLayerB;
  incoming.style.backgroundImage = `url("./assets/backgrounds/${scene.file}")`;
  incoming.classList.add('is-visible');
  outgoing.classList.remove('is-visible');
  atmosphereVisibleLayer = atmosphereVisibleLayer === 'a' ? 'b' : 'a';
  atmosphereCurrentId = scene.id;
  document.documentElement.style.setProperty('--atmosphere-accent', scene.accent);
  document.documentElement.style.setProperty('--gold', scene.accent);
  document.documentElement.style.setProperty('--atmosphere-surface', scene.surface);
  const intensity = { soft: { opacity: '.54', blur: '13px' }, balanced: { opacity: '.78', blur: '8px' }, immersive: { opacity: '.94', blur: '3px' } }[atmosphereSettings.intensity];
  ui.atmosphereRoot.style.setProperty('--atmosphere-blur', intensity.blur);
  ui.atmosphereRoot.style.opacity = atmosphereSettings.enabled ? intensity.opacity : '0';
  if (announce) ui.atmosphereStatus.textContent = `Escena aplicada: ${scene.title}.`;
  preloadNextAtmosphere();
  renderAtmospherePanel();
}
function activateAtmosphereForReading() {
  if (!hasAtmospherePanel) return;
  const isActive = atmosphereSettings.enabled && Boolean(activeReading);
  document.documentElement.classList.toggle('atmosphere-active', isActive);
  ui.atmosphereRoot.classList.toggle('is-active', isActive);
  if (!isActive) { ui.atmosphereRoot.style.opacity = '0'; clearAtmosphereTimer(); return; }
  const contextual = availableAtmospheres({ contextual: true });
  const first = contextual.find((scene) => scene.id !== atmosphereCurrentId) || contextual[0];
  if (first) applyAtmosphere(first);
  scheduleAtmosphere();
}
function clearAtmosphereTimer() { if (atmosphereTimer) { window.clearTimeout(atmosphereTimer); atmosphereTimer = null; } }
function scheduleAtmosphere() {
  clearAtmosphereTimer();
  const timeout = atmosphereDelay();
  if (!hasAtmospherePanel || !atmosphereSettings.enabled || atmosphereSettings.rotationPaused || !timeout || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  atmosphereTimer = window.setTimeout(() => { moveAtmosphere(1); scheduleAtmosphere(); }, timeout);
}
function moveAtmosphere(direction = 1) {
  const scenes = availableAtmospheres({ contextual: false });
  if (!scenes.length) return;
  const currentIndex = Math.max(0, scenes.findIndex((scene) => scene.id === atmosphereCurrentId));
  const next = scenes[(currentIndex + direction + scenes.length) % scenes.length];
  applyAtmosphere(next, { announce: true });
  scheduleAtmosphere();
}
function renderAtmospherePanel() {
  if (!hasAtmospherePanel) return;
  const scene = currentAtmosphere();
  const visibleScenes = availableAtmospheres({ contextual: false });
  ui.atmosphereEnabled.checked = atmosphereSettings.enabled;
  ui.atmosphereFollowBook.checked = atmosphereSettings.followBook;
  ui.atmosphereCategory.value = atmosphereSettings.category;
  ui.atmosphereInterval.value = atmosphereSettings.interval;
  ui.atmosphereCustomMinutes.value = String(atmosphereSettings.customMinutes);
  ui.customIntervalField.classList.toggle('is-hidden', atmosphereSettings.interval !== 'custom');
  document.querySelectorAll('[data-atmosphere-intensity]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.atmosphereIntensity === atmosphereSettings.intensity)));
  ui.atmospherePause.textContent = atmosphereSettings.rotationPaused ? 'Reanudar cambios' : 'Pausar cambios';
  ui.atmospherePause.classList.toggle('is-active', atmosphereSettings.rotationPaused);
  ui.atmosphereFavorite.textContent = scene && atmosphereSettings.favorites.includes(scene.id) ? 'Quitar favorito' : 'Guardar favorito';
  ui.atmosphereHide.disabled = !scene || ATMOSPHERE_CATALOG.filter((candidate) => !atmosphereSettings.hidden.includes(candidate.id)).length <= 1;
  ui.galleryCount.textContent = `${visibleScenes.length} fondo${visibleScenes.length === 1 ? '' : 's'}`;
  ui.atmosphereStatus.textContent = scene
    ? `${scene.title} · ${atmosphereSettings.followBook ? 'relación amplia con el libro actual cuando está disponible' : 'selección manual o aleatoria'}.`
    : 'Selecciona una escena para iniciar el ambiente visual.';
  ui.atmosphereCredit.textContent = scene ? `${scene.title} · Imagen original generada para este lector. Inspiración artística; no es una reconstrucción histórica.` : '';
  ui.atmosphereGallery.replaceChildren(...visibleScenes.map((candidate) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'gallery-card'; button.style.backgroundImage = `url("./assets/backgrounds/${candidate.file}")`;
    button.setAttribute('aria-pressed', String(candidate.id === atmosphereCurrentId));
    button.innerHTML = `<span>${candidate.title}${atmosphereSettings.favorites.includes(candidate.id) ? ' ★' : ''}</span>`;
    button.addEventListener('click', () => { atmosphereSettings.enabled = true; applyAtmosphere(candidate, { announce: true }); saveAtmosphereSettings(); scheduleAtmosphere(); });
    return button;
  }));
}
function setAtmospherePanel(open) {
  if (!hasAtmospherePanel) return;
  ui.atmospherePanel.classList.toggle('is-hidden', !open);
  ui.atmospherePanel.setAttribute('aria-hidden', String(!open));
  ui.atmosphereToggle.setAttribute('aria-expanded', String(open));
  if (open) { if (hasFocusPanel) setFocusPanel(false); renderAtmospherePanel(); ui.atmosphereClose.focus(); }
  else ui.atmosphereToggle.focus();
}

function renderFocusPanel() {
  if (!hasFocusPanel) return;
  const percentage = (value) => `${Math.round(value * 100)}%`;
  ui.betaFrequency.value = String(focusSettings.betaFrequency);
  ui.betaFrequencyValue.value = `${focusSettings.betaFrequency} Hz`;
  ui.masterVolume.value = String(Math.round(focusSettings.masterVolume * 100));
  ui.toneVolume.value = String(Math.round(focusSettings.toneVolume * 100));
  ui.musicVolume.value = String(Math.round(focusSettings.musicVolume * 100));
  ui.masterVolumeValue.value = percentage(focusSettings.masterVolume);
  ui.toneVolumeValue.value = percentage(focusSettings.toneVolume);
  ui.musicVolumeValue.value = percentage(focusSettings.musicVolume);
  ui.musicEnabled.checked = focusSettings.musicEnabled;
  ui.musicLibrary.value = focusSettings.musicTrack;
  ui.youtubeUrl.value = focusSettings.youtubeUrl;
  document.querySelectorAll('[data-audio-mode]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.audioMode === focusSettings.mode)));
  document.querySelectorAll('[data-session-minutes]').forEach((button) => button.setAttribute('aria-pressed', String(Number(button.dataset.sessionMinutes) === focusSettings.sessionMinutes)));
  ui.toneNote.textContent = focusSettings.mode === 'gamma'
    ? 'Gamma de 40 Hz es un modo experimental. Mantén el volumen bajo; no garantiza una mejora cognitiva.'
    : 'Para tonos binaurales beta usa auriculares. Es una opción de prueba; no garantiza un efecto específico.';
  ui.audioStatus.textContent = focusAudio.running ? `${sessionModeName()} · sesión en curso` : `${modeName()} · listo para comparar tu lectura.`;
  ui.audioPlay.textContent = focusAudio.running ? '❚❚ Pausar ambiente' : '▶ Iniciar ambiente';
  ui.sessionClock.textContent = formatSessionTime(currentSessionRemaining() || (focusSettings.sessionMinutes * 60000));
  renderSessionSummary();
}

function setFocusPanel(open) {
  if (!hasFocusPanel) return;
  ui.focusPanel.classList.toggle('is-hidden', !open);
  ui.focusPanel.setAttribute('aria-hidden', String(!open));
  ui.focusToggle.setAttribute('aria-expanded', String(open));
  if (open) { renderFocusPanel(); ui.focusClose.focus(); }
  else ui.focusToggle.focus();
}

function ensureAudioGraph() {
  if (focusAudio.context) return focusAudio.context;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error('Este navegador no admite audio web.');
  const context = new AudioContextClass();
  const masterGain = context.createGain();
  const toneGain = context.createGain();
  const musicGain = context.createGain();
  masterGain.gain.value = 0;
  toneGain.gain.value = 0;
  musicGain.gain.value = 0;
  toneGain.connect(masterGain);
  musicGain.connect(masterGain);
  masterGain.connect(context.destination);
  focusAudio = { ...focusAudio, context, masterGain, toneGain, musicGain };
  return context;
}

function ramp(gainNode, value, seconds = .18) {
  if (!gainNode || !focusAudio.context) return;
  const now = focusAudio.context.currentTime;
  gainNode.gain.cancelScheduledValues(now);
  gainNode.gain.setValueAtTime(gainNode.gain.value, now);
  gainNode.gain.linearRampToValueAtTime(value, now + seconds);
}

function stopOscillators() {
  focusAudio.oscillators.forEach(({ oscillator, panner }) => {
    try { oscillator.stop(); oscillator.disconnect(); panner.disconnect(); } catch { /* Nodes may already be stopped. */ }
  });
  focusAudio.oscillators = [];
}

function createBinauralPair(leftFrequency, rightFrequency) {
  const context = focusAudio.context;
  const createTone = (frequency, pan) => {
    const oscillator = context.createOscillator();
    const panner = context.createStereoPanner ? context.createStereoPanner() : context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    if ('pan' in panner) panner.pan.value = pan;
    oscillator.connect(panner).connect(focusAudio.toneGain);
    oscillator.start();
    return { oscillator, panner };
  };
  focusAudio.oscillators = [createTone(leftFrequency, -1), createTone(rightFrequency, 1)];
}

async function configureTones() {
  if (!focusAudio.context) return;
  const revision = ++focusAudio.toneRevision;
  ramp(focusAudio.toneGain, 0, .14);
  await delay(160);
  if (revision !== focusAudio.toneRevision) return;
  stopOscillators();
  if (!focusAudio.running || !toneMode()) return;
  if (focusSettings.mode === 'beta') createBinauralPair(220, 220 + focusSettings.betaFrequency);
  if (focusSettings.mode === 'gamma') createBinauralPair(220, 260);
  ramp(focusAudio.toneGain, focusSettings.toneVolume, .22);
}

function connectMusic() {
  if (!focusAudio.context || focusAudio.musicSource) return;
  focusAudio.musicSource = focusAudio.context.createMediaElementSource(focusAudio.musicElement);
  focusAudio.musicSource.connect(focusAudio.musicGain);
}

function setMusicSource(source, label, objectUrl = null) {
  if (focusAudio.fileUrl && focusAudio.fileUrl !== objectUrl) URL.revokeObjectURL(focusAudio.fileUrl);
  focusAudio.fileUrl = objectUrl;
  focusAudio.musicElement.pause();
  if (source) {
    focusAudio.musicElement.src = source;
    focusAudio.musicElement.loop = true;
  } else {
    focusAudio.musicElement.removeAttribute('src');
    focusAudio.musicElement.load();
  }
  ui.musicFileName.textContent = label || 'Todavía no elegiste un archivo.';
}

function ensureMusicSource() {
  if (focusAudio.musicElement.src) return true;
  const firstLibraryTrack = Array.from(ui.musicLibrary.options).find((option) => Boolean(option.value));
  if (!firstLibraryTrack) return false;
  focusSettings.musicTrack = firstLibraryTrack.value;
  ui.musicLibrary.value = firstLibraryTrack.value;
  setMusicSource(firstLibraryTrack.value, firstLibraryTrack.textContent);
  return true;
}

async function playSoundTest() {
  try {
    const context = ensureAudioGraph();
    await context.resume();
    const gain = context.createGain();
    const oscillator = context.createOscillator();
    const now = context.currentTime;
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, now);
    oscillator.frequency.setValueAtTime(660, now + .32);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(.18, now + .03);
    gain.gain.setValueAtTime(.18, now + .58);
    gain.gain.linearRampToValueAtTime(0, now + .72);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + .75);
    oscillator.addEventListener('ended', () => { oscillator.disconnect(); gain.disconnect(); }, { once: true });
    ui.audioStatus.textContent = 'Prueba enviada: deberías oír dos tonos breves. Si no se oyen, sube el volumen del equipo o revisa la salida de audio.';
  } catch (error) { ui.audioStatus.textContent = error.message || 'No se pudo ejecutar la prueba de sonido.'; }
}

function syncMusic() {
  if (!focusAudio.context) return;
  const canPlay = focusAudio.running && focusSettings.musicEnabled && Boolean(focusAudio.musicElement.src);
  ramp(focusAudio.musicGain, canPlay ? focusSettings.musicVolume : 0, .18);
  if (canPlay) focusAudio.musicElement.play().catch(() => { ui.audioStatus.textContent = 'El navegador no pudo iniciar el archivo de música.'; });
  else focusAudio.musicElement.pause();
}

function clearSessionInterval() { if (focusAudio.interval) { window.clearInterval(focusAudio.interval); focusAudio.interval = null; } }
function tickSessionClock() {
  const remaining = currentSessionRemaining();
  ui.sessionClock.textContent = formatSessionTime(remaining);
  if (remaining <= 0) finishFocusSession();
}
function beginSessionClock() {
  if (!focusAudio.remainingMs) focusAudio.remainingMs = focusSettings.sessionMinutes * 60000;
  focusAudio.startedAt = Date.now();
  clearSessionInterval();
  tickSessionClock();
  focusAudio.interval = window.setInterval(tickSessionClock, 1000);
}
function pauseSessionClock() {
  if (focusAudio.running) focusAudio.remainingMs = currentSessionRemaining();
  clearSessionInterval();
}

async function startFocusAudio() {
  try {
    if (focusSettings.musicEnabled) ensureMusicSource();
    const context = ensureAudioGraph();
    await context.resume();
    connectMusic();
    if (!focusAudio.remainingMs) focusAudio.remainingMs = focusSettings.sessionMinutes * 60000;
    focusAudio.running = true;
    focusAudio.sessionMode = sessionModeName();
    ramp(focusAudio.masterGain, focusSettings.masterVolume, .22);
    configureTones();
    syncMusic();
    beginSessionClock();
    renderFocusPanel();
  } catch (error) { ui.audioStatus.textContent = error.message || 'No se pudo iniciar el ambiente.'; }
}

function pauseFocusAudio() {
  if (!focusAudio.running) return;
  pauseSessionClock();
  focusAudio.running = false;
  ramp(focusAudio.masterGain, 0, .18);
  focusAudio.musicElement.pause();
  window.setTimeout(() => focusAudio.context?.suspend().catch(() => {}), 220);
  renderFocusPanel();
}

function finishFocusSession() {
  if (!focusAudio.running) return;
  const completedMode = focusAudio.sessionMode;
  focusAudio.remainingMs = 0;
  pauseFocusAudio();
  ui.evaluationMode.textContent = `Modo de esta sesión: ${completedMode}.`;
  if (typeof ui.evaluationDialog.showModal === 'function') ui.evaluationDialog.showModal();
}

function stopFocusAudio() {
  pauseFocusAudio();
  clearSessionInterval();
  stopOscillators();
  if (focusAudio.fileUrl) URL.revokeObjectURL(focusAudio.fileUrl);
}

function readFocusResults() { try { return JSON.parse(localStorage.getItem(FOCUS_RESULTS_KEY) || '[]'); } catch { return []; } }
function renderSessionSummary() {
  const results = readFocusResults();
  if (!results.length) { ui.sessionSummary.textContent = 'Aún no hay sesiones evaluadas.'; return; }
  const averageFocus = Math.round(results.reduce((sum, result) => sum + result.focus, 0) / results.length * 10) / 10;
  ui.sessionSummary.textContent = `${results.length} sesión${results.length === 1 ? '' : 'es'} guardada${results.length === 1 ? '' : 's'} · concentración media ${averageFocus}/10.`;
}

function youtubeId(value) {
  try {
    const url = new URL(value);
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1).match(/^[\w-]{11}$/)?.[0] || null;
    if (url.hostname.includes('youtube.com')) return (url.searchParams.get('v') || url.pathname.split('/').pop()).match(/^[\w-]{11}$/)?.[0] || null;
  } catch { /* Invalid URLs are handled by the caller. */ }
  return null;
}

function showYoutubeReference() {
  const id = youtubeId(ui.youtubeUrl.value.trim());
  if (!id) { ui.audioStatus.textContent = 'Pega un enlace válido de YouTube para mostrar la referencia oficial.'; return; }
  focusSettings.youtubeUrl = ui.youtubeUrl.value.trim();
  saveFocusSettings();
  ui.youtubePlayer.replaceChildren(Object.assign(document.createElement('iframe'), { src: `https://www.youtube-nocookie.com/embed/${id}?rel=0`, title: 'Referencia de YouTube', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowFullscreen: true }));
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
  activateAtmosphereForReading();
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
  pauseFocusAudio();
  ui.reader.classList.add('is-hidden');
  ui.library.classList.remove('is-hidden');
  activeReading = null;
  activateAtmosphereForReading();
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

if (hasAtmospherePanel) {
  ui.atmosphereToggle.addEventListener('click', () => setAtmospherePanel(ui.atmospherePanel.classList.contains('is-hidden')));
  ui.atmosphereClose.addEventListener('click', () => setAtmospherePanel(false));
  ui.atmosphereEnabled.addEventListener('change', () => { atmosphereSettings.enabled = ui.atmosphereEnabled.checked; saveAtmosphereSettings(); activateAtmosphereForReading(); renderAtmospherePanel(); });
  ui.atmosphereFollowBook.addEventListener('change', () => { atmosphereSettings.followBook = ui.atmosphereFollowBook.checked; saveAtmosphereSettings(); if (activeReading) activateAtmosphereForReading(); renderAtmospherePanel(); });
  ui.atmosphereCategory.addEventListener('change', () => { atmosphereSettings.category = ui.atmosphereCategory.value; saveAtmosphereSettings(); const scene = availableAtmospheres({ contextual: false })[0]; if (scene) applyAtmosphere(scene, { announce: true }); scheduleAtmosphere(); });
  ui.atmosphereInterval.addEventListener('change', () => { atmosphereSettings.interval = ui.atmosphereInterval.value; atmosphereSettings.rotationPaused = false; saveAtmosphereSettings(); scheduleAtmosphere(); renderAtmospherePanel(); });
  ui.atmosphereCustomMinutes.addEventListener('change', () => { atmosphereSettings.customMinutes = clamp(Number(ui.atmosphereCustomMinutes.value) || 10, 1, 60); ui.atmosphereCustomMinutes.value = String(atmosphereSettings.customMinutes); saveAtmosphereSettings(); scheduleAtmosphere(); });
  document.querySelectorAll('[data-atmosphere-intensity]').forEach((button) => button.addEventListener('click', () => { atmosphereSettings.intensity = button.dataset.atmosphereIntensity; saveAtmosphereSettings(); const scene = currentAtmosphere(); if (scene) applyAtmosphere(scene); }));
  document.querySelector('#atmosphere-previous').addEventListener('click', () => moveAtmosphere(-1));
  document.querySelector('#atmosphere-next').addEventListener('click', () => moveAtmosphere(1));
  ui.atmospherePause.addEventListener('click', () => { atmosphereSettings.rotationPaused = !atmosphereSettings.rotationPaused; saveAtmosphereSettings(); scheduleAtmosphere(); renderAtmospherePanel(); });
  ui.atmosphereFavorite.addEventListener('click', () => { const scene = currentAtmosphere(); if (!scene) return; const favorites = new Set(atmosphereSettings.favorites); if (favorites.has(scene.id)) favorites.delete(scene.id); else favorites.add(scene.id); atmosphereSettings.favorites = [...favorites]; saveAtmosphereSettings(); renderAtmospherePanel(); });
  ui.atmosphereHide.addEventListener('click', () => { const scene = currentAtmosphere(); if (!scene) return; atmosphereSettings.hidden = [...new Set([...atmosphereSettings.hidden, scene.id])]; saveAtmosphereSettings(); const next = availableAtmospheres({ contextual: false })[0]; if (next) applyAtmosphere(next, { announce: true }); scheduleAtmosphere(); });
  document.querySelector('#atmosphere-classic').addEventListener('click', () => { atmosphereSettings.enabled = false; saveAtmosphereSettings(); activateAtmosphereForReading(); renderAtmospherePanel(); });
}

function selectFocusMode(mode) {
  focusSettings.mode = mode;
  if (mode === 'instrumental') { focusSettings.musicEnabled = true; ensureMusicSource(); }
  if (mode === 'silence') focusSettings.musicEnabled = false;
  saveFocusSettings();
  if (focusAudio.running) { configureTones(); syncMusic(); }
  renderFocusPanel();
}

if (hasFocusPanel) {
  ui.focusToggle.addEventListener('click', () => setFocusPanel(ui.focusPanel.classList.contains('is-hidden')));
  ui.focusClose.addEventListener('click', () => setFocusPanel(false));
  document.querySelectorAll('[data-audio-mode]').forEach((button) => button.addEventListener('click', () => selectFocusMode(button.dataset.audioMode)));
  document.querySelectorAll('[data-session-minutes]').forEach((button) => button.addEventListener('click', () => {
    focusSettings.sessionMinutes = Number(button.dataset.sessionMinutes);
    focusAudio.remainingMs = focusSettings.sessionMinutes * 60000;
    if (focusAudio.running) focusAudio.startedAt = Date.now();
    saveFocusSettings();
    renderFocusPanel();
  }));
  ui.betaFrequency.addEventListener('input', () => {
    focusSettings.betaFrequency = Number(ui.betaFrequency.value);
    saveFocusSettings();
    if (focusAudio.running && focusSettings.mode === 'beta') configureTones();
    renderFocusPanel();
  });
  [[ui.masterVolume, 'masterVolume', (value) => ramp(focusAudio.masterGain, value, .12)], [ui.toneVolume, 'toneVolume', (value) => ramp(focusAudio.toneGain, toneMode() ? value : 0, .12)], [ui.musicVolume, 'musicVolume', () => syncMusic()]].forEach(([input, property, apply]) => input.addEventListener('input', () => {
    focusSettings[property] = Number(input.value) / 100;
    saveFocusSettings();
    if (focusAudio.running) apply(focusSettings[property]);
    renderFocusPanel();
  }));
  ui.musicEnabled.addEventListener('change', () => { focusSettings.musicEnabled = ui.musicEnabled.checked; if (focusSettings.musicEnabled) ensureMusicSource(); saveFocusSettings(); if (focusAudio.running) syncMusic(); renderFocusPanel(); });
  ui.musicLibrary.addEventListener('change', () => {
    const source = ui.musicLibrary.value;
    const label = source ? ui.musicLibrary.selectedOptions[0].textContent : '';
    focusSettings.musicTrack = source;
    setMusicSource(source, label);
    if (source) { focusSettings.mode = 'instrumental'; focusSettings.musicEnabled = true; }
    saveFocusSettings();
    if (focusAudio.running) { configureTones(); syncMusic(); }
    renderFocusPanel();
  });
  ui.musicFile.addEventListener('change', () => {
    const [file] = ui.musicFile.files;
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    focusSettings.musicTrack = '';
    setMusicSource(objectUrl, file.name, objectUrl);
    focusSettings.mode = 'instrumental';
    focusSettings.musicEnabled = true;
    saveFocusSettings();
    if (focusAudio.running) syncMusic();
    renderFocusPanel();
  });
  ui.audioPlay.addEventListener('click', () => focusAudio.running ? pauseFocusAudio() : startFocusAudio());
  ui.audioTest.addEventListener('click', playSoundTest);
  ui.youtubeShow.addEventListener('click', showYoutubeReference);
  ui.youtubeClear.addEventListener('click', () => { ui.youtubePlayer.replaceChildren(); ui.youtubeUrl.value = ''; focusSettings.youtubeUrl = ''; saveFocusSettings(); });
  ui.youtubeUrl.addEventListener('change', () => { focusSettings.youtubeUrl = ui.youtubeUrl.value.trim(); saveFocusSettings(); });
  ['sleep-score', 'focus-score', 'understanding-score'].forEach((id) => {
    const input = document.querySelector(`#${id}`);
    const output = document.querySelector(`#${id}-value`);
    input.addEventListener('input', () => { output.value = input.value; });
  });
  ui.evaluationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.submitter?.value === 'save') {
      const data = new FormData(ui.evaluationForm);
      const result = { completedAt: Date.now(), mode: focusAudio.sessionMode, sleep: Number(data.get('sleep')), focus: Number(data.get('focus')), distractions: Math.max(0, Number(data.get('distractions')) || 0), understanding: Number(data.get('understanding')) };
      try { const results = readFocusResults(); results.push(result); localStorage.setItem(FOCUS_RESULTS_KEY, JSON.stringify(results.slice(-100))); } catch { /* The evaluation is optional. */ }
    }
    ui.evaluationDialog.close();
    renderFocusPanel();
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !ui.focusPanel.classList.contains('is-hidden')) setFocusPanel(false); if (event.key === 'Escape' && hasAtmospherePanel && !ui.atmospherePanel.classList.contains('is-hidden')) setAtmospherePanel(false); });
  document.addEventListener('visibilitychange', () => { if (document.hidden && focusAudio.running) pauseFocusAudio(); if (document.hidden) clearAtmosphereTimer(); else scheduleAtmosphere(); });
  const savedTrack = Array.from(ui.musicLibrary.options).find((option) => option.value === focusSettings.musicTrack);
  if (savedTrack) setMusicSource(savedTrack.value, savedTrack.textContent);
  else focusSettings.musicTrack = '';
  focusAudio.remainingMs = focusSettings.sessionMinutes * 60000;
  renderFocusPanel();
}
window.addEventListener('pagehide', () => { stopFocusAudio(); clearAtmosphereTimer(); });
renderLibrary();
