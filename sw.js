/* Service Worker — funcionamiento 100% sin conexión */
const CACHE = 'asistext-v1';
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './jsbarcode.all.min.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(res =>
      res || fetch(e.request).then(net => {
        const copia = net.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
        return net;
      }).catch(() => caches.match('./index.html'))
    )
  );
});
