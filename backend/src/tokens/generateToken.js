import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../db.js';

export const generateToken = (usuario) => {
    const token = jwt.sign({
        id: usuario.id,
        username: usuario.username,
        rol_id: usuario.rol_id
    }, SECRET_KEY, {
        expiresIn: '24h'
    });
    const expiration = new Date(Date.now() + 24 * 60 * 60 * 1000);
    return { token, expiration: expiration.toISOString() };
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

export const decodeToken = (token) => {
    return jwt.decode(token);
};