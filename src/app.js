const express = require('express');
const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Recursos estáticos
app.use(express.static('public'));


// Routes
const staticRoutes = require('./routes/statics');
const productRoutes = require('./routes/products');

app.use('/', staticRoutes);
app.use('/products', productRoutes);

// Es una ruta puntal y no un middleware
app.get('*', (req, res) => { res.render('404'); });

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));