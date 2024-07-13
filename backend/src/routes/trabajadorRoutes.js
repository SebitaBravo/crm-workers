const express = require('express');
const router = express.Router();
const trabajadorController = require('../controllers/trabajadorController');

router.get('/trabajadores', trabajadorController.getAllTrabajadores);
router.post('/trabajadores', trabajadorController.createTrabajador);
router.put('/trabajadores/:id', trabajadorController.updateTrabajador);
router.delete('/trabajadores/:id', trabajadorController.deleteTrabajador);

module.exports = router;