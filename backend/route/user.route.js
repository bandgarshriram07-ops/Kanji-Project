import express from 'express';
import { register, login } from '../controllers/user.controllers.js';
import { Router } from 'express';
const router = Router();

router.route('/api/register').post(register);
router.route('/api/login').post(login);

export default router;