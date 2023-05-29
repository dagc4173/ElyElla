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
exports.ActualizarArticulo = exports.EliminarArticulo = exports.CrearArticulo = exports.ListaArticulos = void 0;
const conexion_1 = __importDefault(require("../conexion/conexion"));
const ListaArticulos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = "Select * FROM Articulo;";
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
exports.ListaArticulos = ListaArticulos;
function CrearArticulo(arti) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `INSERT INTO Articulo(IdCategoria, Codigo, Nombre, PrecioCompra, Stock, Descripcion, Imagen) 
        VALUES ('${arti.IdCategoria}', '${arti.Codigo}', '${arti.Nombre}', '${arti.PrecioCompra}', '${arti.Stock}', '${arti.Descripcion}', '${arti.Imagen}')`;
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
exports.CrearArticulo = CrearArticulo;
function EliminarArticulo(arti) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `DELETE FROM Articulo WHERE IdArticulo = ${arti.IdArticulo}`;
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
exports.EliminarArticulo = EliminarArticulo;
function ActualizarArticulo(arti) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `UPDATE Articulo SET IdCategoria = '${arti.IdCategoria}', Codigo = '${arti.Codigo}', Nombre = '${arti.Nombre}', PrecioCompra = '${arti.PrecioCompra}', Stock = '${arti.Stock}', Descripcion = '${arti.Descripcion}', Imagen = '${arti.Imagen}' WHERE IdArticulo = ${arti.IdArticulo}`;
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
exports.ActualizarArticulo = ActualizarArticulo;
