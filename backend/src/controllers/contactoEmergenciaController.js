const db = require('../db');

exports.getAllContactosEmergencia = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM contacto_emergencia');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createContactoEmergencia = async (req, res) => {
  const { nombre, apellido, relacion, telefono, trabajador_id } = req.body;
  try {
    await db.query('INSERT INTO contacto_emergencia (nombre, apellido, relacion, telefono, trabajador_id) VALUES (?, ?, ?, ?, ?)', 
    [nombre, apellido, relacion, telefono, trabajador_id]);
    res.status(201).json({ message: 'Contacto de emergencia creado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agrega más funciones para actualizar y eliminar contactos de emergencia