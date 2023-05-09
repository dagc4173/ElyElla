import express from "express";
import * as controller from '../controller/categoria.controller';

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

export default router;
