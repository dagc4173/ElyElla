import { Ingreso } from "../model/ingreso";

export const getIngresos = (): Ingreso[] => {
  let ingresos: Ingreso[] = [];
  ingresos.push({
    idIngreso: 1,
    idProveedor: 2,
    idUsuario: 1,
    tipoComprobante: "Factura",
    serieComprobante: "001",
    numeroComprobante: "123",
    fecha: new Date(2022, 4, 1),
    impuesto: 19,
    total: 225000,
    estado: "Activo",

  });
  ingresos.push({
    idIngreso: 2,
    idProveedor: 1,
    idUsuario: 2,
    tipoComprobante: "Boleta",
    serieComprobante: "002",
    numeroComprobante: "456",
    fecha: new Date(2022, 4, 2),
    impuesto: 10,
    total: 120000,
    estado: "Activo",
  });
  return ingresos;
}
