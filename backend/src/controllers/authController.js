const {pool} = require('../db.js');
const bcrypt = require('bcrypt');

const table = 'usuarios';

const register = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const [result] = await pool.query(`SELECT * FROM ${table} WHERE usuario = ?`, [usuario]);
        if (result.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        const passwordHash = await bcrypt.hash(password, 10);
        await pool.query(`INSERT INTO ${table} (usuario, password) VALUES (?, ?)`, [usuario, passwordHash]);
        res.json({ message: 'Usuario registrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const [result] = await pool.query(`SELECT * FROM ${table} WHERE usuario = ?`, [usuario]);
        if (result.length === 0) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
        const user = result[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            res.json({ message: 'Usuario logueado' });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al loguear usuario' });
    }
};

module.exports = { register, login };