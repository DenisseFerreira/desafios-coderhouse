const express = require('express');
const {ContenedorController} = require ('../src/productosController');
const router = express.Router();

router.get('/', async (req, res) => {
    const resultado = await ContenedorController.getAll();
    res.json({
      resultado,
    });
});

router.get('/:id', async (req, res) => {
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


router.post('/', async (req, res) => {
  const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
  if (!nombre || !descripcion || !codigo || !foto || !precio || !stock)
  return res.status(400).json({
    msg: 'Falta información en el Body',
  });

  const newProduc = {
    nombre,
    descripcion,
    codigo,
    foto, 
    precio, 
    stock
  };

  const resultado = await ContenedorController.save(newProduc);

  res.json({
    msg: 'Se agregó un producto nuevo al contenedor',
    resultado
  });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
  const resultado = await ContenedorController.getById(id);

  if(!resultado)
  return res.status(404).json({
    msg:"Producto no encontrado"
  });
  if (!nombre || !descripcion || !codigo || !foto || !precio || !stock)
  return res.status(400).json({
    msg: 'Falta información el Body',
  });

  const newProduc = {
    nombre,
    descripcion,
    codigo, 
    foto, 
    precio, 
    stock
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