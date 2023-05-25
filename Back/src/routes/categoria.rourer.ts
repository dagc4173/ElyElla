import express from "express";
import * as controller from '../controller/categoria.controller';
import { Categoria } from "../model/categoria";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetCategoria()
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

export default router;