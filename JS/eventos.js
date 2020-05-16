function evento (arg){

    console.log("Me dispare");
    console.log(arg);
}

var objeto = document.getElementById("objDemo");
objeto.addEventListener("keypress", evento);