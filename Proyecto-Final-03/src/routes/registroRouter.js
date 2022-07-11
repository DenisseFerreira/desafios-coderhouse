import { Router } from 'express';
import { getAllregistros, crearRegistros } from '../controller/registroController';
const router = Router();

router.get('/', getAllregistros);
router.post('/', crearRegistros);


export default router;
