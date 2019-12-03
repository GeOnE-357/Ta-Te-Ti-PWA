//Instalar el service worker.
self.addEventListener('install', evt =>{console.log("Service Worker Registrado.");});

//Activar el service worker.
self.addEventListener('activate', evt =>{ console.log("Service Worker Activado." );});

//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener('fetch', evt =>{console.log("Evento fetch", evt);});
