const express = require('express');
const http = require('http')
const io = require('socket.io')
const app = express();
const myServer = http.Server(app);
const port = 8080;
const mainRouter = require('./router');
const path = require ('path');
const {ContenedorController} = require('./controller/contenedor');

myServer.listen(port, () =>
  console.log('Servidor escuchando en el puerto', port)
);

app.use(express.static('public'));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../vistas');
app.set('views', viewsPath);

app.get('/', async (req, res) => {
  const contenedor = await ContenedorController.getAll();
  res.render('index', { contenedor });
});

const myWSServer = io(myServer);

const messages = [];
// const messages = [];

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);

myWSServer.on('connection',  (socket) => {
  
  //Cuando llega un msj nuevo enviado por el cliente
  socket.on('message', (data) => {
    // console.log(`El cliente ${socket.client.id} acaba de agregar un producto`);
    // console.log('DATA*****',data);
    const newMessage = {
      socketId: socket.client.id,
      message: data,
    };
    console.log('El nuevo mesj recibido en el SERVIDOR es:',newMessage);
    messages.push(newMessage);

    //SERVER LE ENVIA A TODOS LOS CLIENTES
    // myWSServer.emit('response', data) 
    myWSServer.emit('messages', messages);
  });
  socket.on('askData', (data) => {
    console.log('ME LLEGO DATA', data);
    console.log('ME LLEGO messages', messages);
    socket.emit('messages', messages);
  });
});