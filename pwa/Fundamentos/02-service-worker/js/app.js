/* if('serviceWorker' in navigator){
    console.log('Listo para usar service Worker');
}
else{
    console.log('vale chorizo');
} */
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}