import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req:express.Request, res:express.Response)=> {
    res.send("Esta es la respuesta desde la api por get")
});

app.post("/",(req:express.Request, res:express.Response)=> {
    console.log(req.body);
    res.send("Esta es la respuesta desde la api por get")
});

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`)
});