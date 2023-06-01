"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingreso = void 0;
class Ingreso {
    constructor() {
        this.IdIngreso = 0;
        this.IdProveedor = 0;
        this.IdUsuario = 0;
        this.TipoComprobante = "";
        this.SerieComprobante = "";
        this.NumeroComprobante = "";
        this.Fecha = new Date();
        this.Impuesto = 0;
        this.Total = 0;
        this.Estado = "";
    }
}
exports.Ingreso = Ingreso;
