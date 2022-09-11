import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const userCollectionName = 'user';

const UserSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: false },
    apellido: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    direccion: { type: String, required: false },
    edad: { type: Number, required: false },
    telefono: { type: Number, required: false },
    foto: { type: String, required: false },
    esta_logueado: { type: Boolean, required: false },
    token: { type: String, required: false },
  },
  { timestamps: true, versionKey: false }
);
    UserSchema.pre('save', async function (next) {
      const user = this;
      // console.log('this del user',user)
      const hash = await bcrypt.hash(user.password, 10);
      // console.log('el hash',hash);
      this.password = hash;
      next();
    });

    UserSchema.methods.isValidPassword = async function (password) {
      const user = this;
      // console.log('user isValidPassword',user);
      const compare = await bcrypt.compare(password, user.password);
      return compare;
    };
 
export const UserModel = mongoose.model( userCollectionName,  UserSchema );


