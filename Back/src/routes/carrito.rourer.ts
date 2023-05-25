import express from "express";
import * as controller from '../controller/carrito.controller';
import { Carrito } from "../model/carrito";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetCarrito()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addCarrito(req.body as Carrito)
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