const nombreCache="sitio-cache-v2";
const dinamicoCache="sitio-dinamico-v1";
const elementos=["https://geone-357.github.io/Ta-Te-Ti-PWA/","index.html","css/estilo.css","js/accion.js","js/app.js", "manifest.json", "fallback.html"];

//Funcion para limitar el cache
const limiteCache = (nombre, tamaño)=> {
	caches.open(nombre).then(cache => {
		cache.keys().then(keys =>{
			if(keys.length > tamaño){
				cache.delete(keys[0]).then(limiteCache(nombre, tamaño));
			}
		})
	})
};

//Instalar el service worker.
self.addEventListener("install", evt => {
	console.log("El service worker se instalo.");
	//1°-Guardamos en el cache, los elementos predefinidos de la pagina. Css, Javascripts y HTML.
	evt.waitUntil(caches.open(nombreCache).then((cache) => {
					//console.log("Definimos el cache predeterminado.");
					cache.addAll(elementos);
				})
		);
});


//Activar el service worker.
self.addEventListener("activate", evt =>{
		//console.log("El service worker se activo.");
		//3°-Chequearemos la version de cache, borraremos la version obsoleta.
		evt.waitUntil(
			caches.keys().then(keys => {
				console.log(keys);
				return Promise.all(keys
					.filter(key => key !== nombreCache && key !== dinamicoCache)
					.map(key => caches.delete(key))
				)
			})
		);
	});

//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch", evt =>{
	//console.log("Se atrapo el evento: ",evt);
	//2°-Atrapamos los pedidos, para que los busque en el cache.
	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return cacheRes || fetch(evt.request).then(fetchRes =>{
				return caches.open(dinamicoCache).then(cache => {
					cache.put(evt.request.url, fetchRes.clone());
					limiteCache(dinamicoCache, 5);
					return fetchRes;
				})
			})
		}).catch(() => {
			if(evt.request.url.indexOf(".html") > -1){
				return caches.match("fallback.html");	
			}	
		})
	);
});