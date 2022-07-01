import express from 'express';
import router from '../routes/index';
import http from 'http';

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(function (err, req, res, next) {
  return res.status('500').json({
    msg: 'There was an unexpected error',
    error: err.message,
  });
});

const httpServer = http.Server(app);

export default httpServer;
