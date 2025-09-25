import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const surveySchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  creator: { type: Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Survey', surveySchema);
