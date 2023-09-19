```javascript
const express = require('express');
const scraperRoutes = require('./routes/scraperRoutes');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
db.connect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', scraperRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```