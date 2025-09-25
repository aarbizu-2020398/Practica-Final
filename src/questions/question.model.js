import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const questionSchema = new Schema({
  text: { type: String, required: true, trim: true },
  type: { type: String, enum: ['multiple', 'scale', 'text'], required: true },
  survey: { type: Types.ObjectId, ref: 'Survey', required: true },
  options: [{ type: String }], // solo para tipo multiple
});

export default model('Question', questionSchema);
