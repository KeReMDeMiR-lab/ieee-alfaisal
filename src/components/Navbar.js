import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/images/ieee-logo.png`} alt="IEEE Alfaisal" />
          <span>IEEE Alfaisal</span>
        </Link>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'}></div>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link" onClick={() => setIsOpen(false)}>Our Team</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;