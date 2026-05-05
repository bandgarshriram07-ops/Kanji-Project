import express from 'express';
import { register, login } from '../controllers/user.controllers.js';
import { Router } from 'express';
import {getMe,logout} from '../controllers/user.controllers.js';
import {verifyToken} from '../middleware/verifyToken.js';
const router = Router();

router.route('/api/register').post(register);
router.route('/api/login').post(login);
router.route('/api/me').get(verifyToken,getMe);
router.route('/api/logout').post(logout);

export default router;