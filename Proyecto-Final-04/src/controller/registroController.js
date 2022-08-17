import { UserModel } from '../models/user';
import passport from 'passport';

export const getAllregistros = async (req, res) => {
  const registros = await UserModel.find();
  res.json({
    Registros: registros,
    });
 }

export const crearRegistros = 
// async (req, res) => {
  // const { nombre, apellido, email, password, direccion, edad, telefono, foto, esta_logueado, token } = req.body;
  // const newRegistro = await UserModel.create({
  //   nombre, 
  //   apellido, 
  //   email, 
  //   password, 
  //   direccion, 
  //   edad, 
  //   telefono, 
  //   foto,
  //   esta_logueado,
  //   token
  // });
  // console.log('Nuevo registrado es: ', newRegistro);
  //   res.json({
  //     newRegistro: newRegistro,
  //   });

  async (req, res, next) => {
    const passportOptions = { badRequestMessage: 'Falta email / password' };
    passport.authenticate('registro', passportOptions, (err, user, info) => {
      console.log('Registro en controllers ...');
      console.log('err',err, user, info);
      if (err) {
        return next(err);
      }
      if (!user) return res.status(401).json(info);
  
      res.json({ msg: 'registro OK' });
    })(req, res, next);

}

// no me queda claro si usare esta
export const deleteCarrito = async (req, res) => {
  const { id } = req.params;

  await UserModel.findByIdAndDelete(id);

  res.json({
    msg: 'Carrito eliminado',
  });

}

