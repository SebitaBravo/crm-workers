const express = require('express');
const router = express.Router();
const contactoEmergenciaController = require('../controllers/contactoEmergenciaController');

router.get('/contactos-emergencia', contactoEmergenciaController.getAllContactosEmergencia);
router.post('/contactos-emergencia', contactoEmergenciaController.createContactoEmergencia);
router.put('/contactos-emergencia/:id', contactoEmergenciaController.updateContactoEmergencia);
router.delete('/contactos-emergencia/:id', contactoEmergenciaController.deleteContactoEmergencia);

module.exports = router;