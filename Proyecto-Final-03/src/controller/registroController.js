import { RegistroModel } from '../models/registros';

export const getAllregistros = async (req, res) => {
  const registros = await RegistroModel.find();
  res.json({
    Registros: registros,
    });
 }

export const crearRegistros = async (req, res) => {
  const { nombre, apellido, email, password, direccion, edad, telefono, foto, esta_logueado, token } = req.body;
  const newRegistro = await RegistroModel.create({
    nombre, 
    apellido, 
    email, 
    password, 
    direccion, 
    edad, 
    telefono, 
    foto,
    esta_logueado,
    token
  });
  console.log('Nuevo registrado es: ', newRegistro);
    res.json({
      newRegistro: newRegistro,
    });

}

export const deleteCarrito = async (req, res) => {
  const { id } = req.params;

  await RegistroModel.findByIdAndDelete(id);

  res.json({
    msg: 'Carrito eliminado',
  });

}

