"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetallesIngreso = void 0;
const getDetallesIngreso = () => {
    let di = [];
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
};
exports.getDetallesIngreso = getDetallesIngreso;
