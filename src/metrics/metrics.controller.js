import Survey from '../surveys/survey.model.js';
import Answer from '../answers/answer.model.js';
import Question from '../questions/question.model.js';

// Total de encuestas
export const getSurveyCount = async (req, res) => {
  const count = await Survey.countDocuments();
  res.json({ totalSurveys: count });
};

// Total de respuestas
export const getAnswerCount = async (req, res) => {
  const count = await Answer.countDocuments();
  res.json({ totalAnswers: count });
};

// Promedio de respuestas por encuesta
export const getAverageAnswersPerSurvey = async (req, res) => {
  const surveys = await Survey.find();
  const answers = await Answer.find();
  const avg = surveys.length ? (answers.length / surveys.length) : 0;
  res.json({ averageAnswersPerSurvey: avg });
};

// Resumen de sentimientos (simulado)
export const getSentimentSummary = async (req, res) => {
  // Aquí podrías integrar una librería de análisis de sentimientos
  // Simulación: cuenta respuestas positivas/negativas
  const answers = await Answer.find();
  let positive = 0, negative = 0;
  answers.forEach(a => {
    if (typeof a.response === 'string' && a.response.match(/bueno|excelente|satisfecho/i)) positive++;
    if (typeof a.response === 'string' && a.response.match(/malo|insatisfecho|pobre/i)) negative++;
  });
  res.json({ positive, negative, total: answers.length });
};
