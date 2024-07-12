const express = require('express');
const router = express.Router();
const contactoEmergenciaController = require('../controllers/contactoEmergenciaController');

router.get('/contactos-emergencia', contactoEmergenciaController.getAllContactosEmergencia);
router.post('/contactos-emergencia', contactoEmergenciaController.createContactoEmergencia);

module.exports = router;