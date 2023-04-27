import express from "express";
import * as controller from '../controller/persona.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getPersonas()
    )
});
export default router;
