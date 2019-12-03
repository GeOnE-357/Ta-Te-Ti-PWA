//Instalar el service worker.
self.addEventListener('install', evt =>{console.log("Service Worker Registrado.");});

//Activar el service worker.
self.addEventListener('activate', evt =>{ console.log("Service Worker Activado." );});
