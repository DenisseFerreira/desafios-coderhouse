import mongoose from 'mongoose';
import 'dotenv/config';

const connectionString = process.env.MONGO_ATLAS_SRV

export const initMongoDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('YA ESTOY CONECTADO', connectionString);
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};