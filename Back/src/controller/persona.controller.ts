import { Persona } from "../model/persona";
import * as DaoPersona from "../dao/personas.dao";
export const GetPersonas = async(): Promise<Persona[]> => {
    try{
        let p: Persona[] = await DaoPersona.ListaPersonas();
        return p;
    } catch (error) {
        throw error;
    }
} 