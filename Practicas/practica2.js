class Producto{
    constructor(producto, id, fechaIngreso, codigo, precio){
        this._id = id;
        this._producto = producto;
        this._codigo = codigo;
        this._fechaIngreso = fechaIngreso;
        this._precio = precio;
    }

    registro(incrementoPrecio, decrementoPrecio){
        incrementoPrecio = (this._precio + (this._precio * 0.2));
        decrementoPrecio = (this._precio - (this._precio * 0.2));
        console.log(`El producto ${this._producto} con id ${this._id} ingreso la fecha ${this._fechaIngreso} tiene el codigo ${this._codigo} tiene un precio de: ${this._precio}. un precio con 20% más ${incrementoPrecio} y otro con un 20% menos ${decrementoPrecio}.`);
    }
}

const producto1 = new Producto("Auto", "2390", "12/04/2024", "AU2024", 4000);
producto1.registro()