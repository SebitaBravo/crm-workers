const express = require('express');
const cors = require('cors');
const app = express();
const trabajadorRoutes = require('./routes/trabajadorRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const rolRoutes = require('./routes/rolRoutes');
const contactoEmergenciaRoutes = require('./routes/contactoEmergenciaRoutes');
const cargaFamiliarRoutes = require('./routes/cargaFamiliarRoutes');

app.use(cors()); 
app.use(express.json());

app.use('/api', trabajadorRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', rolRoutes);
app.use('/api', contactoEmergenciaRoutes);
app.use('/api', cargaFamiliarRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).send('Algo salió mal!');
});

module.exports = app;