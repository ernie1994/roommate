import React from 'react';
import Nav from "./components/Nav/index"
import SearchResults from "./components/SearchResults.js";
import { Container } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Container>
          <SearchResults />
        </Container>
      </>
    );
  }
}

export default App;