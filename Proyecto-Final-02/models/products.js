const mongoose = require('mongoose');
const carritoCollectionName = require('./carritos');

export const productsCollectionName = 'product';

const productosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    carritoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: carritoCollectionName,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const ProductsModel = mongoose.model(
  productosCollectionName,
  productosSchema
);
