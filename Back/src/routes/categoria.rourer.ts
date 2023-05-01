import express from "express";
import * as controller from '../controller/categoria.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getCategorias()
    )
});

export default router;
