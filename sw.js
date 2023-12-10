self.addEventListener('message', function (event) {
  console.log("[sw.js] " + event);
  self.registration.showNotification(event.data);
});

self.addEventListener('fetch', function(event) {});
