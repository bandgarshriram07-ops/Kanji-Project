import express from 'express';
import { register, login } from '../controllers/user.controllers.js';
import { Router } from 'express';
import {getMe,logout,healthCheck} from '../controllers/user.controllers.js';
import {verifyToken} from '../middleware/verifyToken.js';
const router = Router();

router.route('/api/register').post(register);
router.route('/api/login').post(login);
router.route('/api/me').get(verifyToken,getMe);
router.route('/api/logout').post(logout);
router.route('/api/healthcheck').get(healthCheck);

export default router;