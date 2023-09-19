import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScrapedPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/scrapedData');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scraped Page</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ScrapedPage;