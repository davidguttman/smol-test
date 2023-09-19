import React, { useState } from 'react';

const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    if (data.success) {
      window.location.href = `/scraped/${data.id}`;
    } else {
      alert('Failed to scrape the page. Please try again.');
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
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Scrape</button>
    </form>
  );
};

export default UrlInput;