const express = require('express');
const { CarritoController } = require ('../controller/carritoController');
const {ContenedorController} = require ('../controller/productosController');
const router = express.Router();

router.post('/', async (req, res) => { 
  const idCarrito = await CarritoController.crearCarrito();
  res.json({
    msg: 'Se creó un nuevo carrito',
    idCarrito,
  });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resultadoDelete = await CarritoController.deleteByIdCarrito(id);
  res.json({
    msg: 'Ok, producto eliminado',
      resultadoDelete,
  });
});

// Me permite listar todos los productos guardados en el carrito
router.get('/:id/productos', async (req, res) => {
  const { id } = req.params;
  const resultado = await CarritoController.getAllProductosCarrito(id);
  res.json({
    msg: 'Lista de carrito y sus productos',
    resultado,
  });
});


router.post('/:id/productos', async (req, res) => {
  const { id } = req.params;
  const { idProducto, cantidad } = req.body;
  // const buscaProducto = await ContenedorController.getById(idProducto);

  const carritoProducto = {
    idCarrito : id,
    idProducto: idProducto,
    cantidad: cantidad
  };

  const resultado = await CarritoController.save(id, carritoProducto);
  // console.log('resultado', resultado);
  res.json({
    msg: 'Se agregó un producto nuevo al carrito',
    resultado,
  });
});


module.exports = router


    // const newCarrito = {
    //   idCarrito,
    //   producto :{
    //       dateProducto,
    //       name,
    //       description,
    //       codigo,
    //       thumnail,
    //       price, 
    //       cantidad
    //   }
    // };
  