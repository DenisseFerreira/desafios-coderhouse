import mongoose from 'mongoose';
import { carritoCollectionName } from './carritos';

export const productosCollectionName = 'producto'; // colocar en singular

const productosSchema = new mongoose.Schema( // defino el esquema
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    foto: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    codigo: { type: Number, required: true },
    carritoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: carritoCollectionName,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
console.log('busco productos');
export const ProductosModel = mongoose.model(  // le paso el modelo y la coleccion 
  productosCollectionName,
  productosSchema
);
