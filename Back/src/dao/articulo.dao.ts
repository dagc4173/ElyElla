import GetConnection from "../conexion/conexion";
import { Articulo } from "../model/articulo";

export const ListaArticulo = async (): Promise<Articulo[]> => {
    try {
        let sql = "Select * FROM Articulo;";
        const pool = await GetConnection();
        let rs = await pool.query<Articulo>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}