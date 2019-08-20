import React from "react";
import {Nav, NavItem, NavLink} from 'reactstrap';

class NavBar extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<NavLink className="navbar-brand" href="/">
					Home
				</NavLink>			
					{!this.props.userStatus ?
						<NavItem className="Nav-item">						
							<NavLink href="/login">Sign Uo / Login</NavLink>
						</NavItem>
						:
						<NavItem className="Nav-item">						
							<NavLink href="/" onClick={this.handleLogout}> Logout </NavLink>
						</NavItem>				
					}
					<NavItem className="Nav-item">						
						<NavLink href="/post"> Post NavLink Room</NavLink>
					</NavItem>
					<NavItem className="Nav-item">						
						<NavLink href="/account"> Account</NavLink>
					</NavItem> 
					 <NavItem className="Nav-item">					
						<NavLink href="/questionnaire"> Questionnaire</NavLink>
					</NavItem> 
			</Nav>
    	);
	}
    
}

export default NavBar;