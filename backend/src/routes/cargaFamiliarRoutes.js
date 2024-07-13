const express = require('express');
const router = express.Router();
const cargaFamiliarController = require('../controllers/cargaFamiliarController');

router.get('/cargas-familiares', cargaFamiliarController.getAllCargasFamiliares);
router.post('/cargas-familiares', cargaFamiliarController.createCargaFamiliar);
router.put('/cargas-familiares/:id', cargaFamiliarController.updateCargaFamiliar);
router.delete('/cargas-familiares/:id', cargaFamiliarController.deleteCargaFamiliar);

module.exports = router;