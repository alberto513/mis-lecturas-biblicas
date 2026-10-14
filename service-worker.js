const CACHE_NAME = 'lecturas-biblicas-v2';
const APP_FILES = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './content/NT_001_Mateo_1-18.txt', './content/NT_002_Mateo_19-28_Marcos_1-5.txt',
  './content/NT_003_Marcos_6-16_Lucas_1-3.txt', './content/NT_004_Lucas_4-16.txt',
  './content/NT_005_Lucas_17-24_Juan_1-6.txt', './content/NT_006_Juan_7-21_Hechos_1.txt',
  './content/NT_007_Hechos_2-16.txt', './content/NT_008_Hechos_17-28_Romanos_1-5.txt',
  './content/NT_009_Romanos_6-16_1_Corintios_1-11.txt',
  './content/NT_010_1_Corintios_12-16_2_Corintios_1-13_Gálatas_1-6.txt',
  './content/NT_011_Efesios_1-6_Filipenses_1-4_Colosenses_1-4_1_Tesalonicenses_1-5_2_Tesalonicenses_1-3_1_Timoteo_1-6.txt',
  './content/NT_012_2_Timoteo_1-4_Tito_1-3_Filemón_1_Hebreos_1-13_Santiago_1-5_1_Pedro_1.txt',
  './content/NT_013_1_Pedro_2-5_2_Pedro_1-3_1_Juan_1-5_2_Juan_1_3_Juan_1_Judas_1_Apocalipsis_1-14.txt',
  './content/NT_014_Apocalipsis_15-22.txt',
];
self.addEventListener('install', (event) => event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => { const clone = response.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)); return response; })));
});
