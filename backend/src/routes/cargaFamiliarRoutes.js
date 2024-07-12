const express = require('express');
const router = express.Router();
const cargaFamiliarController = require('../controllers/cargaFamiliarController');

router.get('/cargas-familiares', cargaFamiliarController.getAllCargasFamiliares);
router.post('/cargas-familiares', cargaFamiliarController.createCargaFamiliar);

module.exports = router;