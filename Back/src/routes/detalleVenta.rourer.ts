import express from "express";
import * as controller from '../controller/detalleVenta.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getDetallesVenta()
    )
});

export default router;