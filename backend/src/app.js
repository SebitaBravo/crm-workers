import express from 'express';
import cors from 'cors';
import trabajadorRoutes from './routes/trabajadorRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import rolRoutes from './routes/rolRoutes.js';
import contactoEmergenciaRoutes from './routes/contactoEmergenciaRoutes.js';
import cargaFamiliarRoutes from './routes/cargaFamiliarRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trabajadores', trabajadorRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/roles', rolRoutes);
app.use('/api/contacto-emergencia', contactoEmergenciaRoutes);
app.use('/api/carga-familiar', cargaFamiliarRoutes);

// Error Handling
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

export default app;