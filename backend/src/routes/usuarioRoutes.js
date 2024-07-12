const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.getAllUsuarios);
router.post('/usuarios', usuarioController.createUsuario);
// Agrega más rutas para actualizar y eliminar usuarios

module.exports = router;