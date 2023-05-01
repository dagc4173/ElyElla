import express from "express";
import * as controller from '../controller/detalleIngreso.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getDetallesIngreso()
    )
});

export default router;
