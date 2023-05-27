export class Ingreso {
    constructor() {
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
    IdProveedor: number;
    IdUsuario: number;
    TipoComprobante: string;
    SerieComprobante: string;
    NumeroComprobante: string;
    Fecha: Date;
    Impuesto: number;
    Total: number;
    Estado: string;
}