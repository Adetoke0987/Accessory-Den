import React from 'react';
import './styles/Hero.css';
import WristwatchSVG from '../assets/wristwatch.svg'; // Adjust the path as per your actual file location

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Grab up to 20% discount on selected Wrist Watch</h1>
        <button className="hero-button">Buy Now</button>
      </div>
      <div>
        <img src={WristwatchSVG} alt="Wrist Watch" style={{ width: '344px', height: '307px', borderRadius: '20px', top: '183px', left: '952px' }} />
      </div>
    </section>
  );
};

export default Hero;
