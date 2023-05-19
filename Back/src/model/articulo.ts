export class Articulo {
    constructor() {
        this.idArticulo = 0;
        this.idCategoria = 0;
        this.Codigo = "";
        this.Nombre = "";
        this.PrecioCompra = 0;
        this.Stock = 0;
        this.Descripcion = "";
        this.Imagen = null;
        this.Estado = false;
        this.PrecioVenta = 0;
    }
    idArticulo: number;
    idCategoria: number;
    Codigo: string;
    Nombre: string;
    PrecioCompra: number;
    Stock: number;
    Descripcion: string;
    Imagen: Uint8Array | null;
    Estado: boolean;
    PrecioVenta: number;
}