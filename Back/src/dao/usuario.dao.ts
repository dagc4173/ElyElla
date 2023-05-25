import GetConnection from "../conexion/conexion";
import { Usuario } from "../model/usuario";

export const ListaUsuarios = async (): Promise<Usuario[]> => {
    try {
        let sql = "Select * FROM Usuario;";
        const pool = await GetConnection();
        let rs = await pool.query<Usuario>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearUsuario(u: Usuario): Promise<boolean> {
    try {
        let sql = `INSERT INTO Usuario(IdRol, Nombre, TipoDocumento, NumeroDocumento, Direccion, Telefono, Email, Clave, Estado) 
        VALUES ('${u.IdRol}', '${u.Nombre}', '${u.TipoDocumento}', '${u.NumeroDocumento}', '${u.Direccion}', '${u.Telefono}', '${u.Email}', '${u.Clave}', '${u.Estado}')`
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


