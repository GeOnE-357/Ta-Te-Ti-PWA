if('serviceWorker' in navigator)
	{
		console.log("Acepta service worker");
		navigator.serviceWorker.register('sw.js',{scope:'/'})
		.then((reg) => console.log("Service Worker Registrado",reg)) /*Si el registro sucede, entoces realiza esto.*/
		.catch((err) => console.log("Service Worker No Registrado",err)); /*Sino, atrapa el error e informa.*/
	}