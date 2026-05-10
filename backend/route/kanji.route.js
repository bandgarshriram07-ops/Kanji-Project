
import { Router } from 'express';
import {verifyToken, isAdmin, isOwnerOrAdmin} from '../middleware/verifyToken.js';
import { getKanji, getKanjiById, createKanji, deleteKanji, updateKanji ,searchKanji} from '../controllers/kanji.controllers.js';

const router = Router();
router.route('/api/kanji').get(getKanji).post(verifyToken,createKanji);
router.route('/api/kanji/:id').get( getKanjiById)
.patch(verifyToken,isOwnerOrAdmin,updateKanji)
.delete(verifyToken,isOwnerOrAdmin,deleteKanji);
router.route('/api/search').get(searchKanji);

export default router;