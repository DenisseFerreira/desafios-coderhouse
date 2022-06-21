import { Router } from 'express';
import { numberRandoms } from '../controllers/randomsController';

const router = Router();

router.get('/', numberRandoms);

export default router;