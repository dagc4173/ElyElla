import express from "express";
import * as controller from '../controller/venta.controller';

const router = express.Router();

router.get('/', (_, res) => {
    res.json(
        controller.getVentas()
    )
});

export default router;
