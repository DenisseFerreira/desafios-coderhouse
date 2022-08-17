import { Router } from 'express';
import { getlogin, login, updateLogin } from '../controller/loginController';
const router = Router();
import passport from 'passport';
const passportOptions = { };


router.get('/', getlogin);
// router.post('/',   passport.authenticate('login', passportOptions),
// (req, res) => {
//   res.json({ msg: 'Welcome!', user: req.user });
// });
router.post('/', login);
router.put('/:email', updateLogin);

export default router;
