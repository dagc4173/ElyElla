export class Usuario {
    constructor() {
        this.idUsuario = 0;
        this.idRol = 0;
        this.nombre = "";
        this.tipoDocumento = "";
        this.numeroDocumento = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
        this.clave = null;
        this.estado = false;
    }
    idUsuario: number;
    idRol: number;
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    direccion: string;
    telefono: string;
    email: string;
    clave: any;
    estado: boolean;
}