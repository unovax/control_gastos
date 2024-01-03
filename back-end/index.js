<<<<<<< HEAD
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


=======

import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Configuraciones y middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', apiRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
>>>>>>> 0a99425fa8bc7f44f5e4c6d7ce38d91ca9eb576e
