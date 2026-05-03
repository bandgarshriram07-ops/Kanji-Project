
import { Router } from 'express';
import {verifyToken, isAdmin, isOwnerOrAdmin} from '../middleware/verifyToken.js';
import { getKanji, getKanjiById, createKanji, deleteKanji, updateKanji } from '../controllers/kanji.controllers.js';

const router = Router();
router.route('/api/kanji').get(getKanji).post(verifyToken,createKanji);
router.route('/api/kanji/:id').get(verifyToken, getKanjiById)
.patch(verifyToken,isAdmin,isOwnerOrAdmin,updateKanji)
.delete(verifyToken,isAdmin,isOwnerOrAdmin,deleteKanji);

export default router;