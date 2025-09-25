import Survey from './survey.model.js';

export const createSurvey = async (req, res) => {
  try {
    const survey = await Survey.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || 'active',
      creator: req.body.creator
    });
    res.status(201).json({ success: true, survey });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getSurveys = async (req, res) => {
  const surveys = await Survey.find();
  res.json({ success: true, surveys });
};

export const getSurveyById = async (req, res) => {
  const survey = await Survey.findById(req.params.id);
  if (!survey) return res.status(404).json({ success: false, message: 'No encontrada' });
  res.json({ success: true, survey });
};

export const updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!survey) return res.status(404).json({ success: false, message: 'No encontrada' });
    res.json({ success: true, survey });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteSurvey = async (req, res) => {
  const survey = await Survey.findByIdAndDelete(req.params.id);
  if (!survey) return res.status(404).json({ success: false, message: 'No encontrada' });
  res.json({ success: true, message: 'Eliminada' });
};
