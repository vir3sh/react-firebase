import React, { useState } from 'react';
import './navbar.css';
import  logo from './logo.png'



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="" style={{width:'100%',height:'75px',maxWidth:'75px'}} />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>

        

      
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      
    </div>
  );
}

export default Navbar;
