/* function imprimir (nombre, apellido){

    if (apellido === undefined){
        apellido = "xxx";
    }
    console.log(nombre + " " + apellido)

}

imprimir ("Tomas", "Zarate"); */
function imprimir(fn){
    fn();
}

var miFuncion= function(){
    console.log("Mi Funcion");
}

imprimir(miFuncion);
   // console.log("Funcion Anonima");
//});