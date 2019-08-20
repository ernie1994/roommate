import React from "react";
import axios from 'axios';
// import Redirect from 'react-router-dom';
import {Link} from 'react-router-dom';
// import {Redirect} from 'react-router';
// 
class Nav extends React.Component {

	state = {
		isLoggedIn: false
	}

	componentWillMount = () => {
		console.log("navbar mounting")
		axios.get('api/user').then((data)=> {
			if(data.data.user) {
				this.setState({isLoggedIn: true});
			}
		})
	}

	handleLogout = () => {
		axios.post('api/logout').then(()=> {
			
			this.setState({isLoggedIn: false});
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
							{/* <Link to="/login">Sign Uo / Login</Link> */}
						</li>

						:

						<li className="nav-item">
							<a className="nav-link" onClick={this.handleLogout} href="/">Logout</a>
							{/* <Link to="/" onClick={this.handleLogout}>Logout</Link> */}
						</li>
					
					}
					<li className="nav-item">
						<a className="nav-link" href="/post">Post a Room</a>
						{/* <Link to="/post">Post a Room</Link> */}
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/account">Account</a>
						{/* <Link to="/account">Account</Link> */}
					</li> 
					 <li className="nav-item">
						<a className="nav-link" href="/questionnaire">Questionnaire</a>
						{/* <Link to="/questionnaire">Questionnaire</Link> */}
					</li> 
					
				</ul>
			</nav>
    	);
	}
    
}

export default Nav;