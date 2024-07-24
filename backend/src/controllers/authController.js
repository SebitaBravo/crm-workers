import { pool } from '../db.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../tokens/generateToken.js';

const table = 'usuario';

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const [result] = await pool.query(`SELECT * FROM ${table} WHERE username = ?`, [username]);
        if (result.length > 0) {
            const usuario = result[0];
            const validPassword = await comparePassword(password, usuario.password);
            if (validPassword) {
                const { token, expiration } = generateToken(usuario);
                res.json({
                    message: 'Usuario logueado',
                    token,
                    expiration
                });
            } else {
                res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
            }
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al loguear usuario' });
    }
};

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const [result] = await pool.query(`SELECT * FROM ${table} WHERE username = ?`, [username]);
        if (result.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        } else {
            const passwordEncrypted = await encriptedPassword(password);
            await pool.query(`INSERT INTO ${table} (username, password) VALUES (?, ?)`, [username, passwordEncrypted]);
            const tokenInfo = generateToken({ id: result.insertId, username, rol_id: 1 });
            res.json({ message: 'Usuario registrado', ...tokenInfo });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

const encriptedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword);
}