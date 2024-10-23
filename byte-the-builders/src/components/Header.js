
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/clients">Clients</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/materials">Materials</Link>
        <Link to="/equipment">Equipment</Link>
      </nav>
    </header>
  );
};

export default Header;
