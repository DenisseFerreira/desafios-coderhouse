// import Config from '../config';
import { UserModel } from '../models/user';
import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {
  //get the private key from the config file -> environment variable
  const payload = {
    userId: user._id,
    nombre: user.nombre,
    apellido: user.apellido,
    email: user.email,
  };
//   console.log('payload',payload);
  const token = jwt.sign(payload, process.env.TOKEN_SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
};

export const checkAuth = async (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });
  
    try {
      const decode = jwt.verify(
        token,
        process.env.TOKEN_SECRET_KEY
      );
      console.log('TOKEN DECODIFICADO');
      // console.log(decode);
      const user = await UserModel.findById(decode.userId);
  
      if (!user) return res.status(400).json({ msg: 'Unauthorized' });
  
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({ msg: 'Unauthorized' });
    }
  };