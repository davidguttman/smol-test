const mongoose = require('mongoose');

const ScrapedDataSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ScrapedData', ScrapedDataSchema);