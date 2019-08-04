import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Wrapper } from 'reactstrap';
import API from '../../utils/API';
// const mongoose = require("mongoose");
// const db = require('../../models/user')
// const User = require('../../models/user.js');

class Questionnaire extends React.Component {

	state = {
		name: "",
		age: "",
		gender: "",

	}

	handleInputChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = () => {
	

		console.log("btn test");

		API.saveInfo({
			name: this.state.name,
			age: this.state.age,
			gender: this.state.gender
		}).then(function(res){
			console.log(res)
		})




	}


	render() {
		return (
			
			<form name="roommateSurvey" id="roommateSurvey">
				<div className="form-group">
					<label>Name</label>
					<small id="nameHelp" className="form-text text-muted">Lets introduce ourselves...</small> 
					<input type="text" className="form-control" name="name" placeholder="My name is...." onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<label>Age</label>
					<small id="ageHelp" className="form-text text-muted">Not to be rude, but...</small>
					<input type="text" className="form-control" name="age" placeholder="Well if you must know..." onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<label>Gender</label>
					<select className="form-control" name="gender" onChange={this.handleInputChange}>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="nonbinary">Nonbinary</option>
						<option value="other">Other</option>
						<option value="prefer not to say">Prefer not to say</option>
					</select>
				</div>
				<div className="form-group">
					<legend>Additional Info</legend>
					<small className="form-text text-muted">Lets fill in some blanks...</small>
					<div className="form-group" id="additionalInfo">
						<label>Do you have any pet allergies?</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="checkbox1" value="Dogs" />
							<label>Dogs</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="checkbox2" value="Cats" />
							<label>Cats</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="checkbox3" value="Other" />
							<label>Other</label>
						</div>
					</div>
				</div>
				<button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit Form</button>
			</form>
			
		)
	}
}

export default Questionnaire;