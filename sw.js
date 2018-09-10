self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pumpkin-time').then(function(cache) {
      console.log('caching...');
      return cache.addAll([
        './index.html',
        './css/',
        './css/reset.css',
        './css/styles.css',
        './dist/',
        './dist/main.js',
        './fonts/',
        './fonts/SourceSansPro-Regular.ttf',
        './fonts/SourceSansPro-Bold.ttf',
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
