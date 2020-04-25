var objetoJS ={
    nombre:"Fernando",
    edad:30
};

console.log("ObjetoLIteral", objetoJS);
var jsonString =JSON.stringify(objetoJS);//convertimos objetoliteral a objeto JSON

console.log(jsonString);


var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);