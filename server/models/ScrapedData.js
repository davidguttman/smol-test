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

const ScrapedData = mongoose.model('ScrapedData', ScrapedDataSchema);

module.exports = ScrapedData;