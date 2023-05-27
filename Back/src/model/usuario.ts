export class Usuario {
    constructor() {
        this.IdRol = 0;
        this.Nombre = "";
        this.TipoDocumento = "";
        this.NumeroDocumento = "";
        this.Direccion = "";
        this.Telefono = "";
        this.Email = "";
        this.Clave = null;
        this.Estado = false;
    }
    IdRol: number;
    Nombre: string;
    TipoDocumento: string;
    NumeroDocumento: string;
    Direccion: string;
    Telefono: string;
    Email: string;
    Clave: any;
    Estado: boolean;
}