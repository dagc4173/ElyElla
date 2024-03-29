import { Persona } from "../model/persona";
import * as DaoPersona from "../dao/persona.dao";
export const GetPersonas = async (): Promise<Persona[]> => {
    try {
        let p: Persona[] = await DaoPersona.ListaPersonas();
        return p;
    } catch (error) {
        throw error;
    }
}

export const addPersona = async (p: Persona): Promise<boolean> => {
    try {
        return DaoPersona.CrearPersona(p);
    } catch (error) {
        throw (error);
    }
}