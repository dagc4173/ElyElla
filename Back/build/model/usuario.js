"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
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
}
exports.Usuario = Usuario;
