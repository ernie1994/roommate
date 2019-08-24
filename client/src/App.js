import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import Questionnaire from './components/Questionnaire/Questionnaire';
import UserLogin from './components/UserPortal/UserLogin';
import UserSignup from './components/UserPortal/UserSignup';

import Navi from "./components/Nav/index"
import { Container } from "reactstrap";
import SearchForm from "./components/SearchForm";
import RoomForm from './components/RoomForm';

import AccountView from './components/AccountView/AccountView';
import RoomDetail from './components/RoomDetail';

import API from './utils/API';

class App extends React.Component {

  state = {
    isloggedIn: false,
    isSignedUp: false,
    username: "",
    password: "",
    currentUser: {}
  }

  handleInputChange = (event) => {
    let name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  loginUser = () => {
    API.loginUser({
      username: this.state.username,
      password: this.state.password
    }).then((result) => {
      this.setState({ isloggedIn: true, currentUser: result.data.user })
    })
  }

  updateUser = (newUser) => {
    API.updateUser({ newUser }).then((res) => {
      console.log(res);
    })
  }
  logoutUser = () => {
    console.log("log me out");
    axios.post('api/logout').then(() => {
      this.setState({ isloggedIn: false });
    })
  }

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
        <Container fluid style={styles.container}>
          <Router>
            <Navi userStatus={this.state.isloggedIn ? true : false} handleLogout={this.logoutUser} />
            <Switch>
              <Route exact path="/" component={SearchForm}></Route>
              <Route exact path="/questionnaire" component={(props) => <Questionnaire handleFormSubmit={this.updateUser} />} />
              <Route exact path="/login" render={(props) => <UserLogin handleClick={this.loginUser} handleInputChange={this.handleInputChange} userStatus={this.state.isloggedIn ? true : false} />} />
              <Route exact path="/signup" component={UserSignup}></Route>
              <Route exact path="/post" component={RoomForm}></Route>
              <Route exact path="/account" component={(props) => <AccountView user={this.state.currentUser} />} />
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;