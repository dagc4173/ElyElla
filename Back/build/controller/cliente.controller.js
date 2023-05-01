"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientes = void 0;
const getClientes = () => {
    let c = [];
    c.push({
        idCliente: 1,
        tipoCliente: "Persona Natural",
        nombre: "Juan Perez",
        tipoDocumento: "C.C.",
        numeroDocumento: "123456789",
        direccion: "Cra. 56 # 34-21",
        telefono: "3214567890",
        email: "juanperez@gmail.com",
    });
    c.push({
        idCliente: 2,
        tipoCliente: "Persona Jurídica",
        nombre: "Empresa SAS",
        tipoDocumento: "NIT",
        numeroDocumento: "987654321",
        direccion: "Av. 10 # 25-40",
        telefono: "3109876543",
        email: "empresa@gmail.com",
    });
    return c;
};
exports.getClientes = getClientes;
