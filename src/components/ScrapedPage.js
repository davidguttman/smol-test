import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScrapedPage = ({ match }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      const response = await axios.get(`/api/scrape/${match.params.id}`);
      setHtml(response.data.html);
    };

    fetchHtml();
  }, [match.params.id]);

  return (
    <div className="scraped-page">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default ScrapedPage;