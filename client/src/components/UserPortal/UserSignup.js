import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router';

import API from '../../utils/API';

class UserSignup extends React.Component {

	state = {
		username: "",
		password: "",
		signedUp: false
	}

	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});

	}

	handleFormSubmit = event => {
		event.preventDefault();
		API.createUser({
			username: this.state.username,
			password: this.state.password
		}).then(() => {
			API.loginUser({
				username: this.state.username,
				password: this.state.password
			}).then(() => {
				this.setState({ signedUp: true });
			})
		})
	}


	render() {
		return (
			<div>
				{!this.state.signedUp ?
					<Card>
						<CardBody>
							<Form onSubmit={this.handleFormSubmit}>
								<FormGroup>
									<Label>Username</Label>
									<Input type="text" name="username" onChange={this.handleInputChange} />
								</FormGroup>
								<FormGroup>
									<Label>Password</Label>
									<Input type="password" name="password" onChange={this.handleInputChange} />
								</FormGroup>

								<Button outline color="success">Sign In</Button>
							</Form>
						</CardBody>
					</Card>

					:

					<Redirect to='/questionnaire' />
				}

			</div>
		)
	}
}

export default UserSignup;