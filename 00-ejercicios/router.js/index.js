const express = require('express');
// const mainRouter = require('./routes/index');

const app = express();
const port = 3000;
const server = app.listen(port, () =>
  console.log('Servidor escuchando en el puerto', port)
);

server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * DEFINICION DE LOS ROUTERS
 */

app.use('/api', mainRouter);