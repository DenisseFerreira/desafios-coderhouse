import { Router } from 'express';
import productos from './productosRouter';
import carrito from './carritoRouter';

const router = Router();

router.use('/productos', productos);
router.use('/carrito', carrito);

export default router;