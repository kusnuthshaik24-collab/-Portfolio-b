const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  tags: [String],
  links: [
    {
      label: String,
      url: String,
      type: String
    }
  ]
});

module.exports = mongoose.model('Project', projectSchema);