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

export default router;