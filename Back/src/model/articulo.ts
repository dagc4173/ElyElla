export class Articulo {
    constructor() {
        this.idArticulo = 0;
        this.idCategoria = 0;
        this.codigo = "";
        this.nombre = "";
        this.precioVenta = 0;
        this.stock = 0;
        this.descripcion = "";
        this.imagen = "";
        this.estado = false;
    }
    idArticulo: number;
    idCategoria: number;
    codigo: string;
    nombre: string;
    precioVenta: number;
    stock: number;
    descripcion: string;
    imagen: string;
    estado: boolean;
}