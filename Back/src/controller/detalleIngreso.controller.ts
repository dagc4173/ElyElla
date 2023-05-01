import { DetalleIngreso } from "../model/detalleIngreso";

export const getDetallesIngreso = (): DetalleIngreso[] => {
    let di: DetalleIngreso[] = [];
    di.push({
        idDetalleIngreso: 1,
        idIngreso: 1,
        idArticulo: 1,
        cantidad: 10,
        precio: 25000.00,
    });
    di.push({
        idDetalleIngreso: 2,
        idIngreso: 2,
        idArticulo: 2,
        cantidad: 5,
        precio: 35000.00,
    });
    return di;
}