var express = require('express');
var app = express();
var { saludo, fecha } = require('./middleware');




// Rutas
app.get("/", (req, res) => {
    res.send("Estás en la raíz");
});

app.get("/home", fecha, (req, res) => {
    res.send("Estás en home");
});

app.get("/trabajo", saludo, (req, res) => {
    res.send("Estás en trabajo");
});

module.exports = app;
