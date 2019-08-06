import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Home
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Post a Room</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/search">
                        Search Room</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;