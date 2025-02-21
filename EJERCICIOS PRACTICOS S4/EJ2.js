class Persona {
    constructor(nombre, fechaNacimiento) {
        this._nombre = nombre;
        this.fechaNacimiento = fechaNacimiento; 
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fecha) {
        // Validación de formato YYYY-MM-DD
        const nuevaFecha = /^\d{4}-\d{2}-\d{2}$/;
        if (!nuevaFecha.test(fecha)) {
            console.log("La fecha de nacimiento no es valida. El formato debe ser YYYY-MM-DD.");
            this._fechaNacimiento = null;
            return;
        }

        // Verificar si la fecha es válida
        const fechaValidada = new Date(fecha);
        if (isNaN(fechaValidada.getTime())) {
            console.log("La fecha de nacimiento no es valida.");
            this._fechaNacimiento = null;
            return;
        }

        this._fechaNacimiento = fechaValidada;
    }

    calcularAnios() {
        if (!this._fechaNacimiento) {
            return null;
        }

        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNacimiento.getFullYear();
        
        // si la persona aun no ha cumplido años este año
        if (hoy.getMonth() < this._fechaNacimiento.getMonth() ||
            (hoy.getMonth() === this._fechaNacimiento.getMonth() && hoy.getDate() < this._fechaNacimiento.getDate())) {
            edad = edad - 1;
        }

        return edad;
    }

    mostrarInfo() {
        const edad = this.calcularAnios();
        if (edad === null) {
            console.log("La estructura de la fecha de nacimiento no es valida.");
        } else {
            console.log(`Nombre: ${this._nombre}.`);
            console.log(`Edad: ${edad}.`);
        }
    }
}

//fecha valida
const persona1 = new Persona("Carlos", "2004-09-23");
persona1.mostrarInfo();

//fecha invalida
const persona2 = new Persona("Juan", "23-09-2004"); // Fecha en formato incorrecto
persona2.mostrarInfo();

//fecha valida
persona2.fechaNacimiento = "1995-05-15";
persona2.mostrarInfo();
