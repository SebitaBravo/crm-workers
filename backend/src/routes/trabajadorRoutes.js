import { Router } from "express";
import * as trabajadoresController from "../controllers/trabajadorController.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/rolAuth.js";

const router = Router();
const route = '/trabajadores';

router.get(`${route}`, checkAuth, checkRoleAuth(['user', 'hr', 'hrboss', 'admin']), trabajadoresController.getTrabajadores);
router.post(`${route}`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), trabajadoresController.createTrabajador);
router.put(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), trabajadoresController.updateTrabajador);
router.delete(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), trabajadoresController.deleteTrabajador);

export default router;