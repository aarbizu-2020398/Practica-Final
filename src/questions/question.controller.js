import Question from './question.model.js';

export const createQuestion = async (req, res) => {
  try {
    const question = await Question.create({
      text: req.body.text,
      type: req.body.type,
      survey: req.body.survey,
      options: req.body.options || []
    });
    res.status(201).json({ success: true, question });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json({ success: true, questions });
};

export const getQuestionById = async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (!question) return res.status(404).json({ success: false, message: 'No encontrada' });
  res.json({ success: true, question });
};

export const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!question) return res.status(404).json({ success: false, message: 'No encontrada' });
    res.json({ success: true, question });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const question = await Question.findByIdAndDelete(req.params.id);
  if (!question) return res.status(404).json({ success: false, message: 'No encontrada' });
  res.json({ success: true, message: 'Eliminada' });
};
