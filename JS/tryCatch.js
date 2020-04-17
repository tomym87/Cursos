try{
    let numero = "y"; //Se espera que se intrudusca un numero
    console.log("Aqui se coloca el codigo a evaluar");
    
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero");
        
    }
}
catch(error){
    console.log("Se captura el error" , error);
}
finally{}