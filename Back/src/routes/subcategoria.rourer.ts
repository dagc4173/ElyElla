import express from "express";
import * as controller from '../controller/subcategoria.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getSubcategorias()
    )
});

export default router;
