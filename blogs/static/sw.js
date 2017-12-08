// Service Worker
var staticCache = "pwa-static-v1.1";
var staticCacheFile = [
    "/", 
    "/index.html", 
    "/styles.css", 
    "https://fonts.googleapis.com/css?family=VT323"
];
var dynamiCache = "pwa-dynamic-v1.1";

self.addEventListener('install', function(event) {
    console.log("[SW] Installed Service Worker");
    event.waitUntil(
        caches.open(staticCache)
            .then(function(cache) {
                return cache.addAll(staticCacheFile)
            })
    );
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName !== staticCache;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(dynamiCache).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                var fetchPromise = fetch(event.request).then(function(networkResponse) {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                })
                return response || fetchPromise;
            })
        })
    );
});