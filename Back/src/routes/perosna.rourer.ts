import express from "express";
import * as controller from '../controller/persona.controller';
import { Persona } from "../model/persona";

const router = express.Router();

router.get('/', (_, res) =>{
    controller.GetPersonas()
    .then((obj)=>{
        res.json(obj);
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    controller.addPersona(req.body as Persona)
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
    const personaId: number = parseInt(req.params.id);
    const persona: Persona = req.body as Persona;

    controller.updatePersona(persona)
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
    const personaId: number = parseInt(req.params.id);

    controller.deletePersona(personaId)
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