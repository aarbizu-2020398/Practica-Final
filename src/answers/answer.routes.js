import { Router } from 'express';
import {
  createAnswer,
  getAnswers,
  getAnswerById,
  updateAnswer,
  deleteAnswer
} from './answer.controller.js';

const router = Router();

router.post('/', createAnswer);
router.get('/', getAnswers);
router.get('/:id', getAnswerById);
router.put('/:id', updateAnswer);
router.delete('/:id', deleteAnswer);

export default router;
