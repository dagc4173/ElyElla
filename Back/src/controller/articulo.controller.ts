import { Articulo } from "../model/articulo";
import * as DaoArticulo from "../dao/articulo.dao";
export const GetArticulos = async(): Promise<Articulo[]> => {
    try{
        let arti: Articulo[] = await DaoArticulo.ListaArticulos();
        return arti;
    } catch (error) {
        throw error;
    }
}

export const addArticulo = async(arti: Articulo): Promise<boolean> => {
    try {
        return DaoArticulo.CrearArticulo(arti);
    } catch (error) {
        throw(error);
    }
    }

    export const eliminarArticulo = async (arti: Articulo): Promise<boolean> => {
        try {
            return DaoArticulo.EliminarArticulo(arti);
        } catch (error) {
            throw error;
        }
    }

    export const actualizarArticulo = async (arti: Articulo): Promise<boolean> => {
        try {
            return DaoArticulo.ActualizarArticulo(arti);
        } catch (error) {
            throw error;
        }
    }
    