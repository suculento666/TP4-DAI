app.get ('/', (req, res) => {
    res.send('Bienvenido a mi aplicación Express!');
});

app.get ('/hora', (req, res) => {
    res.send(devolverHora());
});

app.get ('/fechaCompleta', (req, res) => {
    res.send(devolverFechacompleta());
});

