import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Products.module.css';

const ProductCard = ({ id, image, name, rating, collection, price }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className={styles.productImage} />
      </Link>
      <div className={styles.productDetails}>
        <span className={styles.productName}>{name}</span>
        <span className={styles.productRating}>{renderStars()}</span>
      </div>
      <div className={styles.productCollection}>{collection}</div>
      <div className={styles.productPrice}>{price}</div>
      <button className={styles.productButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
