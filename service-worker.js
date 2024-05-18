self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-shell').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        // Adicione outros recursos que você quer cachear
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
