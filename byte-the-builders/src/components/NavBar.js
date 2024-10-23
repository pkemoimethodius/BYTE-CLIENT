import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  // Import CSS for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ConstructionCo</Link>
      </div>
      <ul className="navbar-links">

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
