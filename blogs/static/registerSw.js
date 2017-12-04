// Check Service Worker availability
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function(reg) {
            console.log("[SW] Successfully Registered.")
        })
        .catch(function(err) {
            console.log("FAILED TO INSTALL", err)
        })
}