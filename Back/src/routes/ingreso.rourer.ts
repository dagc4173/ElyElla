import express from "express";
import * as controller from '../controller/ingreso.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getIngresos()
    )
});

export default router;
