import { Router } from 'express';
import { infoProcess } from '../controllers/infoController';

const router = Router();

router.get('/', infoProcess);

export default router;