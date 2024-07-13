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

exports.updateContactoEmergencia = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, relacion, telefono, trabajador_id } = req.body;
  try {
    await db.query('UPDATE contacto_emergencia SET nombre = ?, apellido = ?, relacion = ?, telefono = ?, trabajador_id = ? WHERE id = ?', 
    [nombre, apellido, relacion, telefono, trabajador_id, id]);
    res.status(200).json({ message: 'Contacto de emergencia actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContactoEmergencia = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM contacto_emergencia WHERE id = ?', [id]);
    res.status(200).json({ message: 'Contacto de emergencia eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
