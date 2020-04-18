var carro={
    color:"Blanco",
    marca: "Ford",
    imprimir: function(){
        var salida = this.marca + " - "+ this.color;
        return salida;
    }
}
console.log(carro.imprimir());
var logCarro = function(arg1,arg2){
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos:", arg1,arg2);
    console.log("--------------");

}
var logMOdeloCarro= logCarro.bind(carro);//bind setea el argumento entre parentesis en el this
//bind establece el objeto del this
logMOdeloCarro("abc","xyz");


logMOdeloCarro.call(carro, "123", "456")