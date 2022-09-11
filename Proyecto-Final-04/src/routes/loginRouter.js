import { Router } from 'express';
import { getlogin, login, updateLogin } from '../controller/loginController';
const router = Router();

router.get('/', getlogin);
router.post('/', login);
router.put('/:email', updateLogin);

export default router;
