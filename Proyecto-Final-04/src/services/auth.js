import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user';

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, email, password, done) => {
    console.log("LOGINNN en auth")
    const user = await UserModel.findOne({ email, password  });  //sino funciona utilizar la otra forma
  
    if (!user) return done(null, false, { mensaje: 'Usuario no encontrado' });

    console.log('ENCONTRE UN USUARIO', user);
    return done(null, user);
};


const registro = async (req, nombre, apellido,email, password, direccion, edad, telefono, foto, done) => {
    console.log('REGISTRO!! en auth');
    try {
      const newUser = await UserModel.create({ 
            nombre, 
            apellido, 
            email, 
            password, 
            direccion, 
            edad, 
            telefono, 
            foto
    });
    console.log('mi nuevo user', newUser);
      return done(null, newUser);
    } catch (err) {
      console.log('Hubo un error!');
      console.log(err);
      return done(null, false, { mensaje: 'Error Inesperado', err });
    }
};
  


export const loginFunc = new LocalStrategy(strategyOptions, login);
export const registroFunc = new LocalStrategy(strategyOptions, registro);

passport.serializeUser((user, done) => {
    console.log('Se Ejecuta el serializeUser');
    done(null, user._id);
});

passport.deserializeUser((userId, done) => {
    console.log('Se Ejecuta el desserializeUser');
    UserModel.findById(userId).then((user) => {
      return done(null, user);
    })
});