import express from "express";
import * as controller from '../controller/cliente.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getClientes()
    )
});

export default router;