import React from 'react';
import styles from './styles/Hero.module.css'; // Import CSS module
import WristwatchSVG from '../assets/wristwatch.svg'; // Adjust the path as per your actual file location
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        <h1>Grab up to 20% discount on selected Wrist Watch</h1>
        <Link to='/target#target-section'>
          <button className={styles['hero-button']}>Buy Now</button>
        </Link>
      </div>
      <div>
        <img src={WristwatchSVG} alt="Wrist Watch" />
      </div>
    </section>
  );
};

export default Hero;
