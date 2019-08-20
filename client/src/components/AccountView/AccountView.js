import React from 'react';
// import { Redirect } from 'react-router';
import { Row, Col, Container, Card, CardText, CardImg, CardHeader, Button, Wrapper } from 'reactstrap';
import Axios from 'axios';
import './accountView.css';

class AccountView extends React.Component {

	
	state = {
		user: {}
	}

	componentWillMount = () => {
		console.log("willmountfire");
		Axios.get('/api/user').then((res)=> {
			// console.log(res.data.user);
			if(res.data.user == null){
				window.location = '/login'
			}
			else{
				this.setState({user: res.data.user});
			console.log(this.state.user);
			}
			
		})
	}

	render() {
		return (
			<div>
				<Container>
					
					<Card>
						<CardHeader className="text-center">Welcome, {this.state.user.username}</CardHeader>
						<Container className="accountViewContainer">
							<Row>
							<Col md={4}>
								<CardImg top width="200px" height="300px" src="http://lorempixel.com/200/200/" alt="placeholder" className="rounded-circle"/>
							</Col>
							<Col md={8}>
								  <h3>{this.state.user.name}</h3>
								  <p><strong>Age: </strong>{this.state.user.age}</p>
								  <p><strong>Gender: </strong>{this.state.user.gender}</p>
								  <p><strong>Current Location: </strong>{this.state.user.city}, {this.state.user.state}, {this.state.user.zip}</p>
								  <p><strong>About Me: </strong><br></br>{this.state.user.bio} </p>
							</Col>
						</Row>
						<Row>
							<h5>Additional Info</h5>
							<Col md={12}>
								
								<p><strong>Owns Pets: </strong>{this.state.user.pets}</p>
								<p><strong>Pet Allergies: </strong>{this.state.user.allergies}</p>
								<p><strong>Smokes: </strong>{this.state.user.smokes}</p>
								<p><strong>Drinks: </strong>{this.state.user.drinks}</p>
								<p><strong>Up Late: </strong>{this.state.user.upLate}</p>
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
