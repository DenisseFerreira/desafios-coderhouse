import mongoose from 'mongoose';

export const userCollectionName = 'user';

const userSchema = new mongoose.Schema(
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
 
export const UserModel = mongoose.model(
  userCollectionName,
  userSchema
);


