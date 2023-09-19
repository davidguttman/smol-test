import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UrlInput from './components/UrlInput';
import ScrapedPage from './components/ScrapedPage';
import AboutPage from './components/AboutPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UrlInput} />
          <Route path="/scraped" component={ScrapedPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;