import GetConnection from "../conexion/conexion";
import { DetalleIngreso } from "../model/detalleIngreso";

export const ListaDetalleIngresos = async (): Promise<DetalleIngreso[]> => {
    try {
        let sql = "Select * FROM DetalleIngreso;";
        const pool = await GetConnection();
        let rs = await pool.query<DetalleIngreso>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearDetalleIngreso(di: DetalleIngreso): Promise<boolean> {
    try {
        let sql = `INSERT INTO DetalleIngreso(idIngreso, idArticulo, Cantidad, Precio) 
        VALUES ('${di.idIngreso}', '${di.idArticulo}', '${di.Cantidad}', '${di.Precio}')`
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

export const ActualizarDetalleIngreso = async (di: DetalleIngreso): Promise<boolean> => {
    try {
        let sql = `UPDATE DetalleIngreso SET idIngreso = '${di.idIngreso}', idArticulo = '${di.idArticulo}', Cantidad = '${di.Cantidad}', 
        Precio = '${di.Precio}'
        WHERE idDetalleIngreso = '${di.idDetalleIngreso}'`;
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

export const EliminarDetalleIngreso = async (diId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROM DetalleIngreso WHERE idDetalleIngreso = '${diId}'`;
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