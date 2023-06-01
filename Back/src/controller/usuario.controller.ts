import { Usuario } from "../model/usuario";
import * as DaoUsuario from "../dao/usuario.dao";
export const GetUsuarios = async (): Promise<Usuario[]> => {
    try {
        let p: Usuario[] = await DaoUsuario.ListaUsuarios();
        return p;
    } catch (error) {
        throw error;
    }
}

export const addUsuario = async (p: Usuario): Promise<boolean> => {
    try {
        return DaoUsuario.CrearUsuario(p);
    } catch (error) {
        throw (error);
    }
}

export const updateUsuario = async(u: Usuario): Promise<boolean> => {
    try {
        return DaoUsuario.ActualizarUsuario(u);
    } catch (error) {
        throw error;
    }
}

export const deleteUsuario = async(uId: number): Promise<boolean> => {
    try {
        return DaoUsuario.EliminarUsuario(uId);
    } catch (error) {
        throw error;
    }
}