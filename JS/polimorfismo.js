a = 3;

function determinaDato(a){
if (a === undefined){
    console.log("A es undefined... no se que hacer")
    }
if(typeof a === "number"){
    console.log("A esun numero y puedo hacer operaciones con numeros");    
    return;    
}
if(typeof a === "string"){
    console.log("A es un texto, puedo hacer operaciones con textos");    
}
if (typeof a === "object"){
    console.log("A es un objeto, pero puede ser cualquiercosa");
    }
    else{
        console.log("ESto no se que sea")
    }
}
determinaDato(25);