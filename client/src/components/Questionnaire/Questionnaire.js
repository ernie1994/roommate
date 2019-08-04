import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Wrapper, Row, Col, } from 'reactstrap';
import API from '../../utils/API';
// const mongoose = require("mongoose");
// const db = require('../../models/user')
// const User = require('../../models/user.js');

class Questionnaire extends React.Component {

	state = {
		name: "",
		age: 0,
		gender: "",
		state: "",
		city: "",
		zip: ""

	}

	handleInputChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = () => {
		API.saveInfo({
			name: this.state.name,
			age: this.state.age,
			gender: this.state.gender,
			state: this.state.state,
			city: this.state.city,
			zip: this.state.zip
		}).then(function (res) {
			console.log(res)
		})
	}


	render() {
		return (
			<Form name="roommateSurvey" id="roommateSurvey">
				<FormGroup className="form-group">
					<Label>Name</Label>
					<small id="nameHelp" className="form-text text-muted">Lets introduce ourselves...</small>
					<Input type="text" className="form-control" name="name" placeholder="My name is...." onChange={this.handleInputChange} />
				</FormGroup>
				<FormGroup className="form-group">
					<Label>Age</Label>
					<small id="ageHelp" className="form-text text-muted">Not to be rude, but...</small>
					<Input type="text" className="form-control" name="age" placeholder="Well if you must know..." onChange={this.handleInputChange} />
				</FormGroup>
				<Label>Address</Label>
				<Row className="form-row">

					<Col md={7}>
						<Input type="text" className="form-control" placeholder="State" name="state" onChange={this.handleInputChange} />
					</Col>
					<Col >
						<Input type="text" className="form-control" placeholder="City" name="city" onChange={this.handleInputChange} />
					</Col>
					<Col >
						<Input type="text" className="form-control" placeholder="Zipcode" name="zip" onChange={this.handleInputChange} />
					</Col>
				</Row>
				<FormGroup className="form-group">
					<Label>Gender</Label>
					<select className="form-control" name="gender" onChange={this.handleInputChange}>
						<option hidden></option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="nonbinary">Nonbinary</option>
						<option value="prefer not to say">Prefer not to say</option>
					</select>
				</FormGroup>
				<FormGroup>
					<legend>Additional Info</legend>
					<small className="form-text text-muted">Lets fill in some blanks...</small>
					<Label className="mr-5">Do you have any pet allergies?</Label>
					
					<FormGroup check inline>
						<Label check>
							<Input type="checkbox" id="allergyCheckbox1" value="Cats" />Cats
						</Label>
					</FormGroup>
					<FormGroup check inline>
						<Label check>
							<Input type="checkbox" id="allergyCheckbox2" value="Dogs" />Dogs
						</Label>
					</FormGroup>
					<FormGroup check inline>
						<Label check>
							<Input type="checkbox" id="allergyCheckbox3" value="Other" />Other
						</Label>
					</FormGroup>
					<FormGroup check inline>
						<Label check>
							<Input type="checkbox" id="allergyCheckbox4" value="No allergies" />No allergies
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup>
					<Label for="bio">Tell us a little bit about yourself</Label>
					<Input type="textarea" name="bioField" id="bio" />
				</FormGroup>
				<Button outline color="success" onClick={this.handleFormSubmit}>Submit Form</Button>
			</Form>
		)
	}
}

export default Questionnaire;