
//Funcion para crear cookie
function crearCookie(nombre, valor){
    
    //Escapar valor para que los caracteres
    //extraños no interfieran en el codigo como los ;
    valor = escape(valor);

    //Poner fecha de expiracion cookie
    var hoy= new Date();
    hoy.setMonth(hoy.getMonth()+1); //se suma un mes a su fecha

    //sepone expiracion
    document.cookie = nombre+"="+ valor +";expires=" + hoy.toUTCString()+";";

    //document.cookie = nombre+"="+ valor + ";";
}
//Crear lascookies
//crearCookie("nombre", "Tomas");
//crearCookie("Apellido", "Zarate");
//crearCookie("Edad", "32");

borrarCookie("nombre");//borrar cookie

var cookies = document.cookie;
console.log(cookies);


//Funcion eliminar cookies

function borrarCookie(nombre){

    //Poner fecha de expiracion cookie
    var hoy= new Date();
    hoy.setMonth(hoy.getMonth()-1); //se suma un mes a su fecha

    //sepone expiracion
    document.cookie = nombre+"=x;expires=" + hoy.toUTCString()+";";
 
}
//obtencion de la cookie
function getCookie(nombre){

    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);

    for(var i = 0; i<cookieArr.length; i++){

        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;
        if(parArr[0]===nombre){

            return unescape(parArr[1]);

        }

    }
    console.log(cookieArr);
    return undefined;
}
console.log(getCookie("Apellido"));

