const express = require('express');
const {Contenedor} = require ('./contenedor');
const path = require ('path');

const app = express();
const port = 8080;
const server = app.listen(port, () =>
  console.log('Servidor escuchando en el puerto', port)
);

server.on('error', (err) => {
  console.log('ERROR', err);
});

app.get('/productos', async (req, res) => {
  const resultado = await Contenedor.getAll();
  res.json({
    resultado,
  });
});

app.get('/productoRandom', async (req, res) => {
  const resultProductos = await Contenedor.getAll();
  const fnRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const salida = resultProductos.map((a) => a.id);
  // console.log(salida);
  const random = fnRandom(0, salida.length);
  // console.log('RANDOM', random);
  const idRandom = salida[random];
  // console.log('IDRANDOM', idRandom);0
  const resultado = await Contenedor.getById(idRandom);
  res.json({
    resultado,
  });
});


app.get("/vista", (req, res) => {
  const myFilePath = path.resolve(__dirname, "./index.html");
  res.sendFile(myFilePath);
})