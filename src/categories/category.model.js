import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
	name: { type: String, required: true, unique: true, trim: true },
	description: { type: String, trim: true },
	createdAt: { type: Date, default: Date.now }
});

export default model('Category', categorySchema);
