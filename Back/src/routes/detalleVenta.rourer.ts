import express from "express";
import * as controller from '../controller/detalleVenta.controller';
import { DetalleVenta } from "../model/detalleVenta";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetDetalleVentas()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addDetalleVenta(req.body as DetalleVenta)
    .then((f)=>{
        if(f)
        res.status(201).send();
        else
        res.status(500).send();
    })
    .catch((e) => {
        res.status(500).json(e);
    })
})

router.put('/:id', (req, res) => {
    const detalleVentaId: number = parseInt(req.params.id);
    const detalleVenta: DetalleVenta = req.body as DetalleVenta;

    controller.updateDetalleVenta(detalleVenta)
        .then((success) => {
            if (success)
                res.status(200).send();
            else
                res.status(500).send();
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.delete('/:id', (req, res) => {
    const detalleVentaId: number = parseInt(req.params.id);

    controller.deleteDetalleVenta(detalleVentaId)
        .then((success) => {
            if (success)
                res.status(200).send();
            else
                res.status(500).send();
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

export default router;