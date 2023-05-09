import { Articulo } from "../model/articulo";
import * as DaoArticulo from "../dao/articulo.dao";
export const GetArticulos = async(): Promise<Articulo[]> => {
    try{
        let arti: Articulo[] = await DaoArticulo.ListaArticulo();
        return arti;
    } catch (error) {
        throw error;
    }
}