import { UserModel } from '../models/user';
import { generateAuthToken, checkAuth } from '../services/auth';

export const getAllregistros = async (req, res) => {
  const registros = await UserModel.find();
  res.json({
    Registros: registros,
    });
 }

export const signup =  async (req, res, next) => {
  const { nombre, apellido, email, password, direccion, edad, telefono } = req.body;
  if (!nombre || !apellido || !email || !direccion || !edad || !telefono || !password)
  return res.status(400).json({ msg: 'Campos del body invalidos' });

  const query = {
    $or: [{ nombre: nombre }, { email: email }],
  };
  const user = await UserModel.findOne(query);
  console.log(user);
  if (user) return res.status(400).json({ msg: 'Usuario ya existe' });
  const userData = {
    nombre,
    apellido,
    password,
    email,
    direccion,
    edad,
    telefono,
  };

  const newUser = await UserModel.create(userData);
  const token = generateAuthToken(newUser);
  res.header('x-auth-token', token)
     .json({ msg: 'Registro creado', });

}

// no me queda claro si usare esta
export const deleteCarrito = async (req, res) => {
  const { id } = req.params;

  await UserModel.findByIdAndDelete(id);

  res.json({
    msg: 'Carrito eliminado',
  });

}

