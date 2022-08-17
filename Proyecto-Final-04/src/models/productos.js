import mongoose from 'mongoose';

export const productosCollectionName = 'producto'; // colocar en singular

const productosSchema = new mongoose.Schema( // defino el esquema
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    foto: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    codigo: { type: Number, required: true }
  },
  { timestamps: true, versionKey: false }
);
export const ProductosModel = mongoose.model(  // le paso el modelo y la coleccion 
  productosCollectionName,
  productosSchema
);
