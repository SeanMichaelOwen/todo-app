// src/models/Task.js
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the task'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the task'],
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
