"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor() {
        this.IdArticulo = 0;
        this.IdCategoria = 0;
        this.Codigo = "";
        this.Nombre = "";
        this.PrecioCompra = 0;
        this.Stock = 0;
        this.Descripcion = "";
        this.Imagen = "";
        this.Estado = false;
        this.PrecioVenta = 0;
    }
}
exports.Articulo = Articulo;
