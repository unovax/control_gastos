// En database.js
import mongoose from 'mongoose';

export const connectToDatabase = async (mongoDBURL) => {
    try {
        await mongoose.connect(mongoDBURL);
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
};
