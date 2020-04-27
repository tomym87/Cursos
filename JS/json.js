var objetoJS ={
    nombre:"Fernando",
    edad:30,
    imprimir: function(){
        console.log(this.nombre, this.edad);
    }
};

console.log("ObjetoLIteral", objetoJS);
var jsonString =JSON.stringify(objetoJS);//convertimos objetoliteral a objeto JSON

console.log(jsonString);


var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);
