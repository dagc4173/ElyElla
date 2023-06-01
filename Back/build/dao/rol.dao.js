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
exports.EliminarRol = exports.ActualizarRol = exports.CrearRol = exports.ListaRols = void 0;
const conexion_1 = __importDefault(require("../conexion/conexion"));
const ListaRols = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = "Select * FROM Rol;";
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
exports.ListaRols = ListaRols;
function CrearRol(r) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `INSERT INTO Rol(Nombre, Descripcion, Estado) 
        VALUES ('${r.Nombre}', '${r.Descripcion}', '${r.Estado}')`;
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
exports.CrearRol = CrearRol;
const ActualizarRol = (r) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = `UPDATERol SET Nombre = '${r.Nombre}', Descripcion = '${r.Descripcion}', Estado = '${r.Estado}'
        WHERE IdRol = '${r.IdRol}'`;
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
exports.ActualizarRol = ActualizarRol;
const EliminarRol = (rId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = `DELETE FROMRol WHERE IdRolRol = '${rId}'`;
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
exports.EliminarRol = EliminarRol;
