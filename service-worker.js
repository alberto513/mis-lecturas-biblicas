const CACHE_NAME = 'lecturas-biblicas-v13';
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
  './content/pddpt/NT_001_Mateo_01_a_20.txt', './content/pddpt/NT_002_Mateo_21_a_Marcos_08.txt',
  './content/pddpt/NT_003_Marcos_09_a_Lucas_07.txt', './content/pddpt/NT_004_Lucas_08_a_22.txt',
  './content/pddpt/NT_005_Lucas_23_a_Juan_14.txt', './content/pddpt/NT_006_Juan_15_a_Hechos_11.txt',
  './content/pddpt/NT_007_Hechos_12_a_28.txt', './content/pddpt/NT_008_Romanos_01_a_1Corintios_09.txt',
  './content/pddpt/NT_009_1Corintios_10_a_Galatas_06.txt', './content/pddpt/NT_010_Efesios_01_a_2Timoteo_02.txt',
  './content/pddpt/NT_011_2Timoteo_03_a_1Pedro_05.txt', './content/pddpt/NT_012_2Pedro_01_a_Apocalipsis_18.txt',
  './content/pddpt/NT_013_Apocalipsis_19_a_22.txt',
];
self.addEventListener('install', (event) => event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then((response) => {
      const copy = response.clone();
      if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => { const clone = response.clone(); if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone)); return response; })));
});
