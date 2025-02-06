//SANCION ECONOMICA

class Estudiante{
    constructor(nombre, falta){
        this._nombre = nombre;
        this._falta = falta;
    }

    calcularSancion(){
        let multa = 0;

        if (this._falta === "Llegada tardia") {
            multa = 1;
        } else if (this._falta === "Caminar por los pasillos en horas de clase") {
            multa = 3;
        } else if (this._falta === "No andar vestimenta apropiada") {
            multa = 5;
        } else if (this._falta === "No hacer uso adecuado de las instalaciones") {
            multa = 10;
        } else {
            return("Falta no reconocida.");
        }

        return (`${this._nombre} cometio la infracción ${this._falta}, debe pagar una multa de $${multa}.`);
    }
}

const estudiante1 = new Estudiante("Carlos", "Llegada tardia");
console.log(estudiante1.calcularSancion());

