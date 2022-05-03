const express = require('express');
const mainRouter = require('./router');
const app = express();
app.use(express.static('public'));
const port = 8080;
const server = app.listen(port, () =>
  console.log('Servidor escuchando en el puerto', port)
);

server.on('error', (err) => {
  console.log('ERROR', err);
});

app.use(express.json());

//middleware
// Verificación de usuario
const superUsuario = (req, res, next) => {
  let bodyUser = req.body.user;
  let nombreUrl = req.url;
  let metodoCrud = req.method;
  
  if(nombreUrl == '/api/productos' && metodoCrud== 'POST' && bodyUser != 'userAdmin') {
    res.json({
      msg: {
            "error": 'Usuario no autorizado',
            "descripcion": nombreUrl
          }
    });
    return;
  }
  
  if(nombreUrl.includes('/api/productos')  && metodoCrud== 'PUT' && bodyUser != 'userAdmin') {
    console.log('paso');
    res.json({
      msg: {
        "error": 'Usuario no autorizado',
        "descripcion": nombreUrl
      }
    });
    return;
  }
  if(nombreUrl.includes('/api/productos') && metodoCrud== 'DELETE' && bodyUser != 'userAdmin') {
    res.json({
      msg:{
        "error": 'Usuario no autorizado',
        "descripcion": nombreUrl
      }
    });
    return;
  }

  next();
};

app.use(superUsuario);
app.use(express.urlencoded({extended:true}));
app.use('/api', mainRouter);
