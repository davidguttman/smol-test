```javascript
const mongoose = require('mongoose');
const db = require('../config/db');

const ScraperSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    }
});

module.exports = db.model('Scraper', ScraperSchema);
```