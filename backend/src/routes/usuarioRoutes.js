const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.getAllUsuarios);
router.post('/usuarios', usuarioController.createUsuario);
router.put('/usuarios/:id', usuarioController.updateUsuario);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

module.exports = router;