//Instalar el service worker.
self.addEventListener("install", evt =>{console.log("El service worker se instalo.");});

//Activar el service worker.
self.addEventListener("activate", evt =>{
		console.log("El service worker se activo.");
	});

//Eventos Fetch (fetch request o pedido de busqueda).

