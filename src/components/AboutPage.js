import React from 'react';

const AboutPage = () => {
    return (
        <div id="about-page">
            <h1>About</h1>
            <p>This is a web application built with Express and React. It allows users to enter a URL. The application will then scrape the HTML from the entered URL, store it in a database, and provide a shareable copy of the scraped page.</p>
        </div>
    );
}

export default AboutPage;