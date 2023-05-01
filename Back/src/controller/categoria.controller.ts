import { Categoria } from "../model/categoria";

export const getCategorias = () : Categoria[]=>{
    let c: Categoria[] = [];
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
} 