export class Cliente {
    idCliente: number;
    tipoCliente: string;
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    direccion: string;
    telefono: string;
    email: string;

    constructor() {
        this.idCliente = 0;
        this.tipoCliente = "";
        this.nombre = "";
        this.tipoDocumento = "";
        this.numeroDocumento = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
    }
}
