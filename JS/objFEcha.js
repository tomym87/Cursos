var hoy = new Date();
var fMili = new Date(1);
console.log(hoy);
console.log(fMili);

//Para definir una fecha se sigue elsiguiente parametro
// anio, mes, dia, hora, munuto, segundo, milisegundo

var anio="1987";
var mes="11";//el añoempieza en el numero 0=enero
var dia = "21";
var hora ="8";
var min="0";
var seg= "15";
var miliseg="500";

var fFija = new Date(anio, mes,dia,hora, min, seg, miliseg);
console.log(fFija);

console.log(hoy.getFullYear());
//Cuanto tiempo demora unproceso en ejecutarse


var inicio = new Date();
for (var i = 0; i-15000; i++){
    console.log("Escribir algo...");
}
var fin =new Date();

//console.log(inicio.getMilliseconds());
//console.log(fin.getMilliseconds());

var duracion = fin.getTime()-inicio.getTime();
console.log(duracion, " milisegundos");