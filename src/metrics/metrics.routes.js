import { Router } from 'express';
import {
  getSurveyCount,
  getAnswerCount,
  getAverageAnswersPerSurvey,
  getSentimentSummary
} from './metrics.controller.js';

const router = Router();

router.get('/surveys/count', getSurveyCount);
router.get('/answers/count', getAnswerCount);
router.get('/answers/average', getAverageAnswersPerSurvey);
router.get('/sentiment', getSentimentSummary);

export default router;
