import { Router } from 'express';
import * as contactoEmergenciaController from '../controllers/contactoEmergenciaController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/rolAuth.js';

const router = Router();
const route = '/contacto-emergencia';

router.get(`${route}`, checkAuth, checkRoleAuth(['user', 'hr', 'hrboss', 'admin']), contactoEmergenciaController.getAllContactosEmergencia);
router.post(`${route}`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), contactoEmergenciaController.createContactoEmergencia);
router.put(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), contactoEmergenciaController.updateContactoEmergencia);
router.delete(`${route}/:id`, checkAuth, checkRoleAuth(['hr', 'hrboss', 'admin']), contactoEmergenciaController.deleteContactoEmergencia);

export default router;