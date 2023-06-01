import GetConnection from "../conexion/conexion";
import { Ingreso } from "../model/ingreso";

export const ListaIngresos = async (): Promise<Ingreso[]> => {
    try {
        let sql = "Select * FROM Ingreso;";
        const pool = await GetConnection();
        let rs = await pool.query<Ingreso>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearIngreso(i: Ingreso): Promise<boolean> {
    try {
        let sql = `INSERT INTO Ingreso(IdProveedor, IdUsuario, TipoComprobante, SerieComprobante, NumeroComprobante, Fecha, Impuesto, Total, Estado) 
        VALUES ('${i.IdProveedor}', '${i.IdUsuario}', '${i.TipoComprobante}', '${i.SerieComprobante}', '${i.NumeroComprobante}', '${i.Fecha}', '${i.Impuesto}', '${i.Total}', '${i.Estado}')`
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

export const ActualizarIngreso = async (i: Ingreso): Promise<boolean> => {
    try {
        let sql = `UPDATE Ingreso SET IdProveedor = '${i.IdProveedor}', IdUsuario = '${i.IdUsuario}', TipoComprobante = '${i.TipoComprobante}', 
        SerieComprobante = '${i.SerieComprobante}', NumeroComprobante = '${i.NumeroComprobante}', Fecha = '${i.Fecha}', Impuesto = '${i.Impuesto}', Total = '${i.Total}', Estado = '${i.Estado}'
        WHERE IdIngreso = '${i.IdIngreso}'`;
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

export const EliminarIngreso = async (iId: number): Promise<boolean> => {
    try {
        let sql = `DELETE FROM Ingreso WHERE IdIngreso = '${iId}'`;
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