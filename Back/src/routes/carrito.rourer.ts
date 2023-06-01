import express from "express";
import * as controller from '../controller/carrito.controller';
import { Carrito } from "../model/carrito";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetCarritos()
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

router.put('/:id', (req, res) => {
    const carritoId: number = parseInt(req.params.id);
    const carrito: Carrito = req.body as Carrito;

    controller.updateCarrito(carrito)
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
    const carritoId: number = parseInt(req.params.id);

    controller.deleteCarrito(carritoId)
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