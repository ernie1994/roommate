import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';
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
						<NavbarBrand className="nav-link" href="/#" className="mr-auto">Menu</NavbarBrand>

						<Collapse isOpen={!this.state.collapsed} navbar>
							<Nav vertical navbar>
      
//This is what was in master for the following section. Saving it in comments incase something breaks
//       <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// 				<Link className="navbar-brand" to="/">
// 					Home
// 				</Link>			
// 					{!this.props.userStatus ?
// 						<NavItem className="Nav-item">						
// 							<Link to="/login">Sign Uo / Login</Link>
// 						</NavItem>
// 						:
// 						<NavItem className="Nav-item">						
// 							<Link to="/" onClick={this.props.handleLogout}> Logout </Link>
// 						</NavItem>				
// 					}
// 					<NavItem className="Nav-item">						
// 						<Link to="/post"> Post Link Room</Link>
// 					</NavItem>
// 					<NavItem className="Nav-item">						
// 						<Link to="/account"> Account</Link>
// 					</NavItem> 
// 					 <NavItem className="Nav-item">					
// 						<Link to="/questionnaire"> Questionnaire</Link>
// 					</NavItem> 
// 			</Nav>
//     	);
// 	}
    
// }

// export default NavBar;
// >>>>>>> master
      
      
								<NavItem className="nav-item">
									<NavLink className="nav-link" href="/">Home/Search</NavLink>
								</NavItem>

								<NavItem className="nav-item">
									<NavLink className="nav-link" href="/post">Post a Room</NavLink>
								</NavItem>

								<NavItem className="nav-item">
									<NavLink className="nav-link" href="/account">My Profile</NavLink>
								</NavItem>

								{!this.state.isLoggedIn ?
									<NavItem className="nav-item">
										<NavLink className="nav-link" href="/login">Sign-Up/Log-in</NavLink>
									</NavItem>
									:
									<NavItem className="nav-item">
										<NavLink className="nav-link" onClick={this.handleLogout} href="*">Logout</NavLink>
									</NavItem>
								}

							</Nav>
						</Collapse>

					</Navbar>

				</Jumbotron>

			</div>
		);
	}
}
