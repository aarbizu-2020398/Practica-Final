import Answer from './answer.model.js';

export const createAnswer = async (req, res) => {
  try {
    const answer = await Answer.create({
      user: req.body.user,
      survey: req.body.survey,
      question: req.body.question,
      response: req.body.response
    });
    res.status(201).json({ success: true, answer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAnswers = async (req, res) => {
  const answers = await Answer.find();
  res.json({ success: true, answers });
};

export const getAnswerById = async (req, res) => {
  const answer = await Answer.findById(req.params.id);
  if (!answer) return res.status(404).json({ success: false, message: 'No encontrada' });
  res.json({ success: true, answer });
};

export const updateAnswer = async (req, res) => {
  try {
    const answer = await Answer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!answer) return res.status(404).json({ success: false, message: 'No encontrada' });
    res.json({ success: true, answer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteAnswer = async (req, res) => {
  const answer = await Answer.findByIdAndDelete(req.params.id);
  if (!answer) return res.status(404).json({ success: false, message: 'No encontrada' });
  res.json({ success: true, message: 'Eliminada' });
};
