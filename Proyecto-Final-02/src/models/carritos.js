import mongoose from 'mongoose';

export const carritoCollectionName = 'carrito';

const carritoSchema = new mongoose.Schema(
  {
    productos: { 
      type: Array, required: true,
      // cantidad: { type: Number, required: true }
    }
  },
  { timestamps: true, versionKey: false }
);

export const CarritoModel = mongoose.model(
  carritoCollectionName,
  carritoSchema
);


