import mongoose from 'mongoose';

export const carritoCollectionName = 'carrito';

const carritoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const CarritoModel = mongoose.model(
  carritoCollectionName,
  carritoSchema
);


