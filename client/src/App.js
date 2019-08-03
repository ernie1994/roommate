import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/index"
import SearchResults from "./components/SearchResults.js";

class App extends React.Component {
    render() {
        return (
             <Nav />
            <SearchResults />
        );
    }
}

export default App;