import express from 'express';
import { Router } from 'express';
import { getKanakata } from '../controllers/katakana.controllers.js';

const router = Router();

router.route('/api/katakana').get(getKanakata);

export default router;