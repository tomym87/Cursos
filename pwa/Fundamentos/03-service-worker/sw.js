
// Ciclo de vida del SW

self.addEventListener('install', event =>{

    //Descargandoassets
    //Creamosun cache
    console.log('SW:Instalando SW');
    //self.skipWaiting();//Forzar update onreload
    const instalacion = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);     
});

event.waitUntil(instalacion);
//cuando el SW toma el control de la aplicacion

});

self.addEventListener('activate', event =>{
    //Borrar cache viejo
    console.log('SW2 Activo y listo');
});

//Fetch: manejo de peticiones HTTP
self.addEventListener('fetch', event =>{

    //Aplicar estrategias de cache
  /*   console.log('SW:', event.request.url);
    if(event.request.url.includes('https://reqres.in/')){
        const resp = new Response(`{ok: false, mensaje 'jajaja'}`);

        event.respondWith(resp);
    } */

});

//Evento SYNC Recuperamos la onexion a internet

self.addEventListener('sync', event=>{
    console.log('Tenemos conexión');
    console.log(event);
    console.log(event.tag);
});
