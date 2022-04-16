const express = require('express');
const {ContenedorController} = require ('../controller/contenedor');
const router = express.Router();

router.get('/', async (req, res) => {
    const resultado = await ContenedorController.getAll();
    res.json({
      resultado,
    });
});

router.get('/:id', async (req, res) => {
    // let valorID = req.params.id;
    const { id } = req.params;
    const resultado = await ContenedorController.getById(id);
    if(!resultado)
    return res.status(404).json({
      msg:"Producto no encontrado"
    })
    res.json({
      data: resultado,
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

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, price, thumnail } = req.body;
  const resultado = await ContenedorController.getById(id);

  if(!resultado)
  return res.status(404).json({
    msg:"Producto no encontrado"
  });
  if (!title || !price || !thumnail)
  return res.status(400).json({
    msg: 'Falta nombre, precio o link de imagen en el Body',
  });

  const newProduc = {
    title,
    price,
    thumnail
  };
  const resultadoUpDate = await ContenedorController.upDate(id, newProduc);
  res.json({
    resultadoUpDate,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resultadoDelete = await ContenedorController.deleteById(id);
  res.json({
    msg: 'Ok, producto eliminado',
      resultadoDelete,
  });
});

module.exports = router