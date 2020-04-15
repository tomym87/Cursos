/* function a(){
    console.log("Funcion a");
}
a();
a.nombre="maria"; */
//comentario agregado 15/04/2020
// otrocomentario
var nombre ="Juano";
var persona = {

    nombre: "Maria",
    apellido: "Felix",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido + " " + nombre);
    },
    direccion:{
        pais: "Mexico",
        obtenerPais: function(){
            console.log(this);
            var self = this;
            var nuevaDireccion = function(){
                console.log(self);
                console.log("La direccion es " + self.pais);
            }
            nuevaDireccion();
            //console.log("la direccion es "+ this.pais);
        }
    }

};

persona.imprimirNombre();
persona.direccion.obtenerPais();