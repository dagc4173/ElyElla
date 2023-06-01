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

export const ActualizarUsuario = async (u: Usuario): Promise<boolean> => {
    try {
        let sql = `UPDATE Usuario SET IdRol = '${u.IdRol}', Nombre = '${u.Nombre}', TipoDocumento = '${u.TipoDocumento}', 
        NumeroDocumento = '${u.NumeroDocumento}', Direccion = '${u.Direccion}', Telefono = '${u.Telefono}', Email = '${u.Email}', Clave = '${u.Clave}', Estado = '${u.Estado}'
        WHERE IdUsuario = '${u.IdUsuario}'`;
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

export const EliminarUsuario = async (uId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROM Usuario WHERE IdUsuario = '${uId}'`;
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

