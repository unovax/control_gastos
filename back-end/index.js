// En index.js
import express from 'express';
import mongoose from 'mongoose';  // Asegúrate de importar mongoose aquí
import { PORT, mongoDBURL } from './config.js';
import router from './routes.js';
import { connectToDatabase } from './database.js';

const app = express();

connectToDatabase(mongoDBURL);

app.use('/', router);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        
        app.listen(PORT, function (error) {
            if (error) {
                console.error(`Error al iniciar el servidor: ${error}`);
                process.exit(1); // Terminar la aplicación en caso de error
            } else {
                console.log(`Servidor http corriendo en el puerto ${PORT}`);
            }
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Terminar la aplicación en caso de error
    });


