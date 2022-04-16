const express = require('express');
const {ContenedorController} = require ('../controller/contenedor');
const router = express.Router();

router.get('/', async (req, res) => {
    const resultado = await ContenedorController.getAll();
    res.json({
      resultado,
    });
});

// PARA GUARDAR NUEVO PRODUCTO
router.post('/guardar', async (req, res) => {
  // const  title = req.body.title;
  const { title, price, thumnail } = req.body;  //desestructuracion (sino hay que hacer uno por uno)

  if (!title || !price || !thumnail)
  return res.status(400).json({
    msg: 'Falta nombre, precio o link de imagen en el Body',
  });

  const newProduc = {
    title,
    price,
    thumnail
  };

  const resultado = await ContenedorController.save(newProduc);

  // res.json({
  //   msg: 'Se agregó un producto nuevo al contenedor',
  // });
  res.redirect('/')
});

module.exports = router