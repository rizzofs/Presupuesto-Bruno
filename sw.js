const CACHE_NAME = 'remises-bruno-v1';
const urlsToCache = [
  '/',
  'index.html',
  'assets/img/favicon.png',
  'manifest.json',
  // Agrega aquí otros archivos estáticos si es necesario
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 