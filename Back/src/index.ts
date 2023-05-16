import express from 'express';
import personaRouter from './routes/perosna.rourer'
import rolRouter from './routes/rol.rourer'
import articuloRouter from './routes/articulo.rourer'
import categoriaRouter from './routes/categoria.rourer'
import clienteRouter from './routes/cliente.rourer'
import detalleIngresoRouter from './routes/detalleIngreso.rourer'
import detalleVentaRouter from './routes/detalleVenta.rourer'
import ingresoRouter from './routes/ingreso.rourer'
import subcategoriaRouter from './routes/subcategoria.rourer'
import usuarioRouter from './routes/usuario.rourer'
import ventaRouter from './routes/venta.rourer'
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/persona', personaRouter);
app.use('/api/rol', rolRouter);
app.use('/api/articulo', articuloRouter);
app.use('/api/categoria', categoriaRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/detalleIngreso', detalleIngresoRouter);
app.use('/api/detalleVenta', detalleVentaRouter);
app.use('/api/ingreso', ingresoRouter);
app.use('/api/subcategoria', subcategoriaRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/venta', ventaRouter);

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando el puerto ${port}`)
});