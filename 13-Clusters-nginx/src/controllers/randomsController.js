let numeros = 0;
export const numberRandoms =  async (res, req) => {
    numeros += 1;
    console.log('Contador de visitas al sitio', numeros);
    res.json({
      msg: 'Contando visitas',
      numeros,
    });
}
