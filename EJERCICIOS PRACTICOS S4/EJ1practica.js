/*este codigo es parecido al anterior, solo que me puse
a experimentar cambiar parametros con ayuda de chat gpt
para ver si podia hacer unas validaciones que en lugar de
imprimir los errores en los datos invalidos, me imprima
el ID de la persona y los parametros en los que hay un error sin
modificar los datos anteriormente impresos en consola.
 */

class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
        this._id = id;
        this._nombre = nombre;
        this._telefono = telefono;
        this._genero = genero;
        this._departamento = departamento;
        this._error = ""; // Propiedad para almacenar errores
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
            this._error += "El nombre debe ser un texto.\n";
            return;
        }
        if (nuevoNombre.length > 20) {
            this._error += "El nombre no debe tener más de 20 caracteres.\n";
            return;
        }
        this._nombre = nuevoNombre;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(nuevoTelefono) {
        if (typeof nuevoTelefono !== 'number' || nuevoTelefono.toString().length !== 8) {
            this._error += "El número de teléfono debe ser de 8 dígitos.\n";
            return;
        }
        this._telefono = nuevoTelefono;
    }

    get genero() {
        return this._genero === "M" ? "Masculino" : this._genero === "F" ? "Femenino" : "Inválido";
    }

    set genero(nuevoGenero) {
        if (nuevoGenero !== "M" && nuevoGenero !== "F") {
            this._error += "El género debe ser 'M' o 'F'.\n";
            return;
        }
        this._genero = nuevoGenero;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(nuevoDepartamento) {
        const DepartPermitidos = ["Ventas", "RRHH", "Administracion"];
        if (!DepartPermitidos.includes(nuevoDepartamento)) {
            this._error += "Departamento no válido. Debe ser 'Ventas', 'RRHH' o 'Administración'.\n";
            return;
        }
        this._departamento = nuevoDepartamento;
    }

    mostrarInformacion() {
        if (this._error) {
            console.log(`Errores en la persona con ID: ${this._id}`);
            console.log(this._error);
            console.log("===================================");
            this._error = ""; // Reinicia errores después de mostrar
        } else {
            console.log(`ID: ${this._id}`);
            console.log(`Nombre: ${this._nombre}`);
            console.log(`Teléfono: ${this._telefono}`);
            console.log(`Género: ${this.genero}`);
            console.log(`Departamento: ${this._departamento}`);
            console.log("===================================");
        }
    }
}

// Datos válidos
const persona1 = new Persona(1, "Juan Pérez", 12345678, "M", "Ventas");
persona1.mostrarInformacion();

persona1.id = 2;
persona1.nombre = "Ana Gómez";
persona1.telefono = 98765432;
persona1.genero = "F";
persona1.departamento = "RRHH";
persona1.mostrarInformacion();

// Datos inválidos
persona1.id = 3;
persona1.nombre = "Carlos Alberto Granados Amaya";
persona1.telefono = 5949353925;
persona1.genero = "G";
persona1.departamento = "Gerencia";
persona1.mostrarInformacion();
