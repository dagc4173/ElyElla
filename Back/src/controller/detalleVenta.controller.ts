import { DetalleVenta } from "../model/detalleVenta";
import * as DaoDetalleVenta from "../dao/detalleVenta.dao";
export const GetDetalleVentas = async (): Promise<DetalleVenta[]> => {
    try {
        let dv: DetalleVenta[] = await DaoDetalleVenta.ListaDetalleVentas();
        return dv;
    } catch (error) {
        throw error;
    }
}

export const addDetalleVenta = async (dv: DetalleVenta): Promise<boolean> => {
    try {
        return DaoDetalleVenta.CrearDetalleVenta(dv);
    } catch (error) {
        throw (error);
    }
}