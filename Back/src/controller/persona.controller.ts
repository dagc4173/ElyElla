import { Persona } from "../model/persona";
export const getPersonas = (): Persona[] => {
    let p: Persona[] = [];
    p.push({
        idPersona: 1,
        Nombre: "alex",
        TipoPersona: "admin",
        TipoDocumento: "C.C.",
        NumeroDocumento: "70254545",
        Direccion: "Cra. 44 # 12 -18",
        Telefono: "3125468795",
        Email: "elyella.com.co"
    });
    p.push({
        idPersona: 2,
        Nombre: "diego",
        TipoPersona: "admin",
        TipoDocumento: "C.C.",
        NumeroDocumento: "71554545",
        Direccion: "Calle. 64 # 50 -18",
        Telefono: "3125362189",
        Email: "elyella.com.co"
    });
    return p;
} 