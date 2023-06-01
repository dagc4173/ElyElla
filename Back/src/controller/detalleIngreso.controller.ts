import { DetalleIngreso } from "../model/detalleIngreso";
import * as DaoDetalleIngreso from "../dao/detalleIngreso.dao";
export const GetDetalleIngresos = async (): Promise<DetalleIngreso[]> => {
    try {
        let di: DetalleIngreso[] = await DaoDetalleIngreso.ListaDetalleIngresos();
        return di;
    } catch (error) {
        throw error;
    }
}

export const addDetalleIngreso = async (di: DetalleIngreso): Promise<boolean> => {
    try {
        return DaoDetalleIngreso.CrearDetalleIngreso(di);
    } catch (error) {
        throw (error);
    }
}

export const updateDetalleIngreso = async(di: DetalleIngreso): Promise<boolean> => {
    try {
        return DaoDetalleIngreso.ActualizarDetalleIngreso(di);
    } catch (error) {
        throw error;
    }
}

export const deleteDetalleIngreso = async(diId: number): Promise<boolean> => {
    try {
        return DaoDetalleIngreso.EliminarDetalleIngreso(diId);
    } catch (error) {
        throw error;
    }
}