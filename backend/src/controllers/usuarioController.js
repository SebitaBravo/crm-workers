import { pool } from '../db.js';

export const getUsuarios = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM usuario');
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createUsuario = async (req, res) => {
    const { username, password, trabajador_id, rol_id } = req.body;
    try {
        const [results] = await pool.query('INSERT INTO usuario (username, password, trabajador_id, rol_id) VALUES (?, ?, ?, ?)', 
        [username, password, trabajador_id, rol_id]);
        res.json({ message: 'Usuario creado', id: results.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { username, password, trabajador_id, rol_id } = req.body;
    try {
        await pool.query('UPDATE usuario SET username = ?, password = ?, trabajador_id = ?, rol_id = ? WHERE id = ?', 
        [username, password, trabajador_id, rol_id, id]);
        res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM usuario WHERE id = ?', [id]);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};