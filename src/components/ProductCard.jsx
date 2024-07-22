// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import styles from './styles/Products.module.css';

const ProductCard = ({ id, image, name, rating, collection, price }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

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

  const handleAddToCart = () => {
    addToCart({ id, image, name, rating, collection, price });
    navigate('/cart');
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
      <div className={styles.productPrice}>NGN{price}</div>
      <button className={styles.productButton} onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
