import React from 'react';
import Nav from "./components/Nav/index"
import SearchResults from "./components/SearchResults.js";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <SearchResults />
      </div>
    );
  }
}

export default App;