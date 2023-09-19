```javascript
import React, { useState } from 'react';
import axios from 'axios';

const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleUrlInput = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/scrape', { url });
      if (response.status === 200) {
        window.location.href = `/scraped/${response.data.id}`;
      }
    } catch (error) {
      console.error('Error scraping URL:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="urlInput">
          Enter URL to scrape:
          <input
            id="urlInput"
            type="text"
            value={url}
            onChange={handleUrlInput}
            required
          />
        </label>
        <button type="submit">Scrape</button>
      </form>
    </div>
  );
};

export default UrlInput;
```