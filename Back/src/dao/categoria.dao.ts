import GetConnection from "../conexion/conexion";
import { Categoria } from "../model/categoria";

export const ListaCategoria = async (): Promise<Categoria[]> => {
    try {
        let sql = "Select * FROM Categoria;";
        const pool = await GetConnection();
        let rs = await pool.query<Categoria>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}