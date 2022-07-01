import { Router } from 'express';
import info from './infoRouter';
import randoms from './randomsRouter';
 
const router = Router();

router.use('/info', info);
router.use('/randoms', randoms);
router.use('/', (req, res) => {
    console.log('Resolving / endpoint');
    res.json({
      pid: process.pid,
      msg: 'Hola mundo',
    });
  } );

export default router;