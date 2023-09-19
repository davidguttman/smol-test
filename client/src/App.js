import React, { useState } from 'react';
import UrlInput from './components/UrlInput';
import ScrapedPage from './components/ScrapedPage';

function App() {
  const [url, setUrl] = useState('');
  const [scrapedData, setScrapedData] = useState(null);

  const handleScrape = (data) => {
    setScrapedData(data);
  };

  return (
    <div className="App">
      <UrlInput setUrl={setUrl} handleScrape={handleScrape} />
      {scrapedData && <ScrapedPage data={scrapedData} />}
    </div>
  );
}

export default App;