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