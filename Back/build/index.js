"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const perosna_rourer_1 = __importDefault(require("./routes/perosna.rourer"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api/persona', perosna_rourer_1.default);
app.listen(port, () => {
    console.log(`El servidor esta escuchando el puerto ${port}`);
});
