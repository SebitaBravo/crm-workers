const express = require('express');
const router = express.Router();
const contactoEmergenciaController = require('../controllers/contactoEmergenciaController');

router.get('/contactos-emergencia', contactoEmergenciaController.getAllContactosEmergencia);
router.post('/contactos-emergencia', contactoEmergenciaController.createContactoEmergencia);
// Agrega más rutas para actualizar y eliminar contactos de emergencia

module.exports = router;