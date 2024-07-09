import React from 'react';
import './styles/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-logo">Accessory Den</div>
          <p className="footer-description">
            Our passion lies in curating a collection of premium wristwatches and accessories that speak to the modern gentleman's taste and lifestyle.
          </p>
          <div className="footer-social-media">
            <FaFacebook size={24} color="#3b5998" />
            <FaTwitter size={24} color="#00acee" />
            <FaInstagram size={24} color="#C13584" />
          </div>
        </div>
        <div className="footer-links">
          <h3>My Account</h3>
          <a href="#profile">Profile</a>
          <a href="#orders">Orders</a>
          <a href="#wishlist">Wishlist</a>
        </div>
        <div className="footer-links">
          <h3>Help</h3>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
          <a href="#support">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
