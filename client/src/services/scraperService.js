import axios from 'axios';

const scrapeUrl = async (url) => {
  try {
    const response = await axios.post('/api/scrape', { url });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  scrapeUrl,
};