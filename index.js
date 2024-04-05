const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use('/api', middlewares, router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor JSON corriendo en el puerto ${PORT}`);
});
