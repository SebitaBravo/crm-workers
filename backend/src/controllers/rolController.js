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

exports.updateRol = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    await db.query('UPDATE rol SET nombre = ? WHERE id = ?', [nombre, id]);
    res.status(200).json({ message: 'Rol actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRol = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM rol WHERE id = ?', [id]);
    res.status(200).json({ message: 'Rol eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};