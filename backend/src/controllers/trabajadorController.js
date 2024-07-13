const db = require('../db');

exports.getAllTrabajadores = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM trabajador');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTrabajador = async (req, res) => {
  const { rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario } = req.body;
  try {
    await db.query('INSERT INTO trabajador (rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario]);
    res.status(201).json({ message: 'Trabajador creado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTrabajador = async (req, res) => {
  const { id } = req.params;
  const { rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario } = req.body;
  try {
    await db.query('UPDATE trabajador SET rut_trabajador = ?, nombre = ?, apellido = ?, sexo = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, cargo = ?, fecha_ingreso = ?, departamento = ?, salario = ? WHERE id = ?', 
    [rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario, id]);
    res.status(200).json({ message: 'Trabajador actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTrabajador = async (req, res) => {
  const { id } = req.params;
  try {
    const [trabajador] = await db.query('SELECT rut_trabajador FROM trabajador WHERE id = ?', [id]);
    
    if (trabajador.length === 0) {
      return res.status(404).json({ error: 'Trabajador no encontrado' });
    }

    const rut_trabajador = trabajador[0].rut_trabajador;

    await db.query('DELETE FROM contacto_emergencia WHERE trabajador_id = ?', [id]);
    await db.query('DELETE FROM carga_familiar WHERE trabajador_id = ?', [id]);
    await db.query('DELETE FROM usuario WHERE trabajador_id = ?', [id]);
    await db.query('DELETE FROM trabajador WHERE id = ? AND rut_trabajador = ?', [id, rut_trabajador]);

    res.status(200).json({ message: 'Trabajador eliminado' });
  } catch (err) {
    console.error('Error al eliminar trabajador:', err);
    res.status(500).json({ error: 'Error al eliminar trabajador' });
  }
};