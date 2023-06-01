import { Carrito } from "../model/carrito";
import * as DaoCarrito from "../dao/carrito.dao";
export const GetCarritos = async(): Promise<Carrito[]> => {
    try{
        let car: Carrito[] = await DaoCarrito.ListaCarritos();
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

    export const updateCarrito = async(car: Carrito): Promise<boolean> => {
        try {
            return DaoCarrito.ActualizarCarrito(car);
        } catch (error) {
            throw error;
        }
    }
    
    export const deleteCarrito = async(carId: number): Promise<boolean> => {
        try {
            return DaoCarrito.EliminarCarrito(carId);
        } catch (error) {
            throw error;
        }
    }