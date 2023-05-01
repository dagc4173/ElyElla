import express from "express";
import * as controller from '../controller/usuario.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getUsuarios()
    )
});

export default router;
