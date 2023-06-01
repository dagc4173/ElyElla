import { Venta } from "../model/venta";
import * as DaoVenta from "../dao/venta.dao";
export const GetVentas = async (): Promise<Venta[]> => {
    try {
        let v: Venta[] = await DaoVenta.ListaVentas();
        return v;
    } catch (error) {
        throw error;
    }
}

export const addVenta = async (v: Venta): Promise<boolean> => {
    try {
        return DaoVenta.CrearVenta(v);
    } catch (error) {
        throw (error);
    }
}

export const updateVenta = async(v: Venta): Promise<boolean> => {
    try {
        return DaoVenta.ActualizarVenta(v);
    } catch (error) {
        throw error;
    }
}

export const deleteVenta = async(vId: number): Promise<boolean> => {
    try {
        return DaoVenta.EliminarVenta(vId);
    } catch (error) {
        throw error;
    }
}