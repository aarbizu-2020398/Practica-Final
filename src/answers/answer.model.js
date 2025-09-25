import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const answerSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User' }, // puede ser null si es público
  survey: { type: Types.ObjectId, ref: 'Survey', required: true },
  question: { type: Types.ObjectId, ref: 'Question', required: true },
  response: { type: Schema.Types.Mixed, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Answer', answerSchema);
