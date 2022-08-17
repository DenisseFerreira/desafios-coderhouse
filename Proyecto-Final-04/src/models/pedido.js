import mongoose from 'mongoose';

export const pedidoCollectionName = 'pedido';

const pedidoSchema = new mongoose.Schema(
  {
    email: { type: String, required: true }
  },
  { timestamps: true, versionKey: false }
);
 
export const PedidoModel = mongoose.model(
  pedidoCollectionName,
  pedidoSchema
);


