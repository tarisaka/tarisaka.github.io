// service-worker.js
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('message', function (event) {
  console.log("[ServiceWorker][message] " + event.data);
  const opt = {
                badge: "./sentiment_satisfied_FILL0_wght400_GRAD0_opsz24.png",
                body: "ブンブン! ブンブン!",
                icon: "./icon-192.png",
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: "vibration-sample",
              };
  self.registration.showNotification(event.data, opt);
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});
