import { UserModel } from '../models/user';
import passport from 'passport';

export const getlogin = async (req, res) => {
    const { email } = req.query;
    const login = await UserModel.findOne({email});
    // que no devuelva el pass
    login.password = '';
    res.json({
        Datos: login
      });
};
const passportOptions = { };
export const login = async (req, res, next) => {
  // const { email, password } = req.body;
  // const login = await UserModel.findOne({
  //   email, 
  //   password
  // });
  // console.log('Usario logueado: ', login);

  // // colocar en caso de error*** que el usario no este logueado
  //   res.json({
  //     login: login,
  //     msg: "Usuario logueado con éxito"
  //   });
  console.log('llegando al login controller....');
  
  passport.authenticate('login', passportOptions),

    res.json({ msg: 'Welcome!', user: req.user });
 
  console.log('me fui');
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
