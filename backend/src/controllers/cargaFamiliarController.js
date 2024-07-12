const db = require('../db');

exports.getAllCargasFamiliares = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM carga_familiar');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCargaFamiliar = async (req, res) => {
  const { nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id } = req.body;
  try {
    await db.query('INSERT INTO carga_familiar (nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id) VALUES (?, ?, ?, ?, ?, ?)', 
    [nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id]);
    res.status(201).json({ message: 'Carga familiar creada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agrega más funciones para actualizar y eliminar cargas familiares