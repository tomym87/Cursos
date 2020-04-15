// Tarea sobre promesas y fetch
// Realice resoluciÃ³n de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el cÃ³digo del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y gÃ©nero de la persona.
*/

// ResoluciÃ³n de la tarea #1

fetch('https://swapi.co/api/people/1/')
    .then(resp => resp.json())
    .then(respObj =>{
        console.log(respObj);
        console.log('El nombre es: ' + respObj.name);
        console.log('El genero es: ' + respObj.gender);


let usuario={
    nombre: respObj.name,
    genero: respObj.gender
};

fetch( 'https://reqres.in/api/users',{
    method: 'POST', //PUT
    body: JSON.stringify(usuario), // DATA
    headers:{
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(console.error);

    });


// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el cÃ³digo )
 https://swapi.co/api/people/1/
 
 Pero con el nombre y el gÃ©nero, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegÃºrese que tenga
 el ID y la fecha de creaciÃ³n del objeto
*/

// ResoluciÃ³n de la tarea #2
// Peticion POST
