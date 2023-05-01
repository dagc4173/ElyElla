import { Rol } from "../model/rol";
export const getRoles = (): Rol[] => {
    let rol: Rol[] = [];
    rol.push({
        idRol: 1,
        Descripcion: "alex",
        nombre: "admin",
        Estado: true
    });
    rol.push({
        idRol: 2,
        Descripcion: "diego",
        nombre: "admin",
        Estado: false
    });
    return rol;
} 