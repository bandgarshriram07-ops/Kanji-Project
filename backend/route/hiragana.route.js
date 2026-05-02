
import { Router } from 'express';
import { getHiragana } from '../controllers/hiragana.controllers.js';
const router = Router();

router.route('/api/hiragana').get(getHiragana);

export default router;