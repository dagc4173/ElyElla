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