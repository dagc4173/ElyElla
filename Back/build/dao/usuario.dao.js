"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarUsuario = exports.ActualizarUsuario = exports.CrearUsuario = exports.ListaUsuarios = void 0;
const conexion_1 = __importDefault(require("../conexion/conexion"));
const ListaUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = "Select * FROM Usuario;";
        const pool = yield (0, conexion_1.default)();
        let rs = yield pool.query(sql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    }
    catch (error) {
        throw error;
    }
});
exports.ListaUsuarios = ListaUsuarios;
function CrearUsuario(u) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `INSERT INTO Usuario(IdRol, Nombre, TipoDocumento, NumeroDocumento, Direccion, Telefono, Email, Clave, Estado) 
        VALUES ('${u.IdRol}', '${u.Nombre}', '${u.TipoDocumento}', '${u.NumeroDocumento}', '${u.Direccion}', '${u.Telefono}', '${u.Email}', '${u.Clave}', '${u.Estado}')`;
            const pool = yield (0, conexion_1.default)();
            let rs = yield pool.query(sql);
            if (rs != undefined) {
                return rs.rowsAffected.length == 1;
            }
            return false;
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.CrearUsuario = CrearUsuario;
const ActualizarUsuario = (u) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = `UPDATE Usuario SET IdRol = '${u.IdRol}', Nombre = '${u.Nombre}', TipoDocumento = '${u.TipoDocumento}', 
        NumeroDocumento = '${u.NumeroDocumento}', Direccion = '${u.Direccion}', Telefono = '${u.Telefono}', Email = '${u.Email}', Clave = '${u.Clave}', Estado = '${u.Estado}'
        WHERE IdUsuario = '${u.IdUsuario}'`;
        const pool = yield (0, conexion_1.default)();
        let rs = yield pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    }
    catch (error) {
        throw error;
    }
});
exports.ActualizarUsuario = ActualizarUsuario;
const EliminarUsuario = (uId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = `DELETE FROM Usuario WHERE IdUsuario = '${uId}'`;
        const pool = yield (0, conexion_1.default)();
        let rs = yield pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    }
    catch (error) {
        throw error;
    }
});
exports.EliminarUsuario = EliminarUsuario;
