const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.getAllUsuarios);
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router;