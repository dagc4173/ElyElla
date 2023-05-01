export class Venta {
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

    idVenta: number;
    idCliente: number;
    idUsuario: number;
    tipoComprobante: string;
    serieComprobante: string;
    numeroComprobante: string;
    fecha: Date;
    impuesto: number;
    total: number;
    estado: string;
}
