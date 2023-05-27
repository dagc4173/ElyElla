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

export default router;