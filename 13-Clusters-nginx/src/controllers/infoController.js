import { fork } from 'child_process';
import path from 'path';
import os from 'os';

const scriptPath = path.resolve(__dirname, '../utils/calculo.js');
const numCPUs = os.cpus().length;  

export const infoProcess = async (req, res) => {
    console.log(`Directorio actual de trabajo ===> ${process.cwd()}`);
    console.log(`ID Del proceso actual ====> ${process.pid}`);
    console.log(`Version de NodeJs corriendo ====> ${process.version}`);
    console.log(`Titulo del proceso ====> ${process.title}`);
    console.log(`Sistema Operativo ====> ${process.platform}`);
    console.log(`Uso de memoria====> ${JSON.stringify(process.memoryUsage())}`);
    console.log(`NUMERO DE CPUS ===> ${numCPUs}`);
    console.log(`PID MASTER ${process.pid}`);

    const computo = fork(scriptPath);
    computo.send('start');
    computo.on('message', (sum) => {
      res.json({
        resultado: sum,
        msg: "Se obtuvieron datos solicitados"
      });
    });
}