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
exports.CrearUsuario = exports.ListaUsuarios = void 0;
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