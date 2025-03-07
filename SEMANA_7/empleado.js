class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }

    gestionar() {
        console.log(`${this.nombre} está gestionando el departamento ${this.departamento}`);
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguaje) {
        super(nombre, salario);
        this.lenguaje = lenguaje;
    }

    programar() {
        console.log(`${this.nombre} está programando en ${this.lenguaje}`);
    }
}

class Contabilidad extends Empleado {
    constructor(nombre, salario) {
        super(nombre, salario);
        this.calcularSueldoNeto();
    }

    calcularSueldoNeto() {
        const seguro = this.salario * 0.03;
        const renta = this.salario * 0.075;
        const sueldoNeto = this.salario - seguro - renta;
        console.log(`Sueldo neto de ${this.nombre}: ${sueldoNeto}`);
    }
}

let gerente1 = new Gerente("Réne", 5000, "ventas");
let desarrollador1 = new Desarrollador("Carlos", 3000, "C++");

// gerente1.mostrarInfo();
// gerente1.gestionar();

let contabilidad1 = new Contabilidad("Juan", 1000);
contabilidad1.mostrarInfo();