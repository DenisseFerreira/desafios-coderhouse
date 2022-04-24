const express = require('express');
const mainRouter = require('./router');
// const path = require ('path'); 

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
// app.use(express.urlencoded({extended:true}));
app.use('/api', mainRouter);

// app.get("/vista", (req, res) => {
//   const myFilePath = path.resolve(__dirname, "./public/index.html");
//   res.sendFile(myFilePath);
// })