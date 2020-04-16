function Jugador(nombre){

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    // Funcion para curar a jugador objetivo
    this.curar = function( jugadorObjetivo){
        //validar si el jugador tiene suficiente sp para curar
        if(this.sp >= 40){
            //JUgador pierde sp al curar a otro
            this.sp -= 40;        
            //Forma larga
            //jugadorObjetivo.pv = jugadorObjetivo.pv + 20;
            //Forma corta
            jugadorObjetivo.pv += 20;
            
            
        }
        else{
            console.info(this.nombre + " no tiene suficiente sp")
        }
        this.estado(jugadorObjetivo);
    }
    //imprime el estado de vida de los jugadores
    this.estado = function(jugadorObjetivo){
        console.log(this);
        console.log(jugadorObjetivo);
    }
    //Funcion para atacar a jugador objetico
    this.tirarFlecha = function(jugadorObjetivo)
    {
        if(jugadorObjetivo.pv > 40 ){
        jugadorObjetivo.pv -= 40;

        }
        else{
            jugadorObjetivo.pv = 0;
            console.warn("el jugador "+ jugadorObjetivo.nombre + " se murio");
        }
        this.estado(jugadorObjetivo);
    }
    this.cachetada = function(jugadorObjetivo){
        if(jugadorObjetivo.pv >2){
            jugadorObjetivo.pv -= 2;
            console.warn("el jugador "+ jugadorObjetivo.nombre + " recibio una CACHETADA");
        }
        else{
            jugadorObjetivo.pv= 0;
            console.warn("el jugador "+ jugadorObjetivo.nombre + " se murio");
        }
        this.estado(jugadorObjetivo);
    }
};

function getRandom() {
    return Math.round(Math.random());
  }

function presionoClick(){
    legolas.tirarFlecha(gandalf);
    console.log(getRandom());

}
function presionoClick2(){
    gandalf.tirarFlecha(legolas);
    console.log(getRandom());
    
}

//jugadores
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);


