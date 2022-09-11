import { Router } from 'express';
import { getAllregistros, signup } from '../controller/signupController';

const router = Router();

router.get('/', getAllregistros);
router.post('/', signup);

export default router;
