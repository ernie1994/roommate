import React from "react";
import {Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">
					Home
				</Link>			
					{!this.props.userStatus ?
						<NavItem className="Nav-item">						
							<Link to="/login">Sign Uo / Login</Link>
						</NavItem>
						:
						<NavItem className="Nav-item">						
							<Link to="/" onClick={this.props.handleLogout}> Logout </Link>
						</NavItem>				
					}
					<NavItem className="Nav-item">						
						<Link to="/post"> Post Link Room</Link>
					</NavItem>
					<NavItem className="Nav-item">						
						<Link to="/account"> Account</Link>
					</NavItem> 
					 <NavItem className="Nav-item">					
						<Link to="/questionnaire"> Questionnaire</Link>
					</NavItem> 
			</Nav>
    	);
	}
    
}

export default NavBar;