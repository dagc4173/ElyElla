"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
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
}
exports.Usuario = Usuario;
