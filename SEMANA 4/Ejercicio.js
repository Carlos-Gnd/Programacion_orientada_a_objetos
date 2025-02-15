class Persona {
    constructor(nombre, edad, telefono, dui) {
        this._nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.dui = dui;
    }

    // Getter y Setter para teléfono
    get telefono() {
        return this._telefono;
    }

    set telefono(numero) {
        let numStr = String(numero).trim();
        if (/^\d{8}$/.test(numStr)) {
            this._telefono = numStr;
        } else {
            console.log("Número de teléfono no válido. Debe tener exactamente 8 dígitos.");
            this._telefono = "Inválido";
        }
    }

    // Getter y Setter para DUI
    get dui() {
        return this._dui;
    }

    set dui(numDui) {
        let numStr = String(numDui).trim();
        if (this._edad < 18) {
            console.log("No tiene número de DUI porque es menor de edad.");
            this._dui = "No tiene";
        } else if (/^\d{9}$/.test(numStr)) {
            this._dui = numStr;
        } else {
            console.log("Número de DUI no válido. Debe tener exactamente 9 dígitos.");
            this._dui = "Inválido";
        }
    }

    // Getter y Setter para Edad
    get edad() {
        return this._edad;
    }

    set edad(valor) {
        let edadNum = Number(valor);
        if (!isNaN(edadNum) && edadNum >= 0) {
            this._edad = edadNum;
        } else {
            console.log("La edad debe ser un número positivo.");
        }
    }

    mostrar() {
        console.log(`Mi nombre es ${this._nombre}, tengo ${this._edad} años.`);
        console.log(`Mi número de teléfono es: ${this._telefono}`);
        console.log(`Mi número de DUI es: ${this._dui}`);
        console.log("-------------------------------------------------------------")
    }
}

const persona1 = new Persona("Carlos", 20, 70407404, 697965878); //datos validos
persona1.mostrar();

const persona2 = new Persona("Pedro", 10, 77673683, 3453482435545); //es menor de edad
persona2.mostrar();

const persona3 = new Persona("Juan", 20, 3232, 555345); //numero de DUI y telefono no validos
persona3.mostrar();