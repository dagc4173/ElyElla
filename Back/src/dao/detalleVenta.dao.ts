import GetConnection from "../conexion/conexion";
import { DetalleVenta } from "../model/detalleVenta";

export const ListaDetalleVentas = async (): Promise<DetalleVenta[]> => {
    try {
        let sql = "Select * FROM DetalleVenta;";
        const pool = await GetConnection();
        let rs = await pool.query<DetalleVenta>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearDetalleVenta(dv: DetalleVenta): Promise<boolean> {
    try {
        let sql = `INSERT INTO DetalleVenta(idVenta, idArticulo, Cantidad, Precio, Descuento) 
        VALUES ('${dv.idVenta}', '${dv.idArticulo}', '${dv.Cantidad}', '${dv.Precio}', '${dv.Descuento}')`
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

export const ActualizarDetalleVenta = async (dv: DetalleVenta): Promise<boolean> => {
    try {
        let sql = `UPDATE DetalleVenta SET idVenta = '${dv.idVenta}', idArticulo = '${dv.idArticulo}', Cantidad = '${dv.Cantidad}', 
        Precio = '${dv.Precio}', Descuento = '${dv.Descuento}'
        WHERE idDetalleVenta = '${dv.idDetalleVenta}'`;
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

export const EliminarDetalleVenta = async (dvId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROM DetalleVenta WHERE IdDetalleVenta = '${dvId}'`;
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