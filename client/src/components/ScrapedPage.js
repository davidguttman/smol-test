import React, { useState, useEffect } from 'react';

const ScrapedPage = ({ match }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/scrape/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setPageData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="scraped-page">
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
    </div>
  );
};

export default ScrapedPage;