const db = require('../db');

exports.getAllUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUsuario = async (req, res) => {
  const { username, password, trabajador_id, rol_id } = req.body;
  try {
    await db.query('INSERT INTO usuario (username, password, trabajador_id, rol_id) VALUES (?, ?, ?, ?)', 
    [username, password, trabajador_id, rol_id]);
    res.status(201).json({ message: 'Usuario creado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { username, password, trabajador_id, rol_id } = req.body;
  try {
    await db.query('UPDATE usuario SET username = ?, password = ?, trabajador_id = ?, rol_id = ? WHERE id = ?', 
    [username, password, trabajador_id, rol_id, id]);
    res.status(200).json({ message: 'Usuario actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM usuario WHERE id = ?', [id]);
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};