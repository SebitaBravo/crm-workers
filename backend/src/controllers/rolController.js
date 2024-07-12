const db = require('../db');

exports.getAllRoles = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM rol');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRol = async (req, res) => {
  const { nombre } = req.body;
  try {
    await db.query('INSERT INTO rol (nombre) VALUES (?)', [nombre]);
    res.status(201).json({ message: 'Rol creado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agrega más funciones para actualizar y eliminar roles