import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import Questionnaire from './components/Questionnaire/Questionnaire';
import UserLogin from './components/UserPortal/UserLogin';
import UserSignup from './components/UserPortal/UserSignup';

import Nav from "./components/Nav/index"
import { Container } from "reactstrap";
import SearchForm from "./components/SearchForm";
import RoomForm from './components/RoomForm';

import AccountView from './components/AccountView/AccountView';

import API from './utils/API';

class App extends React.Component {

	// TODO: Centralize isloggedin, isSignedUp, etc into App.js, and pass those to the other components as props, instead of handling all that in the individual components

	// Do this by passing functions to child components as props, to allow the child components to change the state of App.js

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


	loginUser = (cb) => {
		API.loginUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			this.setState({isloggedIn: true, currentUser: result.data.user})
		}).then(()=>{
			cb();
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
				<Nav />
				<Container fluid style={styles.container}>
					<Router>
						<Switch>
							<Route exact path="/" component={SearchForm}></Route>
							<Route exact path="/questionnaire" component={Questionnaire}></Route>
							{/* <Route exact path="/login" component={UserLogin}></Route> */}
							<Route exact path="/login" render={(props)=> <UserLogin handleClick={this.loginUser} handleInputChange={this.handleInputChange} isloggedIn={this.state.isloggedIn} />}/>
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