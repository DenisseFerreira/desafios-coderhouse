import { UserModel } from '../models/user';
import { generateAuthToken } from '../services/auth';

export const getlogin = async (req, res) => {
  console.log('pruebas');
    // const { email } = req.query;
    // const login = await UserModel.findOne({email});
    // login.password = '';
    // res.json({
    //     Datos: login
    //   });
};

export const login = async (req, res, next) => {
  let { nombre, password } = req.body;
  const user = await UserModel.findOne({ nombre });
  
  if (!user || !user.isValidPassword(password))
    return res.status(401).json({ msg: 'Invalid nombre/Password' });

  const token = generateAuthToken(user);

  res.header('x-auth-token', token).json({
    msg: 'login OK',
    token,
  });
};

export const updateLogin = async (req,res)=>  {
  console.log('put login*****', req.params);
  // const { email } = req.query;
  const { email } = req.params;
  const { esta_logueado } = req.body;
  const statusLogin = { esta_logueado };

  const resultadoUpDate = await UserModel.findOneAndUpdate(
    { email },
    statusLogin
  );
 
  res.json({
    resultadoUpDate,
  });
}
