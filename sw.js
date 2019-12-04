const nombreStatic="sitio-cache";
const elementos=["index.html","css/estilo.css","js/accion.js"];

//Instalar el service worker.
/*self.addEventListener("install", evt => {
	//console.log("El service worker se instalo.");
	evt.waitUntil(caches.open(nombreCache).then((cache) => {
					console.log("Definimos el cache predeterminado.");
					cache.addAll(elementos);
				})
		);
});*/

self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(nombreStatic).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(elementos);
    })
  );
});

//Activar el service worker.
self.addEventListener("activate", evt =>{
		console.log("El service worker se activo.");
	});

//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener("fetch", evt =>{console.log("Se atrapo el evento: ",evt);});
