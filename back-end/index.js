// En index.js
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index.js';
import { PORT, mongoDBURL, mongoDBName } from './config.js';
import { connectToDatabase } from './database.js';

connectToDatabase(mongoDBURL + mongoDBName);

const app = express();

// Configuraciones y middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', apiRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

