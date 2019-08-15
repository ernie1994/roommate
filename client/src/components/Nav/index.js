import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Home
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/post">Post a Room</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/account">Account</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;