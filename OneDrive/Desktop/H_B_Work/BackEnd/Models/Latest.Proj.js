import mongoose from 'mongoose';

const LatestProjectSchema = new mongoose.Schema({
  projectTitle: { type: String, required: true }, // Title of the project
  images: {
    type: [String],
    validate: {
      validator: (arr) => arr.length <= 4, // Ensure a maximum of 4 images
      message: 'You can upload up to 4 images only.'
    },
    required: true
  },
  videoUrl: { type: String, required: true }, // URL of the project video
  projectDetails: { type: String, required: true }, // Detailed description of the project
  createdAt: { type: Date, default: Date.now } // Timestamp for the entry
});

export default mongoose.model('LatestProject', LatestProjectSchema);
