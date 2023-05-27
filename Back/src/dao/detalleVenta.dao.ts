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