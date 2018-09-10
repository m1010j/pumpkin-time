self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pumpkin-time').then(function(cache) {
      return cache.addAll([
        './index.html',
        './css/reset.css',
        './css/styles.css',
        './dist/main.js',
        './fonts/SourceSansPro-Regular.ttf',
        './fonts/SourceSansPro-Bold.ttf',
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.open('pumpkin-time').then(function(cache) {
      return cache.match(e.request).then(function(response) {
        return (
          response ||
          fetch(e.request).then(function(response) {
            cache.put(e.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
