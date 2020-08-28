const filesToCache = [
	"/",
	"Spider.htm",
	"Spider.json",
	"Spider.png",
	"SpiderFavIcon_16x16.png",
	"SpiderFavIcon_192x192.png",
	"SpiderGame.htm",
	"SpiderGame.js",
	"SpiderShare.png"
];

const staticCacheName = "spider-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});