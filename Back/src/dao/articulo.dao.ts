import GetConnection from "../conexion/conexion";
import { Articulo } from "../model/articulo";

export const ListaArticulos = async (): Promise<Articulo[]> => {
    try {
        let sql = "Select * FROM Articulo;";
        const pool = await GetConnection();
        let rs = await pool.query<Articulo>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearArticulo(arti: Articulo): Promise<boolean> {
    try {
        let sql = `INSERT INTO Articulo(Nombre, TipoPersona, NumeroDocumento, Direccion, Telefono, Email) 
        VALUES ('${arti.IdCategoria}', '${arti.Codigo}', '${arti.Nombre}', '${arti.PrecioCompra}', '${arti.Stock}', '${arti.Descripcion}', '${arti.Imagen}', '${arti.Estado}', '${arti.PrecioVenta}' )`
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