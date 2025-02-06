class Loteria{
    constructor(numElegido, apuesta){
        this._numElegido = numElegido;
        this._apuesta = apuesta;
        this._numGanador = Math.floor(Math.random() *100);
    }

    jugar(){
        if(this._numElegido === this._numGanador){
            return (`Felicidades, adivinaste el número ${this._numGanador} y ganaste $${this._apuesta * 20}.`);
        }else{
            return(`Número no acetado. El número ganador era ${this._numGanador}. Intentalo de nuevo.`);
        }
    }
}

const loteria1 = new Loteria(20, 10);
console.log(loteria1.jugar());