"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
class Venta {
    constructor() {
        this.idVenta = 0;
        this.idCliente = 0;
        this.idUsuario = 0;
        this.TipoComprobante = "";
        this.SerieComprobante = "";
        this.NumeroComprobante = "";
        this.Fecha = new Date();
        this.Impuesto = 0;
        this.Total = 0;
        this.Estado = "";
    }
}
exports.Venta = Venta;
