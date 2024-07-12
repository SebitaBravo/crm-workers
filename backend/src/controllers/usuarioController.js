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
