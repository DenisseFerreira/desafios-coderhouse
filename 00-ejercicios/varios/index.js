const http = require('http');
const server = http.createServer((request, response) => {
    // response.end('HOLA SOY DENISSE ');
    const fecha = new Date;
    const hora = fecha.getHours();
    response.end(fecha.toString());
    if(hora >= 6 && hora<= 12) console.log('Buenos dias');
    if(hora >= 13 && hora<= 19) console.log('Buenas tardes');
    if(hora >= 20 && hora<= 5) console.log('Buenas noches');
    if(hora >= 6 && hora<= 12) response.end('Buenos dias');
    if(hora >= 13 && hora<= 19) response.end('Buenas tardes');
    if(hora >= 20 && hora<= 5) response.end('Buenas noches');


  });

  const puerto = 8080;
server.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
