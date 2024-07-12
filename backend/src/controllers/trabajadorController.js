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