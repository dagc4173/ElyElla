import { Articulo } from "../model/articulo";

export const getArticulos = (): Articulo[] => {
    let articulos: Articulo[] = [];

    articulos.push({
        idArticulo: 1,
        idCategoria: 1,
        codigo: "ART-001",
        nombre: "Laptop Lenovo",
        precioVenta: 800,
        stock: 10,
        descripcion: "Laptop Lenovo ThinkPad X1 Carbon",
        imagen: "lenovo.jpg",
        estado: true,
    });

    articulos.push({
        idArticulo: 2,
        idCategoria: 2,
        codigo: "ART-002",
        nombre: "Mouse Inalámbrico",
        precioVenta: 25,
        stock: 50,
        descripcion: "Mouse Inalámbrico Logitech MX Master 2S",
        imagen: "mouse.jpg",
        estado: true,
    });

    articulos.push({
        idArticulo: 3,
        idCategoria: 3,
        codigo: "ART-003",
        nombre: "Monitor 4K",
        precioVenta: 500,
        stock: 5,
        descripcion: "Monitor LG 27UL500-W de 27 pulgadas 4K UHD IPS con HDR 10",
        imagen: "monitor.jpg",
        estado: true,
    });

    return articulos;
}