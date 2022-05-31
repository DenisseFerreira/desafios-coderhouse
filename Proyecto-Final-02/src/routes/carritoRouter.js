import { Router } from 'express';
import { getAllCarrito, crearCarrito, deleteCarrito, agregarProducto, getAllProductosCarrito, deleteProducto } from '../controller/carritoController';
const router = Router();

router.get('/', getAllCarrito);
router.get('/:id/productos', getAllProductosCarrito);
router.post('/', crearCarrito);
router.delete('/:id', deleteCarrito);
router.delete('/:id/productos/:idProducto', deleteProducto);
router.post('/:id/productos', agregarProducto);


export default router;
