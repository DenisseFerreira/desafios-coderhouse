import { RegistroModel } from '../models/registros';

export const getlogin = async (req, res) => {
    const { email } = req.query;
    const login = await RegistroModel.findOne({email});
    // que no devuelva el pass
    login.password = '';
    res.json({
        Datos: login
      });
};

export const postlogin = async (req, res) => {
  const { email, password } = req.body;
  const login = await RegistroModel.findOne({
    email, 
    password
  });
  console.log('Usario logueado: ', login);

  // colocar en caso de error*** que el usario no este logueado
    res.json({
      login: login,
      msg: "Usuario logueado con éxito"
    });
};

export const updateLogin = async (req,res)=>  {
  console.log('put login*****', req.params);
  // const { email } = req.query;
  const { email } = req.params;
  const { esta_logueado } = req.body;
  const statusLogin = { esta_logueado };

  const resultadoUpDate = await RegistroModel.findOneAndUpdate(
    { email },
    statusLogin
  );
 
  res.json({
    resultadoUpDate,
  });
}
