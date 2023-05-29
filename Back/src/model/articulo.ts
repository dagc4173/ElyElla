export class Articulo {
    constructor() {
        this.IdArticulo =0;
        this.IdCategoria = 0;
        this.Codigo = "";
        this.Nombre = "";
        this.PrecioCompra = 0;
        this.Stock = 0;
        this.Descripcion = "";
        this.Imagen = "";
        this.Estado = false;
        this.PrecioVenta = 0;
    }
    IdArticulo: number;
    IdCategoria: number;
    Codigo: string;
    Nombre: string;
    PrecioCompra: number;
    Stock: number;
    Descripcion: string;
    Imagen: string;
    Estado: boolean;
    PrecioVenta: number;
}