import { pool } from '../db.js';

export const getAllContactosEmergencia = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM contacto_emergencia');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const createContactoEmergencia = async (req, res) => {
    const { nombre, apellido, relacion, telefono, trabajador_id } = req.body;
    try {
        const [results] = await pool.query('INSERT INTO contacto_emergencia (nombre, apellido, relacion, telefono, trabajador_id) VALUES (?, ?, ?, ?, ?)', 
        [nombre, apellido, relacion, telefono, trabajador_id]);
        res.status(201).json({ message: 'Contacto de emergencia creado', id: results.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const updateContactoEmergencia = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, relacion, telefono, trabajador_id } = req.body;
    try {
        await pool.query('UPDATE contacto_emergencia SET nombre = ?, apellido = ?, relacion = ?, telefono = ?, trabajador_id = ? WHERE id = ?', 
        [nombre, apellido, relacion, telefono, trabajador_id, id]);
        res.status(200).json({ message: 'Contacto de emergencia actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const deleteContactoEmergencia = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM contacto_emergencia WHERE id = ?', [id]);
        res.status(200).json({ message: 'Contacto de emergencia eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};