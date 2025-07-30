self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
