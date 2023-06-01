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

export async function CrearRol(r: Rol): Promise<boolean> {
    try {
        let sql = `INSERT INTO Rol(Nombre, Descripcion, Estado) 
        VALUES ('${r.Nombre}', '${r.Descripcion}', '${r.Estado}')`
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

export const ActualizarRol = async (r:Rol): Promise<boolean> => {
    try {
        let sql = `UPDATERol SET Nombre = '${r.Nombre}', Descripcion = '${r.Descripcion}', Estado = '${r.Estado}'
        WHERE IdRol = '${r.IdRol}'`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);

        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const EliminarRol = async (rId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROMRol WHERE IdRolRol = '${rId}'`;
        const pool = await GetConnection();
        let rs = await pool.query(sql);

        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

