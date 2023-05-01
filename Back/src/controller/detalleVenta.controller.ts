import { DetalleVenta } from "../model/detalleVenta";

export const getDetallesVenta = (): DetalleVenta[] => {
    let dv: DetalleVenta[] = [];
    dv.push({
        idDetalleVenta: 1,
        idVenta: 1,
        idArticulo: 1,
        cantidad: 2,
        precio: 25000.00,
        descuento: 0.00,
    });
    dv.push({
        idDetalleVenta: 2,
        idVenta: 2,
        idArticulo: 2,
        cantidad: 3,
        precio: 35000.00,
        descuento: 5000.00,
    });
    return dv;
}