import { Carrito } from "../model/carrito";
import * as DaoCarrito from "../dao/carrito.dao";
export const GetCarrito = async(): Promise<Carrito[]> => {
    try{
        let car: Carrito[] = await DaoCarrito.ListaCarrito();
        return car;
    } catch (error) {
        throw error;
    }
} 

export const addCarrito = async(car: Carrito): Promise<boolean> => {
    try {
        return DaoCarrito.CrearCarrito(car);
    } catch (error) {
        throw(error);
    }
    }