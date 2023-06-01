import { Rol } from "../model/rol";
import * as DaoRol from "../dao/rol.dao";
export const GetRols = async (): Promise<Rol[]> => {
    try {
        let r: Rol[] = await DaoRol.ListaRols();
        return r;
    } catch (error) {
        throw error;
    }
}

export const addRol = async (r: Rol): Promise<boolean> => {
    try {
        return DaoRol.CrearRol(r);
    } catch (error) {
        throw (error);
    }
}

export const updateRol = async(r: Rol): Promise<boolean> => {
    try {
        return DaoRol.ActualizarRol(r);
    } catch (error) {
        throw error;
    }
}

export const deleteRol = async(rId: number): Promise<boolean> => {
    try {
        return DaoRol.EliminarRol(rId);
    } catch (error) {
        throw error;
    }
}