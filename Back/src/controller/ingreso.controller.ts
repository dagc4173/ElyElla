import { Ingreso } from "../model/ingreso";
import * as DaoIngreso from "../dao/ingreso.dao";
export const GetIngresos = async (): Promise<Ingreso[]> => {
    try {
        let i: Ingreso[] = await DaoIngreso.ListaIngresos();
        return i;
    } catch (error) {
        throw error;
    }
}

export const addIngreso = async (i: Ingreso): Promise<boolean> => {
    try {
        return DaoIngreso.CrearIngreso(i);
    } catch (error) {
        throw (error);
    }
}

export const updateIngreso = async(i: Ingreso): Promise<boolean> => {
    try {
        return DaoIngreso.ActualizarIngreso(i);
    } catch (error) {
        throw error;
    }
}

export const deleteIngreso = async(iId: number): Promise<boolean> => {
    try {
        return DaoIngreso.EliminarIngreso(iId);
    } catch (error) {
        throw error;
    }
}