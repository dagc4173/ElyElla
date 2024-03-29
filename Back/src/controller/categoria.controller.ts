import { Categoria } from "../model/categoria";
import * as DaoCategoria from "../dao/categoria.dao";
export const GetCategorias = async(): Promise<Categoria[]> => {
    try{
        let cate: Categoria[] = await DaoCategoria.ListaCategorias();
        return cate;
    } catch (error) {
        throw error;
    } 
} 

export const addCategoria = async(cate: Categoria): Promise<boolean> => {
    try {
        return DaoCategoria.CrearCategoria(cate);
    } catch (error) {
        throw(error);
    }
    }