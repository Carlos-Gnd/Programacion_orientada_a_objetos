//CONVERTIR TEMPERATURA

class Temperatura{
    constructor(valor, escala){
        this._valor = valor;
        this._escala = escala;
    }

    convertir(){
        switch (this._escala) {
            case 1: //Fahrenheit a Celsius
                    return (`${this._valor}°F = ${(this._valor - 32) * 5/9}°C.`);
                break;
            case 2: //Celsius a Fahrenheit
                    return (`${this._valor}°C = ${(this._valor * 9/5) + 32}°F.`);
                break;
            case 3: //Kelvin a Fahrenheit
                    return (`${this._valor}°K = ${((this._valor - 273.15) * 9/5) + 32}°F.`);
                break;
            case 4: //Kelvin a Celsius
                    return (`${this._valor}°K = ${(this._valor - 273.15)}°C.`);
                break;
            default:
                return("Ingresa una opcion valida entre 1 y 4.");
                break;
        }
    }
}

const temp1 =  new Temperatura(50, 1);
console.log(temp1.convertir());