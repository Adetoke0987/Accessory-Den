import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Accessory Den</div>
      <nav className="header-nav">
        <a href="#products">Products</a>
        <a href="#contact">Contact Us</a>
        <a href="#about">About Us</a>
      </nav>
      <div className="header-icons">
        <div className="header-icon">
          <FaUser className="icon" />
          <span className="icon-label">Account</span>
        </div>
        <div className="header-icon">
        <Link to="/cart">
            <FaShoppingCart className="icon" />
            <span className="icon-label">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
