const hoy = new Date();
let dia = hoy.getDay();

//let dia = 10;

console.log({ dia});

const diasLetras = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado",
}

console.log(diasLetras[dia]|| "Dia no definido");