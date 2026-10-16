import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: String, default: 'Beginner' },
  duration: { type: String, default: '4h 00m' },
  price: { type: String, default: 'Free' },
  visual: { type: String, default: 'network' },
  published: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
