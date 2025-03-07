class Padre{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludo(){
        console.log(`Hola ${this.nombre}`)
    }
}

class Hija extends Padre{
    constructor(nombre){
        super(nombre);
    }
    
    saludo(){
        console.log(`Hola que hay ${this.nombre}`);
    }
}

// let objeto = new Padre('Juan');
// objeto.saludo();

let objetoH = new Hija('Juan');
objetoH.mostrar();