
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
