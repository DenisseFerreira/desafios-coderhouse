import mongoose from 'mongoose';

export const pedidoProductosCollectionName = 'pedidoProductos';

const pedidoProductosSchema = new mongoose.Schema(
  {
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true }
  },
  { timestamps: true, versionKey: false }
);
 
export const PedidoProductosModel = mongoose.model(
  pedidoProductosCollectionName,
  pedidoProductosSchema
);


