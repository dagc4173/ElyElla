import { Rol } from "../model/rol";
import * as DaoRol from "../dao/rol.dao";
export const GetRols = async (): Promise<Rol[]> => {
    try {
        let p: Rol[] = await DaoRol.ListaRols();
        return p;
    } catch (error) {
        throw error;
    }
}

export const addRol = async (p: Rol): Promise<boolean> => {
    try {
        return DaoRol.CrearRol(p);
    } catch (error) {
        throw (error);
    }
}