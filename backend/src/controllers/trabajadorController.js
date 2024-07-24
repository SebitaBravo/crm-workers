import { pool } from '../db.js';

export const getTrabajadores = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM trabajador');
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createTrabajador = async (req, res) => {
    const { rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario } = req.body;

    try {
        const [results] = await pool.query('INSERT INTO trabajador (rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario]);

        res.json({ message: 'Trabajador creado', id: results.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateTrabajador = async (req, res) => {
    const { id } = req.params;
    const { rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario } = req.body;
    try {
        await pool.query('UPDATE trabajador SET rut_trabajador = ?, nombre = ?, apellido = ?, sexo = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, cargo = ?, fecha_ingreso = ?, departamento = ?, salario = ? WHERE id = ?', 
        [rut_trabajador, nombre, apellido, sexo, direccion, telefono, fecha_nacimiento, cargo, fecha_ingreso, departamento, salario, id]);
        res.status(200).json({ message: 'Trabajador actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteTrabajador = async (req, res) => {
    const { id } = req.params;
    try {
        const [trabajador] = await pool.query('SELECT rut_trabajador FROM trabajador WHERE id = ?', [id]);
        
        if (trabajador.length === 0) {
            return res.status(404).json({ message: 'Trabajador no encontrado' });
        }

        const rut_trabajador = trabajador[0].rut_trabajador;

        await pool.query('DELETE FROM contacto_emergencia WHERE trabajador_id = ?', [id]);
        await pool.query('DELETE FROM carga_familiar WHERE trabajador_id = ?', [id]);
        await pool.query('DELETE FROM usuario WHERE trabajador_id = ?', [id]);
        await pool.query('DELETE FROM trabajador WHERE id = ? AND rut_trabajador = ?', [id, rut_trabajador]);

        res.status(200).json({ message: 'Trabajador eliminado' });
    } catch (error) {
        console.error('Error al eliminar trabajador:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};