import { Persona } from "../model/persona";
export const getPersonas = () : Persona[]=>{
    let p: Persona[] = [];
    p.push({id: 1, nombre: "alex"});
    p.push({id: 2, nombre: "diego"});
    return p;
} 