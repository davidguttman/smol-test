import React, { useState } from 'react';
import scraperService from '../services/scraperService';

const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await scraperService.scrapeUrl(url);
      if (response.status === 200) {
        // handle success
      } else {
        // handle error
      }
    } catch (error) {
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url-input">
        Enter URL:
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Scrape</button>
    </form>
  );
};

export default UrlInput;