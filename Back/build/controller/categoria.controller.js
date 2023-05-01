"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategorias = void 0;
const getCategorias = () => {
    let c = [];
    c.push({
        idCategoria: 1,
        nombre: "Electrónica",
        descripcion: "Productos electrónicos",
        estado: "Activo"
    });
    c.push({
        idCategoria: 2,
        nombre: "Hogar",
        descripcion: "Productos para el hogar",
        estado: "Activo"
    });
    return c;
};
exports.getCategorias = getCategorias;
