const express = require('express');
const path = require('path');
const apiRoutes = require('./server/routes/api');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Use api routes
app.use('/api', apiRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;