import express from 'express';
import personaRouter from './routes/perosna.rourer'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/persona', personaRouter);

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`)
});