import React from 'react';
import {Card, CardText, CardBody, Form, FormGroup, Label, Input, FormText, Container, Wrapper, Button} from 'reactstrap';


import API from '../../utils/API';

class UserSignup extends React.Component {

	state = {
		username: "this will not change",
		password: "niether will this"
	}

	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});

	}
	
	handleFormSubmit = () => {
		API.createUser({
			username: this.state.username,
			password: this.state.password
		}).then(function(res){
			console.log(res);
		})
	}

	
	render() {
		return (
			<div>
				<Card>
					<CardBody>
						<Form>
							<FormGroup>
								<Label>Username</Label>
								<Input type="text" name="username" onChange={this.handleInputChange} />
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" onChange={this.handleInputChange} />
							</FormGroup>
							
							<Button outline color="success" onClick={this.handleFormSubmit}>Sign In</Button>
						</Form>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default UserSignup;