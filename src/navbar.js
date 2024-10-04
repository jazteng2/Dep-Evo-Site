import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/razor.png';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <a href="/">
        <img src={logo} alt="Logo" />
        </a>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <div className='navbar-right'>

      </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
