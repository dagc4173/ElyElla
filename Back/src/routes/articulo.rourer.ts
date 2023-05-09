import express from "express";
import * as controller from '../controller/articulo.controller';

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

export default router;