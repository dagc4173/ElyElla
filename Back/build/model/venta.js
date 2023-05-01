"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
class Venta {
    constructor() {
        this.idVenta = 0;
        this.idCliente = 0;
        this.idUsuario = 0;
        this.tipoComprobante = "";
        this.serieComprobante = "";
        this.numeroComprobante = "";
        this.fecha = new Date();
        this.impuesto = 0;
        this.total = 0;
        this.estado = "";
    }
}
exports.Venta = Venta;
