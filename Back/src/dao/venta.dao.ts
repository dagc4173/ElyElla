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

export const ActualizarVenta = async (v: Venta): Promise<boolean> => {
    try {
        let sql = `UPDATE Venta SET idCliente = '${v.idCliente}', idUsuario = '${v.idUsuario}', TipoComprobante = '${v.TipoComprobante}', 
        Fecha = '${v.Fecha}', Impuesto = '${v.Impuesto}', Total = '${v.Total}', Estado = '${v.Estado}'
        WHERE idVenta = '${v.idVenta}'`;
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

export const EliminarVenta = async (vId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROM Venta WHERE idVenta = '${vId}'`;
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

