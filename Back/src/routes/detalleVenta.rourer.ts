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

export default router;