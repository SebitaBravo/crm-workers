import { pool } from '../db.js';

export const getAllCargasFamiliares = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM carga_familiar');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const createCargaFamiliar = async (req, res) => {
    const { nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id } = req.body;
    try {
        const [results] = await pool.query('INSERT INTO carga_familiar (nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id) VALUES (?, ?, ?, ?, ?, ?)', 
        [nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id]);
        res.status(201).json({ message: 'Carga familiar creada', id: results.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const updateCargaFamiliar = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id } = req.body;
    try {
        await pool.query('UPDATE carga_familiar SET nombre = ?, apellido = ?, parentesco = ?, sexo = ?, fecha_nacimiento = ?, trabajador_id = ? WHERE id = ?', 
        [nombre, apellido, parentesco, sexo, fecha_nacimiento, trabajador_id, id]);
        res.status(200).json({ message: 'Carga familiar actualizada' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const deleteCargaFamiliar = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM carga_familiar WHERE id = ?', [id]);
        res.status(200).json({ message: 'Carga familiar eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};