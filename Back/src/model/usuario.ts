export class Usuario {
    constructor() {
        this.IdUsuario = 0;
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
    IdUsuario: number;
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