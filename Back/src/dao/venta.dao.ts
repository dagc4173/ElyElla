import GetConnection from "../conexion/conexion";
import { Venta } from "../model/venta";

export const ListaVentas = async (): Promise<Venta[]> => {
    try {
        let sql = "Select * FROM Venta;";
        const pool = await GetConnection();
        let rs = await pool.query<Venta>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearVenta(v: Venta): Promise<boolean> {
    try {
        let sql = `INSERT INTO Venta(idCliente, idUsuario, TipoComprobante, SerieComprobante, NumeroComprobante, Fecha, Impuesto, Total, Estado) 
        VALUES ('${v.idCliente}', '${v.idUsuario}', '${v.TipoComprobante}', '${v.SerieComprobante}', '${v.NumeroComprobante}', '${v.Fecha}', '${v.Impuesto}', '${v.Total}', '${v.Estado}')`
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

