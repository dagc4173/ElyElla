import express from "express";
import * as controller from '../controller/usuario.controller';
import { Usuario } from "../model/usuario";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetUsuarios()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addUsuario(req.body as Usuario)
    .then((f)=>{
        if(f)
        res.status(201).send();
        else
        res.status(500).send();
    })
    .catch((e) => {
        res.status(500).json(e);
    })
})

router.put('/:id', (req, res) => {
    const usuarioId: number = parseInt(req.params.id);
    const usuario: Usuario = req.body as Usuario;

    controller.updateUsuario(usuario)
        .then((success) => {
            if (success)
                res.status(200).send();
            else
                res.status(500).send();
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.delete('/:id', (req, res) => {
    const usuarioId: number = parseInt(req.params.id);

    controller.deleteUsuario(usuarioId)
        .then((success) => {
            if (success)
                res.status(200).send();
            else
                res.status(500).send();
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

export default router;