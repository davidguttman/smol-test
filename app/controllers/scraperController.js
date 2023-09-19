```javascript
const express = require('express');
const ScraperModel = require('../models/scraperModel.js');

exports.scrapeUrl = async (req, res) => {
    const url = req.body.url;
    try {
        const html = await ScraperModel.scrape(url);
        const newScrapedData = new ScraperModel({
            url: url,
            html: html
        });
        await newScrapedData.save();
        res.status(200).json({
            message: 'SCRAPING_SUCCESS',
            data: newScrapedData
        });
    } catch (error) {
        res.status(500).json({
            message: 'SCRAPING_ERROR',
            error: error
        });
    }
};
```