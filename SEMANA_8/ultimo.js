let Revision = {
    Diagnostico(){
        console.log(`El Diagnostico del paciente ${this.nombre} es diarrea.`)
    }
}

let Curacion = {
    Cura(){
        console.log(`El paciente ${this.nombre} debe tomar Nitrogresarilina.`)
    }
}

let Inyeccion = {
    Vacunar(){
        console.log(`El paciente ${this.nombre} ha sido inyectado con Paracetamol.`)
    }
}

class PacienteCanino{
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Consulta extends PacienteCanino{
    constructor(nombre){
        super(nombre);
    }

    consulta(){
        console.log(`El paciente ${this.nombre} ha sido atendido`)
    }
}

Object.assign(Consulta.prototype, Revision, Curacion, Inyeccion);

const Paciente1 = new Consulta("Firulais");
Paciente1.Diagnostico();
Paciente1.Cura();
Paciente1.Vacunar();
