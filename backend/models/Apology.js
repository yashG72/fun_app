const mongoose = require('mongoose');

const apologySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  image: { type: String, required: true },     // base64 or image URL
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Apology', apologySchema);
