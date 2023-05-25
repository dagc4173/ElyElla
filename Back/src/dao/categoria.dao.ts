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

export async function CrearCategoria(cate: Categoria): Promise<boolean>{
    try {
        let sql = `INSERT INTO Categoria(Nombre, IdCategoriaPadre) VALUES ('${cate.Nombre}', '${cate.IdCategoriaPadre}')`
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if(rs != undefined){
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw(error);
    }
}