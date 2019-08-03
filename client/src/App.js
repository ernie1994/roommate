import React from 'react';
import logo from './logo.svg';
import './App.css';
import Questionnaire from './components/Questionnaire/Questionnaire';
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
          		      <Questionnaire />
                </Container>
            </>
        );
    }
}

export default App;