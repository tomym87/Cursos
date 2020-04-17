
//Funcion para crear cookie
function crearCookie(nombre, valor){
    
    //Escapar valor para que los caracteres
    //extraños no interfieran en el codigo como los ;
    valor = escape(valor);

    //Poner fecha de expiracion cookie
    var hoy= new Date();
    hoy.setMonth(hoy.getMonth()+1);

    document.cookie = nombre+"="+ valor +";expires=" + hoy.toUTCString()+";";

    //document.cookie = nombre+"="+ valor + ";";
}
//Crear lascookies
crearCookie("nombre", "Tomas");
crearCookie("Apellido", "Zarate");
crearCookie("Edad", "32");

var cookies = document.cookie;
console.log(cookies);


//Funcion eliminar cookies

function borrarCookie(){}