const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Estoy en la página de inicio');
});

app.get('/acerca-de', (req, res) => {
    res.send('Estoy en la página donde hablamos de nosotros');
});

app.get('/contacto', (req, res) => {
    res.send('Estoy en la página de contacto');
});

app.get('*', (req, res) => {
    res.send('Esa página no existe amiwo.');
});

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));