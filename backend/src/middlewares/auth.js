import { verifyToken } from '../tokens/generateToken.js';

export const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const tokenData = verifyToken(token);
        console.log(tokenData);
        if (tokenData) {
            req.tokenData = tokenData;
            next();
        } else {
            res.status(401).json({message: 'No autorizado'});
        }
    } catch (error) {
        res.status(401).json({message: 'No autorizado'});
    }
};