import { Router } from 'express';
import {
  CarritoController
} from '../controller/carritoController';
const router = Router();

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
    msg: 'El carrito y todos sus productos',
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
    fecha: Date.now(),
    cantidad: cantidad
  };

  const resultado = await CarritoController.save(id, carritoProducto);
  // console.log('resultado', resultado);
  res.json({
    msg: 'Se agregó un producto nuevo al carrito',
    resultado,
  });
});

router.delete('/:id/productos/:id_prod', async (req, res) => {
  const { id, id_prod } = req.params;
  const resultadoDelete = await CarritoController.deleteByIdProducto(id, id_prod);
  res.json({
    msg: 'Ok, producto eliminado',
      resultadoDelete,
  });
});


export default router;
