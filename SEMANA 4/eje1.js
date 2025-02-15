class Persona {
    constructor(nombre, edad){
        this._nombre = nombre; //Usamos una variable de respaldo el mombre
        this._edad = edad; //Usamos una variable de respaldo para la edad
    }

    get nombre(){
        return this._nombre; //El getter debe retornar un valor
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre; //Evitamos la recursion infinita
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaEdad){
        this._edad = nuevaEdad;
        if(nuevaEdad >= 18){
            console.log("Ya es mayor de edad.");
        }else{
            console.log("Aun es un niño.");
        }
    }

    mostrar(){
        let mensaje = `Mi nombre es ${this._nombre} y tengo ${this._edad} años.`;
        console.log(mensaje);
    }
}

const persona1 = new Persona("Carlos", 19);
// persona1.mostrar(); //Salida: Mi nombre es Carlos.
// persona1.nombre = "Réne";
// persona1.mostrar(); //Salida: Mi nombre es Réne.

persona1.edad = 20;
// persona1.mostrar();
