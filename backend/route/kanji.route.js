import express from 'express';
import { Router } from 'express';
import verifyToken from '../middleware/verifyToken.js';
import { getKanji, getKanjiById, createKanji, deleteKanji, updateKanji } from '../controllers/kanji.controllers.js';

const router = Router();
router.route('/api/kanji').get(getKanji).post(verifyToken,createKanji);
router.route('/api/kanji/:id').get(verifyToken, getKanjiById).patch(verifyToken, updateKanji).delete(verifyToken, deleteKanji);

export default router;