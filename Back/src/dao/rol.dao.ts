import GetConnection from "../conexion/conexion";
import { Rol } from "../model/rol";

export const ListaRols = async (): Promise<Rol[]> => {
    try {
        let sql = "Select * FROM Rol;";
        const pool = await GetConnection();
        let rs = await pool.query<Rol>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearRol(p: Rol): Promise<boolean> {
    try {
        let sql = `INSERT INTO Rol(Nombre, Descripcion, Estado) 
        VALUES ('${p.Nombre}', '${p.Descripcion}', '${p.Estado}')`
        const pool = await GetConnection();
        let rs = await pool.query(sql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw (error);
    }
}

