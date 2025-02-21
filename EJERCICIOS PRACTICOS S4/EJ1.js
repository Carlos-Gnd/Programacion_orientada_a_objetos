class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
        this._id = id;
        this._nombre = nombre;
        this._telefono = telefono;
        this._genero = genero;
        this._departamento = departamento;
    }

    get id() {
        return this._id;
    }

    set id(nuevoId) {
        this._id = nuevoId;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        if (typeof nuevoNombre !== 'string') {
            console.log("El nombre debe ser un texto.");
            return;
        }
        if (nuevoNombre.length > 20) {
            console.log("El nombre no debe de tener mas de 20 caracteres.");
            return;
        }
        this._nombre = nuevoNombre;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(nuevoTelefono) {
        if (typeof nuevoTelefono !== 'number' || nuevoTelefono.toString().length !== 8) {
            console.log("El número de telefono debe ser de 8 digitos.");
            return;
        }
        this._telefono = nuevoTelefono;
    }

    get genero() {
        return this._genero === "M" ? "Masculino" : this._genero === "F" ? "Femenino" : "Inválido";
    }

    set genero(nuevoGenero) {
        if (nuevoGenero !== "M" && nuevoGenero !== "F") {
            console.log("El genero debe ser 'M' o 'F'.");
            return;
        }
        this._genero = nuevoGenero;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(nuevoDepartamento) {
        const DepartPermitidos = [
            "Ventas",
            "RRHH",
            "Administracion"
        ]
        if (!DepartPermitidos.includes(nuevoDepartamento)) {
            console.log("Departamento no valido. debe ser 'Ventas', 'RRHH' o 'Administracion'.");
            return;
        }
        this._departamento = nuevoDepartamento;
    }

    mostrarInformacion() {
        console.log(`ID: ${this._id}`);
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Teléfono: ${this._telefono}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Departamento: ${this._departamento}`);
        console.log("===================================")
    }
}

//datos validos
const persona1 = new Persona(1, "Juan Pérez", 12345678, "M", "Ventas");
persona1.mostrarInformacion();

persona1.id = 2;
persona1.nombre = "Ana Gómez";
persona1.telefono = 98765432;
persona1.genero = "F";
persona1.departamento = "RRHH";
persona1.mostrarInformacion();

//datos invalidos
persona1.id = 3;
persona1.nombre = "Carlos Alberto Granados Amaya";
persona1.telefono = 5949353925;
persona1.genero = "G";
persona1.departamento = "Gerencia";
persona1.mostrarInformacion();
