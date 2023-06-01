"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetalleVenta = exports.updateDetalleVenta = exports.addDetalleVenta = exports.GetDetalleVentas = void 0;
const DaoDetalleVenta = __importStar(require("../dao/detalleVenta.dao"));
const GetDetalleVentas = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let dv = yield DaoDetalleVenta.ListaDetalleVentas();
        return dv;
    }
    catch (error) {
        throw error;
    }
});
exports.GetDetalleVentas = GetDetalleVentas;
const addDetalleVenta = (dv) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return DaoDetalleVenta.CrearDetalleVenta(dv);
    }
    catch (error) {
        throw (error);
    }
});
exports.addDetalleVenta = addDetalleVenta;
const updateDetalleVenta = (dv) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return DaoDetalleVenta.ActualizarDetalleVenta(dv);
    }
    catch (error) {
        throw error;
    }
});
exports.updateDetalleVenta = updateDetalleVenta;
const deleteDetalleVenta = (dvId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return DaoDetalleVenta.EliminarDetalleVenta(dvId);
    }
    catch (error) {
        throw error;
    }
});
exports.deleteDetalleVenta = deleteDetalleVenta;
