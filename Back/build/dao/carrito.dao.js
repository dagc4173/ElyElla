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
exports.EliminarCarrito = exports.ActualizarCarrito = exports.CrearCarrito = exports.ListaCarritos = void 0;
const conexion_1 = __importDefault(require("../conexion/conexion"));
const ListaCarritos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = "Select * FROM Carrito;";
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
exports.ListaCarritos = ListaCarritos;
function CrearCarrito(car) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `INSERT INTO Carrito(IdCliente, IdArticulo, Cantidad, Precio) 
        VALUES ('${car.IdCliente}', '${car.IdArticulo}', '${car.Cantidad}', '${car.Precio}')`;
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
exports.CrearCarrito = CrearCarrito;
const ActualizarCarrito = (car) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = `UPDATE Articulo SET IdCarrito = '${car.IdCarrito}', IdCliente = '${car.IdCliente}', IdArticulo = '${car.IdArticulo}', Cantidad = '${car.Cantidad}', 
        Precio = '${car.Precio}'
        WHERE IdCarrito = '${car.IdCarrito}'`;
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
exports.ActualizarCarrito = ActualizarCarrito;
const EliminarCarrito = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let sql = `DELETE FROM Carrito WHERE IdCarrito = '${carId}'`;
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
exports.EliminarCarrito = EliminarCarrito;
