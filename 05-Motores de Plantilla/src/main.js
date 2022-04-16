const express = require('express');
const mainRouter = require('./router');
const path = require ('path');
const {ContenedorController} = require('./controller/contenedor');

const app = express();
const port = 8080;
const server = app.listen(port, () =>
  console.log('Servidor escuchando en el puerto', port)
);

server.on('error', (err) => {
  console.log('ERROR', err);
});


const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../vistas');
app.set('views', viewsPath);

app.get('/', async (req, res) => {
  const contenedor = await ContenedorController.getAll();
  res.render('index', { contenedor });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);
