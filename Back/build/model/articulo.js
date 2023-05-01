"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor() {
        this.idArticulo = 0;
        this.idCategoria = 0;
        this.codigo = "";
        this.nombre = "";
        this.precioVenta = 0;
        this.stock = 0;
        this.descripcion = "";
        this.imagen = "";
        this.estado = false;
    }
}
exports.Articulo = Articulo;
