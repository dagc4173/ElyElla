"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingreso = void 0;
class Ingreso {
    constructor() {
        this.idIngreso = 0;
        this.idProveedor = 0;
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
exports.Ingreso = Ingreso;
