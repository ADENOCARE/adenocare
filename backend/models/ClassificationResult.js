const mongoose = require('mongoose');

const ClassificationResultSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientAge: { type: Number, required: true },
  imagePath: { type: String, required: true },
  result: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ClassificationResult', ClassificationResultSchema);
