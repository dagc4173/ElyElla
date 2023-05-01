"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = void 0;
const getUsuarios = () => {
    let usuarios = [];
    usuarios.push({
        idUsuario: 1,
        idRol: 2,
        nombre: "Juan Perez",
        tipoDocumento: "C.C.",
        numeroDocumento: "123456789",
        direccion: "Calle 123 # 45-67",
        telefono: "1234567",
        email: "juanperez@example.com",
        clave: "12345",
        estado: true
    });
    usuarios.push({
        idUsuario: 2,
        idRol: 1,
        nombre: "María Gómez",
        tipoDocumento: "C.C.",
        numeroDocumento: "987654321",
        direccion: "Calle 456 # 78-90",
        telefono: "7654321",
        email: "mariagomez@example.com",
        clave: "abcde",
        estado: true
    });
    return usuarios;
};
exports.getUsuarios = getUsuarios;
