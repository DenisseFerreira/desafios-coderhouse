import mongoose from 'mongoose';

export const registroCollectionName = 'registro';

const registroSchema = new mongoose.Schema(
  {
    email: { type: String, required: true }
  },
  { timestamps: true, versionKey: false }
);
 
export const RegistroModel = mongoose.model(
  registroCollectionName,
  registroSchema
);


