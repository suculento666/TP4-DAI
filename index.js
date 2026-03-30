import express from 'express'; 
import { devolverFechacompleta, devolverHora } from './src/time.js';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/hora', (req, res) => {
    res.send(devolverHora());
});

app.get('/fechaCompleta', (req, res) => {
    res.send(devolverFechacompleta());
});


console.log('Hora:', devolverHora());
console.log('Fecha completa:', devolverFechacompleta());

// 404 middleware: rutas inexistentes
app.use((req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.send(`<h1>404 - No encontrado</h1><p>La ruta '${req.originalUrl}' no existe en este servidor.</p>`);
        return;
    }
    if (req.accepts('json')) {
        res.json({ error: 'Not found', path: req.originalUrl });
        return;
    }
    res.type('txt').send(`404 - Not found: ${req.originalUrl}`);
});

// Error-handling middleware (captura errores internos)
app.use((err, req, res, next) => {
    console.error('Error interno:', err);
    res.status(500);
    if (req.accepts('html')) {
        res.send(`<h1>500 - Error interno</h1><p>${err.message || 'Ha ocurrido un error.'}</p>`);
        return;
    }
    if (req.accepts('json')) {
        res.json({ error: 'Internal Server Error', message: err.message });
        return;
    }
    res.type('txt').send('500 - Internal Server Error');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});