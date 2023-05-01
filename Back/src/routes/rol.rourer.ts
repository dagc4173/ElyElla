import express from "express";
import * as controller from '../controller/rol.controller';

const router = express.Router();

router.get('/', (_, res) =>{
    res.json(
        controller.getRoles()
    )
});
export default router;
