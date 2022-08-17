import { Router } from 'express';
import productos from './productosRouter';
import carrito from './carritoRouter';
import registro from './registroRouter';
import login from './loginRouter';

const router = Router();

router.use('/productos', productos);
router.use('/carrito', carrito);
router.use('/registro', registro);
router.use('/login', login);

export default router;