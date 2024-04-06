const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors'); // Importa el módulo CORS

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use(cors()); // Habilita CORS
app.use('/api', middlewares, router);

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Hubo un error en el servidor');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor JSON corriendo en el puerto ${PORT}`);
});
