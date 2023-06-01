export class Venta {
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
    idVenta: number;
    idCliente: number;
    idUsuario: number;
    TipoComprobante: string;
    SerieComprobante: string;
    NumeroComprobante: string;
    Fecha: Date;
    Impuesto: number;
    Total: number;
    Estado: string;
}
