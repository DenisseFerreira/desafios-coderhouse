import 'dotenv/config';
import server from './services/server';
import { initMongoDB } from './services/database';

const init = async () => {
  await initMongoDB();
  const puerto = process.env.PORT || 8085;

  server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
};

init();

/**inicio de la app
 * la levanta, para ello llama al server, que utiliza express
 * y a DB que inicia a Mongo
 * Además configura dotenv para variables de entorno 
 */