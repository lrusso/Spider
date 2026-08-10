const filesToCache = [
  "Spider.htm",
  "Spider.png",
  "SpiderFavIcon_16x16.png",
  "SpiderFavIcon_192x192.png",
  "SpiderFavIcon_512x512.png",
  "SpiderShare.png",
  "manifest.json"
]

const staticCacheName = "spider-v1"

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }).catch(error => {
    })
  )
})