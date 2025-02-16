import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className='header-link'>
        <div className="header-logo">Accessory Den</div>
      </Link>
      
      <button className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </button>

      
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#products">Products</a>
        <a href="#contact">Contact Us</a>
        <a href="#about">About Us</a>
      </nav>

      <div className={`header-icons ${menuOpen ? 'open' : ''}`}>
        <div className="header-icon">
          <FaUser className="icon" />
          <span className="icon-label">Account</span>
        </div>
        <div className="header-icon">
          <Link to="/cart" className="custom-link">
            <FaShoppingCart className="icon" />
            <span className="icon-label">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
