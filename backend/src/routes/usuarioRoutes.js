import { Router } from "express";
import * as usuariosController from "../controllers/usuarioController.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/rolAuth.js";

const router = Router();
const route = '/usuarios';

router.get(`${route}`, checkAuth, checkRoleAuth(['user', 'admin']), usuariosController.getUsuarios);
router.post(`${route}`, checkAuth, checkRoleAuth(['admin']), usuariosController.createUsuario);
router.put(`${route}/:id`, checkAuth, checkRoleAuth(['admin']), usuariosController.updateUsuario);
router.delete(`${route}/:id`, checkAuth, checkRoleAuth(['admin']), usuariosController.deleteUsuario);

export default router;