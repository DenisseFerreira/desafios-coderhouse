import express from 'express';
import mainRouter from '../routes/index';
import http from 'http';

import session from 'express-session';
import passport from 'passport';
import { registroFunc, loginFunc } from './auth';

const app = express();

app.use(express.json());

app.use('/api', mainRouter);

app.use(function (err, req, res, next) {
  return res.status('500').json({
    msg: 'There was an unexpected error',
    error: err.message,
  });
});

const httpServer = http.Server(app);

//Inicializacion basica de Express session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }),
);

//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(passport.initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
passport.use('login', loginFunc);

//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de REGISTRO de nuevos usuarios
passport.use('registro', registroFunc);

export default httpServer;
