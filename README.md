# Node.js Web App

This is a web application built using Express and React.

## Tech Stack

- Express for back-end endpoints
- React for front-end

## Features

- User interface to accept a URL
- Entering a URL will scrape the HTML from that URL, store it in a database, and take you to a shareable copy

## How to Run

1. Clone the repository
2. Navigate to the `app` directory and run `npm install` to install server dependencies
3. Run `npm start` to start the server
4. Navigate to the `client` directory and run `npm install` to install client dependencies
5. Run `npm start` to start the client
6. Open `http://localhost:3000` in your browser

## File Structure

- `app/server.js`: Entry point for the Express server
- `app/routes/scraperRoutes.js`: Defines the routes for the scraping functionality
- `app/controllers/scraperController.js`: Handles the logic for the scraping requests
- `app/models/scraperModel.js`: Defines the data schema for storing scraped data
- `app/config/db.js`: Configuration for the database connection
- `client/src/index.js`: Entry point for the React client
- `client/src/App.js`: Main React component
- `client/src/components/UrlInput.js`: Component for the URL input field
- `client/src/components/ScrapedPage.js`: Component for displaying the scraped page
- `client/src/services/scraperService.js`: Handles API requests related to scraping

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)