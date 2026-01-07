self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('poli-v1').then((cache) => {
      return cache.addAll(['./', './index.html', './manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});