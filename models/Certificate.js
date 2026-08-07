const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'CERTIFICATION' },
  description: { type: String },
  fileUrl: { type: String, required: true },
  colabUrl: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Certificate', certificateSchema);