import express from "express";
import * as controller from '../controller/articulo.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getArticulos()
    )
});

export default router;