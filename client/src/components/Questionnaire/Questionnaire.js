import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, } from 'reactstrap';
import API from '../../utils/API';
import { Redirect } from 'react-router';
import Axios from 'axios';
import './questionnaire.css';
import Storage from "../../firebase/storage";

class Questionnaire extends React.Component {

	state = {
		name: "",
		age: 0,
		gender: "",
		state: "",
		city: "",
		zip: "",
		bio: "",
		allergies: "",
		pets: "",
		smokes: "",
		drinks: "",
		upLate: "",
		file: null,
		email: "",
		phone: "",
		// state variable which will allow us to redirect the user to the home page once they have filled out the form
		formSubmitted: false
	}

	handleInputChange = (event) => {
		let value = event.target.value;
		const name = event.target.name;

		if (event.target.type === "file") value = event.target.files[0];

		this.setState({
			[name]: value
		});
	};

	uploadImage = (file, imageCb) => {
		const imageRef = Storage.ref(`profile-images/${require("uuid/v4")()}`);
		imageRef.put(file)
			.then(_snapshot => {
				return imageRef.getDownloadURL();
			})
			.then(url => {
				imageCb(null, url)
			})
			.catch(err => imageCb(err));
	};


	handleFormSubmit = () => {

		this.uploadImage(this.state.file, (err, url) => {
			if (err) return window.prompt("Could not save profile picture. Please try again");
			API.updateUser({
				name: this.state.name,
				age: this.state.age,
				gender: this.state.gender,
				state: this.state.state,
				city: this.state.city,
				zip: this.state.zip,
				bio: this.state.bio,
				allergies: this.state.allergies,
				pets: this.state.pets,
				drinks: this.state.drinks,
				smokes: this.state.smokes,
				upLate: this.state.upLate,
				profileImage: url,
				email: this.state.email,
				phone: this.state.phone
			});

			this.setState({ formSubmitted: true }, () => console.log(this.state));

		});
	}

	userTest = () => {
		Axios.get('/api/user').then((response) => {
			console.log(response);
		});
	}


	render() {
		return (
			<div>
				{!this.state.formSubmitted ?
					<Container>

						<Form name="roommateSurvey" id="roommateSurvey">

							<FormGroup className="form-group">
								<Label>Name</Label>
								<small id="nameHelp" className="form-text text-muted">Lets introduce ourselves...</small>
								<Input required type="text" className="form-control" name="name" placeholder="My name is...." onChange={this.handleInputChange} />
							</FormGroup>
							<FormGroup className="form-group">
								<Label>Age</Label>
								<small id="ageHelp" className="form-text text-muted">Not to be rude, but...</small>
								<Input required type="text" className="form-control" name="age" placeholder="Well if you must know..." onChange={this.handleInputChange} />
							</FormGroup>
							<Label>Address</Label>
							<Row className="form-row">

								<Col md={7}>
									<Input required type="text" className="form-control" placeholder="State" name="state" onChange={this.handleInputChange} />
								</Col>
								<Col >
									<Input required type="text" className="form-control" placeholder="City" name="city" onChange={this.handleInputChange} />
								</Col>
								<Col >
									<Input required type="text" className="form-control" placeholder="Zipcode" name="zip" onChange={this.handleInputChange} />
								</Col>
							</Row>

							<FormGroup className="form-group">
								<Label>Gender</Label>
								<select required className="form-control" name="gender" onChange={this.handleInputChange}>
									<option hidden></option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Nonbinary">Nonbinary</option>
									<option value="Prefer not to say">Prefer not to say</option>
								</select>
							</FormGroup>

							<FormGroup>
								<Label for="bio">Tell us a little bit about yourself</Label>
								<Input required type="textarea" name="bio" id="bio" onChange={this.handleInputChange} />
							</FormGroup>
							<FormGroup className="form-group">
								<Label>Email</Label>
								<Input required type="email" className="form-control" name="email" placeholder="My email address is...." onChange={this.handleInputChange} />
							</FormGroup>
							<FormGroup className="form-group">
								<Label>Phone number</Label>
								<Input required type="text" className="form-control" name="phone" placeholder="My phone number is...." onChange={this.handleInputChange} />
							</FormGroup>
							<FormGroup>
								<legend>Additional Info</legend>
								<small className="form-text text-muted">Lets fill in some blanks...</small>

								<Label className="mr-5">Do you have any pet allergies?</Label>
								<select required className="form-control mbd-select colorful-select" name="allergies" onChange={this.handleInputChange} >
									<option hidden />
									<option value="Cats">Cats</option>
									<option value="Dogs">Dogs</option>
									<option value="Other">Other</option>
									<option value="None">No allergies</option>
								</select>


								<Label className='mr-5'>Do you own any pets?</Label>
								<select required className="form-control mbd-select colorful-select" name="pets" onChange={this.handleInputChange}>
									<option hidden />
									<option value="Cats">Cat / Cats</option>
									<option value="Dogs">Dog / Dogs</option>
									<option value="Other">Other</option>
									<option value="None">No pets</option>
								</select>

								<Label className='mr-5'>Do you drink?</Label>
								<select required className="form-control mbd-select colorful-select" name="drinks" onChange={this.handleInputChange}>
									<option hidden />
									<option value="Does drink">Yes</option>
									<option value="Doesn't drink">No</option>
									<option value="Sometimes drinks">Sometimes</option>
								</select>

								<Label className='mr-5'>Do you smoke?</Label>
								<select required className="form-control mbd-select colorful-select" name="smokes" onChange={this.handleInputChange}>
									<option hidden />
									<option value="Does smoke">Yes</option>
									<option value="Doesn't smoke">No</option>
									<option value="Sometimes smokes">Sometimes</option>
								</select>

								<Label className='mr-5'>Are you often up late (Past 1 AM)?</Label>
								<select required className="form-control mbd-select colorful-select" name="upLate" onChange={this.handleInputChange}>
									<option hidden />
									<option value="Never">Never</option>
									<option value="Almost never">Almost never</option>
									<option value="Sometimes">Sometimes</option>
									<option value="Most of the time">Most of the time</option>
									<option value="All the time">All the time</option>
								</select>
							</FormGroup>
							<FormGroup row className="d-flex justify-content-start">
								<Col xs="10" sm="8">
									<Label
										for="profile-pic">
										<strong>
											Profile Image
                            </strong>
									</Label>
									<Input
										onChange={this.handleInputChange}
										id="profile-pic"
										name="file"
										required
										type="file">
									</Input>
								</Col>
							</FormGroup>
							<Button onClick={this.handleFormSubmit}>Submit Form</Button>
						</Form>
					</Container>

					:

					<Redirect to='/account' />
				}
			</div>

		)
	}
}

export default Questionnaire;