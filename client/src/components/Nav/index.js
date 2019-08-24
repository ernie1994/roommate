import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Jumbotron } from 'reactstrap';
import "../../../src/styles.css";
// import Redirect from 'react-router-dom';

class Navi extends React.Component {

	state = {
		isLoggedIn: false
	}

	componentDidMount = () => {
		axios.get('api/user').then((data) => {
			if (data.data.user) {
				this.setState({ isLoggedIn: true });
			}
		})
	}

	handleLogout = () => {
		axios.post('api/logout').then(() => {

			this.setState({ isLoggedIn: false });
		})
	}

	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}

	closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
	render() {

		// const styles = {
		// 	jumbotron: {
		// 		backgroundColor: "white",
		// 		backgroundImage: `url("/images/blue-grad.jpg")`
		// 		// backgroundPosition: "50% 70%"
		// 	},
		// 	navLink: {
		// 		backgroundImage: "",
		// 		fontSize: "25px",
		// 		fontFamily: "Kaushan Script"
		// 	},

		// 	img: {
		// 		width: "40%",
		// 		height: "40%",
		// 	},

		// 	logtainer: {
		// 		backgroundColor: "red"
		// 	}

		// }
		return (

			<div>
				<Jumbotron>

					<div className="display-4 logtainer" >
						<img src="../../../images/room-logo2.png" alt="logo"></img>
					</div>

					<Navbar color="faded" light>
						<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
						<NavbarBrand className="nav-link" to="/#" className="mr-auto">Menu</NavbarBrand>

						<Collapse isOpen={!this.state.collapsed} navbar>
							<Nav vertical navbar>
								       

       {/* <Nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
 				<Link className="navbar-brand" to="/">
 					Home
 				</Link>			 
													{!this.props.userStatus ? 
														<NavItem className="Nav-item">						
 							<Link className="nav-link" to="/login">Sign Up / Login</Link>
 						</NavItem>
 						:
 						<NavItem className="Nav-item">						
 							<Link className="nav-link"to="/" onClick={this.props.handleLogout}> Logout </Link>
					</NavItem>				
					}
			



								

								<NavItem className="nav-item">
									<Link className="nav-link" to="/post">Post a Room</Link>
								</NavItem>

								<NavItem className="nav-item">
									<Link className="nav-link" to="/account">My Profile</Link>
								</NavItem>

							

							</Nav>
						</Collapse>

					</Navbar>

				</Jumbotron>

			</div>
		);
	}
}

export default Navi;
