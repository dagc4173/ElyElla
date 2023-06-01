import express from "express";
import * as controller from '../controller/detalleIngreso.controller';
import { DetalleIngreso } from "../model/detalleIngreso";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetDetalleIngresos()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addDetalleIngreso(req.body as DetalleIngreso)
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
    const detalleIngresoId: number = parseInt(req.params.id);
    const detalleIngreso: DetalleIngreso = req.body as DetalleIngreso;

    controller.updateDetalleIngreso(detalleIngreso)
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
    const detalleIngresoId: number = parseInt(req.params.id);

    controller.deleteDetalleIngreso(detalleIngresoId)
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