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

exports.updateCargaFamiliar = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id } = req.body;
  try {
    await db.query('UPDATE carga_familiar SET nombre = ?, apellido = ?, parentesco = ?, sexo = ?, fecha_nacimiento = ?, trabajador_id = ? WHERE id = ?', 
    [nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id, id]);
    res.status(200).json({ message: 'Carga familiar actualizada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCargaFamiliar = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM carga_familiar WHERE id = ?', [id]);
    res.status(200).json({ message: 'Carga familiar eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};