const express = require('express');
const router = express.Router();
const scrapeController = require('../controllers/scrapeController');

router.get('/about', (req, res) => {
    res.send('This project is a web application that accepts a URL, scrapes the HTML from that URL, stores it in a database, and provides a shareable copy of the scraped page.');
});

router.post('/scrape', scrapeController.scrapePage);

module.exports = router;