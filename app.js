const express = require('express');
const app = express();

app.listen(4200, console.log('Servidor esta funcionando en el puerto 4200'))

const routeHome = require ('./routes/home');
const routeSucursales = require ('./routes/sucursales');
const routeMarcas = require ('./routes/marcas');
const routeAutos = require('./routes/autos');

app.use('/', routeHome)
app.use('/sucursales',routeSucursales)
app.use('/marcas',routeMarcas)
app.use('/autos', routeAutos)
