import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class UserLogin extends React.Component {

	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				{this.props.userStatus ? <Redirect to='/account' />
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
								<Button onClick={() => this.props.handleClick()}>Sign In</Button>
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