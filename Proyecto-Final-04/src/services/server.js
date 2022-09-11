import express from 'express';
import mainRouter from '../routes/index';
import http from 'http';
import session from 'express-session';

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

export default httpServer;
