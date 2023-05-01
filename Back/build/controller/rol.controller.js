"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = void 0;
const getRoles = () => {
    let rol = [];
    rol.push({
        idRol: 1,
        Descripcion: "alex",
        nombre: "admin",
        Estado: true
    });
    rol.push({
        idRol: 2,
        Descripcion: "diego",
        nombre: "admin",
        Estado: false
    });
    return rol;
};
exports.getRoles = getRoles;
