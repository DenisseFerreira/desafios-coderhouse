export const infoProcess = async (req, res) => {
    console.log(`Directorio actual de trabajo ===> ${process.cwd()}`);
    console.log(`ID Del proceso actual ====> ${process.pid}`);
    console.log(`Version de NodeJs corriendo ====> ${process.version}`);
    console.log(`Titulo del proceso ====> ${process.title}`);
    console.log(`Sistema Operativo ====> ${process.platform}`);
    console.log(`Uso de memoria====> ${JSON.stringify(process.memoryUsage())}`);

    res.json({
        msg: "Se obtuvieron datos solicitados"
      });
}