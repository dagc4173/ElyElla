"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = __importStar(require("../controller/rol.controller"));
const router = express_1.default.Router();
router.get('/', (_, res) => {
    controller.GetRols()
        .then((obj) => {
        res.json(obj);
    })
        .catch((err) => {
        res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
    controller.addRol(req.body)
        .then((f) => {
        if (f)
            res.status(201).send();
        else
            res.status(500).send();
    })
        .catch((e) => {
        res.status(500).json(e);
    });
});
router.put('/:id', (req, res) => {
    const rolId = parseInt(req.params.id);
    const rol = req.body;
    controller.updateRol(rol)
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
    const rolId = parseInt(req.params.id);
    controller.deleteRol(rolId)
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
exports.default = router;
