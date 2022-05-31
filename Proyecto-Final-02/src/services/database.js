import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://dFerreiraAdmin:16Julio2012@cluster0.cifal.mongodb.net/myFirstDatabase'
// const connectionString = 'mongodb+srv://dFerreiraAdmin:16Julio2012@cluster0.cifal.mongodb.net/?retryWrites=true&w=majority'
// const connectionString = process.env.MONGO_ATLAS_SRV || 'mongodb://localhost:27017/ccinetto'

export const initMongoDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};