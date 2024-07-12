const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

router.get('/roles', rolController.getAllRoles);
router.post('/roles', rolController.createRol);
// Agrega más rutas para actualizar y eliminar roles

module.exports = router;