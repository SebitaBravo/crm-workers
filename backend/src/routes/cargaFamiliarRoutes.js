const express = require('express');
const router = express.Router();
const cargaFamiliarController = require('../controllers/cargaFamiliarController');

router.get('/cargas-familiares', cargaFamiliarController.getAllCargasFamiliares);
router.post('/cargas-familiares', cargaFamiliarController.createCargaFamiliar);
// Agrega más rutas para actualizar y eliminar cargas familiares

module.exports = router;