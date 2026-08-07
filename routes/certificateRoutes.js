const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// GET all certificates
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add new certificate
router.post('/', async (req, res) => {
  const { title, category, description, fileUrl, colabUrl } = req.body;
  try {
    const newCert = new Certificate({
      title,
      category,
      description,
      fileUrl,
      colabUrl
    });
    const savedCert = await newCert.save();
    res.status(201).json(savedCert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;