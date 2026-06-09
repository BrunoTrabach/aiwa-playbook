const CACHE_NAME = 'aiwa-playbook-v5';

// Lista de arquivos essenciais que serão guardados no celular para funcionar sem internet
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './pilares.html',
  './comparativos.html',
  './historias.html',
  './sobre/index.html',
  './avatares/bruno.jpg',
  './avatares/cristiane.jpg',
  './avatares/edy.jpg',
  './avatares/fernanda.jpg'
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Limpa caches antigos quando houver atualização de versão
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepta as requisições e busca no cache se estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

