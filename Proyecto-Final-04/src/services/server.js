import express from 'express';
import mainRouter from '../routes/index';
import http from 'http';
import session from 'express-session';
// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./../swaggerOptions";

const app = express();
const specs = swaggerJsDoc(options);

app.use(express.json());
app.use('/api', mainRouter);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs));
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
