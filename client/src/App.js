import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Questionnaire from './components/Questionnaire/Questionnaire';

import Nav from "./components/Nav/index"
import { Container } from "reactstrap";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
  render() {
    var styles = {
      container: {
        paddingLeft: "0px",
        paddingRight: "0px"
      }
    };
    return (
      <>
        <Nav />
        <Container style={styles.container}>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchForm}></Route>
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;
