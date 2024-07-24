import { verifyToken } from "../tokens/generateToken.js";

export const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = verifyToken(token);
        if (roles.includes(decodedToken.rol)) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
}