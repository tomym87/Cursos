
var persona = {

    nombre: "Juana",
    apellido: "Herrera",
    edad:25,
    direccion:{
        pais:"Mexico",
        ciudad: "Puebla",
        edificio:{
            numero: 7,
            departamento: 542,
            puerta:{
                color: "negra",
                material: "madera"
            }
        }

    }
};

persona.direccion.codigopostal="9796";
var edificio = persona.direccion.edificio;

edificio.nopiso = "8 piso";
console.log(persona);
