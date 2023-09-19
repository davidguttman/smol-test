```javascript
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UrlInput from './components/UrlInput';
import AboutPage from './components/AboutPage';
import ScrapedPage from './components/ScrapedPage';
import SharePage from './components/SharePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UrlInput} />
          <Route path="/about" component={AboutPage} />
          <Route path="/scraped" component={ScrapedPage} />
          <Route path="/share" component={SharePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
```