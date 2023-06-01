import GetConnection from "../conexion/conexion";
import { Persona } from "../model/persona";

export const ListaPersonas = async (): Promise<Persona[]> => {
    try {
        let sql = "Select * FROM Persona;";
        const pool = await GetConnection();
        let rs = await pool.query<Persona>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearPersona(p: Persona): Promise<boolean> {
    try {
        let sql = `INSERT INTO Persona(Nombre, TipoDocumento, NumeroDocumento, Direccion, Telefono, Email) 
        VALUES ('${p.Nombre}', '${p.TipoDocumento}', '${p.NumeroDocumento}', '${p.Direccion}', '${p.Telefono}', '${p.Email}')`
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

export const ActualizarPersona = async (p: Persona): Promise<boolean> => {
    try {
        let sql = `UPDATE Persona SET Nombre = '${p.Nombre}', TipoDocumento = '${p.TipoDocumento}', NumeroDocumento = '${p.NumeroDocumento}', 
        Direccion = '${p.Direccion}', Telefono = '${p.Telefono}', Email = '${p.Email}'
        WHERE IdPersona = '${p.IdPersona}'`;
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

export const EliminarPersona = async (pId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROM Persona WHERE IdPersona = '${pId}'`;
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