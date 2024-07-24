import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const router = Router();
const route = '/auth';

router.post(`${route}/login`, authController.login);
router.post(`${route}/register`, authController.register);

export default router;