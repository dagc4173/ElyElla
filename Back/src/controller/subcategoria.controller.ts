import { Subcategoria } from "../model/subcategoria";

export const getSubcategorias = (): Subcategoria[] => {
    let sc: Subcategoria[] = [];
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
}