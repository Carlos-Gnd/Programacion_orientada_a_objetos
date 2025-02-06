//CALCULAR EL IMC

class IMC{
    constructor(peso, altura){
        this._peso = peso;
        this._altura = altura;
    }

    calcular(){
        return(this._peso / (this._altura ** 2)).toFixed(2);
    }
}

const persona1 = new IMC(70.6, 1.82);
console.log(`Su IMC es: ${persona1.calcular()}`);
