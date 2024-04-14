// Configuracion del servidor
import express from "express";
import path from 'path';

const app = express();

app.use(express.static('src/public')); // se usa express para mostrara la carpeta public
app.use('/css', express.static('node_modules/spectre.css/dist')); // se usa spectre.css para el diseño de la aplicación

export default app;