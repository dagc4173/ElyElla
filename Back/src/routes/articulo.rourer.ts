import express from "express";
import * as controller from '../controller/articulo.controller';
import { Articulo } from "../model/articulo";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetArticulos()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addArticulo(req.body as Articulo)
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
    const articuloId: number = parseInt(req.params.id);
    const articulo: Articulo = req.body as Articulo;

    controller.updateArticulo(articulo)
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
    const articuloId: number = parseInt(req.params.id);

    controller.deleteArticulo(articuloId)
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