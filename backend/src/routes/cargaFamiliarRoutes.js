import { Router } from 'express';
import * as cargaFamiliarController from '../controllers/cargaFamiliarController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/rolAuth.js';

const router = Router();
const route = '/carga-familiar';

router.get(`${route}`, checkAuth, checkRoleAuth(['user', 'hr', 'hrboss', 'admin']), cargaFamiliarController.getAllCargasFamiliares);
router.post(`${route}`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), cargaFamiliarController.createCargaFamiliar);
router.put(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), cargaFamiliarController.updateCargaFamiliar);
router.delete(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), cargaFamiliarController.deleteCargaFamiliar);

export default router;