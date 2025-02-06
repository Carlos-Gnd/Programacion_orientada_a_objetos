//CONTEO DE PALABRAS

class Nota{
    constructor(titulo, detalle){
        this._titulo = titulo;
        this._detalle = detalle;
    }

    contarPalabras(){
        const palabras = this._detalle.split(/\s+/).length;
        return(`La nota ${this._titulo} tiene ${palabras} palabras en el detalle.`);
    }
}

const nota1 = new Nota("Ejercicio", "El ejercicio esta completo :)");
console.log(nota1.contarPalabras());