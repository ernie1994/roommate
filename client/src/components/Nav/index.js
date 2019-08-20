import React from "react";
import axios from 'axios';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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

	render() {
		return (
			<div>
				<Navbar color="faded" light>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<NavbarBrand href="/#" className="mr-auto">Menu</NavbarBrand>

					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav vertical navbar>
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
			</div>
			// OLD NAV BAR
			// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			// 	<a className="navbar-brand" href="/">
			// 		Home
			// 	</a>
			// 	<ul className="navbar-nav">
			// 		{!this.state.isLoggedIn ?

			// 			<li className="nav-item">
			// 				<a className="nav-link" href="/login">Sign Up/Log in</a>
			// 			</li>

			// 			:

			// 			<li className="nav-item">
			// 				<a className="nav-link" onClick={this.handleLogout} href="*">Logout</a>
			// 			</li>

			// 		}
			// 		<li className="nav-item">
			// 			<a className="nav-link" href="/post">Post a Room</a>
			// 		</li>
			// 		<li className="nav-item">
			// 			<a className="nav-link" href="/account">Account</a>
			// 		</li>
			// 		<li className="nav-item">
			// 			<a className="nav-link" href="/questionnaire">Questionnaire</a>
			// 		</li>

			// 	</ul>
			// </nav>
		);
	}

}

export default Navi;