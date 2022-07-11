import { Router } from 'express';
import { getlogin, postlogin, updateLogin } from '../controller/loginController';
const router = Router();

router.get('/', getlogin);
router.post('/', postlogin);
router.put('/:email', updateLogin);

export default router;
