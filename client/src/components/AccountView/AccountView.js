import React from 'react';
// import { Redirect } from 'react-router';
import { Row, Col, Container, Card, CardText, CardImg, CardHeader, Button, Wrapper } from 'reactstrap';
import Axios from 'axios';
import './accountView.css';

class AccountView extends React.Component {

	constructor(props){
		super(props);
		this.user = props.user;
	}

	render() {
		return (
			<div>
				<Container>
					<h1></h1>
					<Card>
						<CardHeader className="text-center">Welcome, {this.props.user.username}</CardHeader>
						<Container className="accountViewContainer">
							<Row>
							<Col md={4}>
								<CardImg top width="200px" height="300px" src={this.props.user.profileImage} alt="placeholder" className="rounded-circle"/>
							</Col>
							<Col md={8}>
								  <h3>{this.props.user.name}</h3>
								  <p><strong>Age: </strong>{this.props.user.age}</p>
								  <p><strong>Gender: </strong>{this.props.user.gender}</p>
								  <p><strong>Current Location: </strong>{this.props.user.city}, {this.props.user.props}, {this.props.user.zip}</p>
								  <p><strong>About Me: </strong><br></br>{this.props.user.bio} </p>
							</Col>
						</Row>
						<Row>
							<h5>Additional Info</h5>
							<Col md={12}>
								<p><strong>Owns Pets: </strong>{this.props.user.pets}</p>
								<p><strong>Pet Allergies: </strong>{this.props.user.allergies}</p>
								<p><strong>Smokes: </strong>{this.props.user.smokes}</p>
								<p><strong>Drinks: </strong>{this.props.user.drinks}</p>
								<p><strong>Up Late: </strong>{this.props.user.upLate}</p>
							</Col>
						</Row>
						</Container>
					</Card>					
				</Container>
			</div>
		)
	}
}

export default AccountView;
