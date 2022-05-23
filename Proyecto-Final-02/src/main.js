const express = require('express');
const mainRouter = require('./router');
const app = express();
const mongoose = require('mongoose');
app.use(express.static('public'));


const connectionString = 'mongodb+srv://dFerreiraAdmin:16Julio2012@cluster0.cifal.mongodb.net/?retryWrites=true&w=majority'
const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB', connectionString)
    await mongoose.connect(connectionString);
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};


const init = async () => {
  await initMongoDB();
  const port = 8080;
  const server = app.listen(port, () =>
    console.log('Servidor escuchando en el puerto', port)
  );
};

init();

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
