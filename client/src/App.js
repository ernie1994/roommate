import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Questionnaire from './components/Questionnaire/Questionnaire';
import UserLogin from './components/UserPortal/UserLogin';
import UserSignup from './components/UserPortal/UserSignup';

import Nav from "./components/Nav/index"
import { Container } from "reactstrap";
import SearchForm from "./components/SearchForm";
import RoomForm from './components/RoomForm';

import AccountView from './components/AccountView/AccountView';

class App extends React.Component {
  render() {
    var styles = {
      container: {
        paddingLeft: "0px",
        paddingRight: "0px",
        marginLeft: "0px",
        marginRight: "0px"
      }
    };
    return (
      <>
        <Nav />
        <Container fluid style={styles.container}>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchForm}></Route>
              <Route exact path="/questionnaire" component={Questionnaire}></Route>
              <Route exact path="/login" component={UserLogin}></Route>
              <Route exact path="/signup" component={UserSignup}></Route>
              <Route exact path="/post" component={RoomForm}></Route>
			  <Route exact path="/account" component={AccountView} />
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;