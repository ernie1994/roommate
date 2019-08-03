import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index"
import SearchResults from "./components/SearchResults.js";
import { Container } from "reactstrap";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <Container>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={SearchForm}></Route>
                            <Route exact path="/search" component={SearchResults}></Route>
                        </Switch>
                    </Router>
                </Container>
            </>
        );
    }
}

export default App;