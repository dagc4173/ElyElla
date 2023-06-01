import express from "express";
import * as controller from '../controller/ingreso.controller';
import { Ingreso } from "../model/ingreso";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetIngresos()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addIngreso(req.body as Ingreso)
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
    const ingresoId: number = parseInt(req.params.id);
    const ingreso: Ingreso = req.body as Ingreso;

    controller.updateIngreso(ingreso)
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
    const ingresoId: number = parseInt(req.params.id);

    controller.deleteIngreso(ingresoId)
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