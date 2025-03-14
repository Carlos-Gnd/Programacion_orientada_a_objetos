let Programacion1 = {
    materia1(){
        console.log(`${this.nombre} tiene clases de programación 1`)
    }
}

let Logica2 = {
    materia2(){
        console.log(`${this.nombre} tiene clases de lógica 2`)
    }
}

class Estudiante {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Matricula extends Estudiante {
    constructor(nombre){
        super(nombre);
    }

    matricular(){
        console.log(`El estudiante ${this.nombre} se ha matriculado`)
    }
}

Object.assign(Matricula.prototype, Programacion1, Logica2);

const Estudiante1 = new Matricula("Juan Perez");
Estudiante1.materia1();
Estudiante1.materia2();