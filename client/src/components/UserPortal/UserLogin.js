import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';



import API from '../../utils/API';

import axios from "axios";

class UserLogin extends React.Component {

	constructor(props){
		super(props);
		
	}

	// state = {
	// 	username: "",
	// 	password: "",
	// 	UserLoggedIn: false
	// }

	// handleInputChange = (event) => {
	// 	let name = event.target.name;
	// 	const value = event.target.value;

	// 	this.setState({
	// 		[name]: value
	// 	});

	// }

	// handleFormSubmit = () => {
	// 	API.loginUser({
	// 		username: this.state.username,
	// 		password: this.state.password
	// 	}).then(function (res) {
	// 		axios.get("/api/user").then((data) => {
	// 			console.log("we made it bitch", data);
	// 		})
	// 	}).then(()=> {
	// 		this.setState({isLoggedIn: true});
	// 	})
	// }

	// shouldComponentUpdate = (props) => {
	// 	return this.state.UserLoggedIn != props.isLoggedIn
	// }

	// componentDidUpdate = (props) => {
	// 	this.setState({UserLoggedIn: props.isLoggedIn});
	// }

	

	// updateState = () => {
	// 	console.log("firing this stupid ass callback function")
	// 	let currentStatus = this.props.isLoggedIn;
	// 	console.log(currentStatus)	
	// 	this.setState({isLoggedIn: this.props.isLoggedIn});
	// }

	render() {
		return (
			
			<div>
				{this.props.test ? <Redirect to='/account' />

					:
				
				<Card>
					<CardBody>
						<h1>{this.props.test}!</h1>
						<Form>
							<FormGroup>
								<Label>Username</Label>
								<Input type="text" name="username" onChange={this.props.handleInputChange} />
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" onChange={this.props.handleInputChange} />
							</FormGroup>
							<FormText>Don't have an account with us? Sign up for one <a href="/signup">here</a></FormText>
							<Button onClick={()=> this.props.handleClick()}>Sign In</Button>
							{/* <Button outline color="danger" onClick={this.test}>USER SIGN IN TEST</Button> */}
						</Form>
					</CardBody>
				</Card>
				}
			</div>
		)
	}
}

export default UserLogin;