import express from "express";
import * as controller from '../controller/categoria.controller';
import { Categoria } from "../model/categoria";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetCategorias()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addCategoria(req.body as Categoria)
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
    const categoriaId: number = parseInt(req.params.id);
    const categoria: Categoria = req.body as Categoria;

    controller.updateCategoria(categoria)
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
    const categoria: number = parseInt(req.params.id);

    controller.deleteCategoria(categoria)
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