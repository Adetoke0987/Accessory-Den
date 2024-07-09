import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles/ProductDescription.module.css'; 
import ExampleImage from '../assets/luxe.svg';

const ProductDescription = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Fetch or find the product details using the productId
  // For this example, I'm using a static product object
  const product = {
    id: productId,
    name: 'Eclipse Chrono',
    description: 'A sleek modern chronograph...',
    price: '45,000',
    image: ExampleImage,
  };

  const itemsInStock = 5;
  const recentlyViewedImages = [
    { id: 1, src: ExampleImage },
    { id: 2, src: ExampleImage },
    { id: 3, src: ExampleImage },
  ];

  return (
    <div className={styles['product-description-page']}>
      

      <div className={styles.breadcrumb}>
        <span onClick={() => navigate(-1)} className={styles['breadcrumb-link']}>Product</span> / {product.name}
      </div>

      <div className={styles['product-content']}>
        <div className={styles['product-image']}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles['product-details']}>
          <h1 className={styles['product-name']}>{product.name}</h1>
          <p className={styles['product-description']}>
            {product.description}
          </p>
          <div className={styles['product-rating']}>
            <span className={styles.stars}>★★★★☆</span> <span className={styles['rating-number']}>(91)</span>
          </div>
          <div className={styles['product-pricing']}>
            <span className={styles['original-price']}>NGN 50,000</span>
            <span className={styles['discounted-price']}>NGN {product.price}</span>
            <span className={styles['discount-percent']}>(20% off)</span>
          </div>
          <div className={styles['product-actions']}>
            <div className={styles['quantity-actions']}>
              <button className={styles['add-item']}>-</button>
              <span className={styles['items-in-stock']}>{itemsInStock}</span>
              <button className={styles['add-item']}>+</button>
              <span className={styles.only}>Only 12 items left! Don’t miss it</span>
            </div>
            <div className={styles['purchase-actions']}>
              <button className={styles['buy-now']}>Buy Now</button>
              <Link to="/cart">
              <button className={styles['add-to-cart']}>Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['recently-viewed']}>
        <h2>Recently Viewed</h2>
        <div className={styles['recent-images']}>
          {recentlyViewedImages.map(image => (
            <img key={image.id} src={image.src} alt={`Recently viewed ${image.id}`} className={styles['recent-images-img']} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
