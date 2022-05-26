import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://dFerreiraAdmin:16Julio2012@cluster0.cifal.mongodb.net/myFirstDatabase'
// const connectionString = 'mongodb+srv://dFerreiraAdmin:16Julio2012@cluster0.cifal.mongodb.net/?retryWrites=true&w=majority'
// const connectionString = process.env.MONGO_ATLAS_SRV || 'mongodb://localhost:27017/ccinetto'

export const initMongoDB = async () => {
  try {
    // console.log('CONECTANDO A MI DB');
    console.log('CONECTANDO A MI DB', connectionString)
    await mongoose.connect(connectionString);

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};

export const disconnectMongo = async() => {
	try {
    console.log('DESCONECTANDO DE MI DB');
    await mongoose.disconnect()

    console.log('DESCONEXION OK');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
}
