import { Router } from 'express';
import productos from './productosRouter';
import carrito from './carritoRouter';
import signup from './signupRouter';
import login from './loginRouter';
import { checkAuth } from '../services/auth';

const router = Router();

router.use('/productos', productos);
router.use('/carrito', carrito);
router.use('/signup', signup);
router.use('/login', login);

// verificar data
router.get('/secure-data', checkAuth, (req, res) => {
    res.json({ msg: 'Llegaste a la data segura' });
  });

export default router;