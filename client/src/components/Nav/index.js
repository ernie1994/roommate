import React from "react";
import axios from 'axios';

class Nav extends React.Component {

	state = {
		isLoggedIn: false
	}

	componentDidMount() {
		axios.get('api/user').then((data)=> {
			if(data.data.user) {
				this.setState({isLoggedIn: true});
			}
		})
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					Home
				</a>
				<ul className="navbar-nav">
					{!this.state.isLoggedIn ? 

						<li className="nav-item">
							<a className="nav-link" href="/login">Sign Up/Log in</a>
						</li>

						:

						""
					
					}
					<li className="nav-item">
						<a className="nav-link" href="/post">Post a Room</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/account">Account</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/questionnaire">Questionnaire</a>
					</li>
				</ul>
			</nav>
    	);
	}
    
}

export default Nav;