

let deck        = [];
const tipos     = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
const btnPedir  = document.querySelector("#btnPedir");
let puntosJugador = 0;
let puntosComputadora = 0;

// REferencias HTML
//const smalls = document.querySelectorAll();
const puntosHTML = document.querySelectorAll('small');

//esta funcion crea una nueva baraja
const crearDeck= () =>{

    for(let i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for (let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

//Esta funcion me permite tomar una carta

const pedirCarta=()=>{
//codigo para que si me quedo son cartas no pueda seguir obteniendo cartas
if (deck.length===0){
    throw "NO hay cartas en el deck";
}
    const carta = deck.pop();
    
    //console.log(deck);
    //console.log(carta);
    return carta;
}
 //pedirCarta();
const valorCarta = (carta) =>{

    const valor = carta.substring (0, carta.length - 1);
    
    // let puntos = 0;
    // if(isNaN(valor)){
    //     puntos = (valor === 'A') ? 11 : 10;
    // }else{
    //     puntos = valor *1; //convertir un string a numero
    // }
    // console.log(puntos);

    //resumiendo codigo
    return (isNaN(valor)) ?
            (valor === "A") ? 11 : 10
            : valor * 1 ;

}
//const valor = valorCarta(pedirCarta());
//console.log({valor});

//Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText=puntosJugador;

})

