import { Router } from 'express';
import info from './infoRouter';
import randoms from './randomsRouter';
 
const router = Router();

router.use('/info', info);
router.use('/randoms', randoms);

export default router;