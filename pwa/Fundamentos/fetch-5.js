// fetch('https://reqres.in/api/users/1')
// .then (resp => { 
//     resp.clone().json()
//         .then(usuario =>{
//         console.log(usuario.data);
//     });
//     resp.clone().json().then(usuario =>{
//         console.log(usuario.data);
//     });
//     resp.json().then(usuario =>{
//         console.log(usuario.data);
//     });
// });
fetch('https://reqres.in/api/users/1000')
.then (resp => { 
    //resp.json().then(console.log);
    if(resp.ok){
        return resp.json();
    }else{
        throw Error('NO existe ese usuario');
    }
    
    
})
.then(console.log)
.catch(error => {
    console.log('Error en la peticion');
    console.log(error);
});
