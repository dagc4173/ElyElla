"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubcategorias = void 0;
const getSubcategorias = () => {
    let sc = [];
    sc.push({
        idSubcategoria: 1,
        idCategoria: 1,
        nombre: "Subcategoría 1",
        descripcion: "Descripción de la subcategoría 1",
        estado: "Activo",
    });
    sc.push({
        idSubcategoria: 2,
        idCategoria: 1,
        nombre: "Subcategoría 2",
        descripcion: "Descripción de la subcategoría 2",
        estado: "Activo",
    });
    return sc;
};
exports.getSubcategorias = getSubcategorias;
