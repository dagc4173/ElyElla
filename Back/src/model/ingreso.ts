export class Ingreso {
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
    idIngreso: number;
    idProveedor: number;
    idUsuario: number;
    tipoComprobante: string;
    serieComprobante: string;
    numeroComprobante: string;
    fecha: Date;
    impuesto: number;
    total: number;
    estado: string;
}