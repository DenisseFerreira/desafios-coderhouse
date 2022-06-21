export const numberRandoms =  (c) => {
    // console.log('en random');
    const salida = [];
    for (let i = 0; i < cantidad; i++) {
        salida.push(Math.random())
    }

    res.json({
        msg:"ok"
    })
}

process.on('message', (cantidad) => {
    if (!cantidad)
      numberRandoms();
    else
    numberRandoms(cantidad)
    
  });