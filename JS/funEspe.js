var carro={
    color:"Blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " - "+ this.color;
        return salida;
    }
}
var carro2={
    color:"Rojo",
    marca:"Toyota"
}
//hacemos referencia al objeto carro sin problema
console.log(carro.imprimir());
var logCarro = function(arg1,arg2){
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos:", arg1,arg2);
    console.log("--------------");

}
var logModeloCarro= logCarro.bind(carro);//bind setea el argumento entre parentesis en el this
//bind establece el objeto del this
logModeloCarro("abc","xyz");


logModeloCarro.call(carro, "123", "456");


//Todo esto sirve para funciones prestadas
console.log(carro.imprimir.call(carro2));//Aqui cambiamos el puntero a valores de carro 2