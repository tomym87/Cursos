

let deck                = [];
const tipos             = ["C", "D", "H", "S"];
const especiales        = ["A", "J", "Q", "K"];
const btnPedir          = document.querySelector("#btnPedir");
const btnDetener        = document.querySelector("#btnDetener");


let puntosJugador       = 0;
let puntosComputadora   = 0;

// REferencias HTML
//const smalls = document.querySelectorAll();
const puntosHTML        = document.querySelectorAll('small');
const divCartasJugador  = document.querySelector('#jugador-cartas');
const divCartasComputadora  = document.querySelector('#computadora-cartas');




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
//Turno de la pc
const turnoComputadora = (puntosMinimos)=>{

   do{
    const carta = pedirCarta();

   puntosComputadora = puntosComputadora + valorCarta(carta);
   puntosHTML[1].innerText = puntosComputadora;

   const imgCarta = document.createElement('img');
   imgCarta.src = `assets/cartas/${carta}.png`;
   imgCarta.classList.add('carta');
   divCartasComputadora.append(imgCarta);

   if(puntosMinimos > 21){
       break;
   }

   }while((puntosComputadora < puntosMinimos) && (puntosMinimos<=21));
}



//const valor = valorCarta(pedirCarta());
//console.log({valor});

//Eventos
btnPedir.addEventListener('click', ()=>{
    
    
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText=puntosJugador;

    const imgCarta= document.createElement('img');
    imgCarta.src =`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento Mucho Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn('21, Genial ');
        btnPedir.disable= true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }

});

btnDetener.addEventListener('click', ()=>{

    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

})

//pruebas turno pc
