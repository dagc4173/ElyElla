import express from "express";
import * as controller from '../controller/rol.controller';
import { Rol } from "../model/rol";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetRols()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addRol(req.body as Rol)
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
