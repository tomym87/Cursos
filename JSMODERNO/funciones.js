function saludar(){
    console.log("Hola Mundo");
}

saludar();
const saludarFlecha = ()=>{
    console.log("Saludar Flecha");
}

saludarFlecha();

const saludarFlecha2 = (nombre) =>{// Los parentesis son opcioneles
    console.log("Hola" + nombre);
}

saludarFlecha2("Tomas");