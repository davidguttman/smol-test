const express = require('express');
const router = express.Router();
const axios = require('axios');
const ScrapedData = require('../models/ScrapedData');

router.post('/scrape', async (req, res) => {
    try {
        const { url } = req.body;
        const response = await axios.get(url);
        const html = response.data;

        const scrapedData = new ScrapedData({
            url,
            html
        });

        await scrapedData.save();

        res.json({ message: 'Data scraped and saved successfully', id: scrapedData._id });
    } catch (error) {
        res.status(500).json({ message: 'Error scraping data' });
    }
});

router.get('/scrape/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const scrapedData = await ScrapedData.findById(id);

        if (!scrapedData) {
            return res.status(404).json({ message: 'No data found for this id' });
        }

        res.json({ url: scrapedData.url, html: scrapedData.html });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

module.exports = router;