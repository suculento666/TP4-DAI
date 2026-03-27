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

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});