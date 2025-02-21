class Inventario {
    constructor() {
        this._productos = [];
    }

    agregarStock(nombre, precio, cantidad) {
        if (precio < 0) {
            console.log("El precio no puede ser negativo.");
            return;
        }
        if (cantidad <= 0) {
            console.log("La cantidad debe ser mayor que 0.");
            return;
        }

        const productoExistente = this._productos.find(producto => producto.nombre === nombre);

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
            console.log(`Se agregaron ${cantidad} unidades de ${nombre}. Stock actual: ${productoExistente.cantidad}`);
        } else {
            this._productos.push({ nombre, precio, cantidad });
            console.log(`Producto ${nombre} agregado al inventario con ${cantidad} unidades.`);
        }
    }

    comprar(nombre, cantidad) {
        if (cantidad <= 0) {
            console.log("La cantidad a comprar debe ser mayor que 0.");
            return;
        }

        const producto = this._productos.find(producto => producto.nombre === nombre);

        if (!producto) {
            console.log("El producto no existe en el inventario.");
            return;
        }

        if (cantidad > producto.cantidad) {
            console.log(`No hay suficiente stock de ${nombre}. Stock disponible: ${producto.cantidad}`);
            return;
        }

        producto.cantidad -= cantidad;
        console.log(`Compra realizada de ${cantidad} unidades de ${nombre}. Stock restante: ${producto.cantidad}`);
    }

    mostrarInventario() {
        if (this._productos.length === 0) {
            console.log("El inventario está vacío.");
            return;
        }

        console.log("Inventario actual:");
        this._productos.forEach(producto => {
            console.log(`${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`);
        });
    }
}

const inventario = new Inventario();

inventario.agregarStock("Laptop HP", 1500, 5);
inventario.agregarStock("iPad 10", 800, 10);

inventario.mostrarInventario();

inventario.comprar("Laptop HP", 3);
inventario.comprar("iPad 10", -12);
inventario.comprar("Samsung S24", 2);

inventario.mostrarInventario();
