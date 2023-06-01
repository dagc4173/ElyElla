import express from "express";
import * as controller from '../controller/venta.controller';
import { Venta } from "../model/venta";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetVentas()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addVenta(req.body as Venta)
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
    const ventaId: number = parseInt(req.params.id);
    const venta: Venta = req.body as Venta;

    controller.updateVenta(venta)
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
    const ventaId: number = parseInt(req.params.id);

    controller.deleteVenta(ventaId)
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