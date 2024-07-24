import { Router } from 'express';
import * as rolController from '../controllers/rolController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/rolAuth.js';

const router = Router();
const route = '/roles';

router.get(`${route}`, checkAuth, checkRoleAuth(['user', 'hr', 'hrboss', 'admin']), rolController.getAllRoles);
router.post(`${route}`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), rolController.createRol);
router.put(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), rolController.updateRol);
router.delete(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), rolController.deleteRol);

export default router;