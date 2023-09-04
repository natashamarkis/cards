import React from "react";
import "../../index.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container">
        <h1>Super App</h1>
          <div className="navbar-nav">
            <Link to='/' className="nav-link">
              Home
            </Link>
            <Link to='/cards' className="nav-link">
              Cards
            </Link>
            <Link to='/favourites' className="nav-link">
              Favourites
            </Link>
          </div>
        </div>
    </nav>
  );
}

export default Nav;
