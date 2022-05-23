const mongoose = require('mongoose');

const carritoCollectionName = 'carrito';

const carritoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const CarritoModel = mongoose.model(
  carritoCollectionName,
  carritoSchema
);



module.exports = carritoCollectionName;
module.exports = CarritoModel;