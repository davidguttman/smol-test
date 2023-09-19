```javascript
import React from 'react';

class SharePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.match.params.url,
            data: null
        };
    }

    componentDidMount() {
        fetch(`/api/scrape/${this.state.url}`)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                <h1>Share Page</h1>
                {this.state.data ? (
                    <div>
                        <h2>URL: {this.state.url}</h2>
                        <h3>Scraped Data:</h3>
                        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export default SharePage;
```