import { Venta } from "../model/venta";

export const getVentas = (): Venta[] => {
    let ventas: Venta[] = [];
    ventas.push({
        idVenta: 1,
        idCliente: 1,
        idUsuario: 1,
        tipoComprobante: "Factura",
        serieComprobante: "001",
        numeroComprobante: "000001",
        fecha: new Date(),
        impuesto: 0.19,
        total: 100000,
        estado: "Pendiente"
    });
    ventas.push({
        idVenta: 2,
        idCliente: 2,
        idUsuario: 2,
        tipoComprobante: "Boleta",
        serieComprobante: "002",
        numeroComprobante: "000002",
        fecha: new Date(),
        impuesto: 0.19,
        total: 50000,
        estado: "Pagado",
    });
    return ventas;
}
