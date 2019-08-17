import React from 'react';
import { Redirect } from 'react-router';
import { Row, Col, Container, Card, CardText, CardImg } from 'reactstrap';

class AccountView extends React.Component {

	

	render() {
		return (
			<div>
				<Container>
					
					<Card>
						<Row>
							<Col md={4}>
								<CardImg top width="100%" src="http://lorempixel.com/400/200/" alt="placeholder" />
							</Col>
							<Col md={8}>
								<CardText>
									eyyyy baybeeeee
								</CardText>
							</Col>
						</Row>

					</Card>
						
				</Container>
			</div>
		)
	}
}

export default AccountView;
