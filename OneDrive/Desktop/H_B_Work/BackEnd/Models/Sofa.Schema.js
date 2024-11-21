import mongoose from 'mongoose';

const SofaWorkSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  sofaName: { type: String, required: true },
  sofaDetails: { type: String, required: true },
  sofaImages: [{ type: String, required: true }], // Array of image URLs
  createdAt: { type: Date, default: Date.now }
});

export const SofaWorkModel = mongoose.model('SofaWork', SofaWorkSchema);
