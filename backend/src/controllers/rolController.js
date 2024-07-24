import { pool } from '../db.js';

export const getAllRoles = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM rol');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const createRol = async (req, res) => {
    const { nombre } = req.body;
    try {
        const [results] = await pool.query('INSERT INTO rol (nombre) VALUES (?)', [nombre]);
        res.status(201).json({ message: 'Rol creado', id: results.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const updateRol = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        await pool.query('UPDATE rol SET nombre = ? WHERE id = ?', [nombre, id]);
        res.status(200).json({ message: 'Rol actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const deleteRol = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM rol WHERE id = ?', [id]);
        res.status(200).json({ message: 'Rol eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};