import GetConnection from "../conexion/conexion";
import { Carrito } from "../model/carrito";

export const ListaCarritos = async (): Promise<Carrito[]> => {
    try {
        let sql = "Select * FROM Carrito;";
        const pool = await GetConnection();
        let rs = await pool.query<Carrito>(sql);

        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearCarrito(car: Carrito): Promise<boolean> {
    try {
        let sql = `INSERT INTO Carrito(IdCliente, IdArticulo, Cantidad, Precio) 
        VALUES ('${car.IdCliente}', '${car.IdArticulo}', '${car.Cantidad}', '${car.Precio}')`
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