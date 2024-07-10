import React from 'react';
import ProductCard from './ProductCard';
import styles from './styles/Products.module.css';
import Eclipse from '../assets/eclipse.svg';
import Luxe from '../assets/luxe.svg';
import Urban from '../assets/urban.svg';
import Stellar from '../assets/stellar.svg';

const Products = () => {
  const products = [
    { id: 1, image: Eclipse, name: 'Eclipse Chrono', rating: 4, collection: 'Sleek modern chronograph', price: '45,000' },
    { id: 2, image: Luxe, name: 'Luxe Timepiece', rating: 4, collection: 'Luxurious, minimalist', price: '60,000' },
    { id: 3, image: Urban, name: 'Urban Watch', rating: 4, collection: 'Urban sleek design', price: '50,000' },
    { id: 4, image: Stellar, name: 'Stellar Model', rating: 4, collection: 'Stellar performance', price: '55,000' },
    { id: 5, image: Eclipse, name: 'Eclipse Chrono', rating: 4, collection: 'Sleek modern chronograph', price: '45,000' },
    { id: 6, image: Luxe, name: 'Luxe Timepiece', rating: 4, collection: 'Luxurious, minimalist', price: '60,000' },
    { id: 7, image: Urban, name: 'Urban Watch', rating: 4, collection: 'Urban sleek design', price: '50,000' },
    { id: 8, image: Stellar, name: 'Stellar Model', rating: 4, collection: 'Stellar performance', price: '55,000' },
    { id: 9, image: Eclipse, name: 'Eclipse Chrono', rating: 4, collection: 'Sleek modern chronograph', price: '45,000' },
    { id: 10, image: Luxe, name: 'Luxe Timepiece', rating: 4, collection: 'Luxurious, minimalist', price: '60,000' },
    { id: 11, image: Urban, name: 'Urban Watch', rating: 4, collection: 'Urban sleek design', price: '50,000' },
    { id: 12, image: Stellar, name: 'Stellar Model', rating: 4, collection: 'Stellar performance', price: '55,000' },
    { id: 13, image: Eclipse, name: 'Eclipse Chrono', rating: 4, collection: 'Sleek modern chronograph', price: '45,000' },
    { id: 14, image: Luxe, name: 'Luxe Timepiece', rating: 4, collection: 'Luxurious, minimalist', price: '60,000' },
    { id: 15, image: Urban, name: 'Urban Watch', rating: 4, collection: 'Urban sleek design', price: '50,000' },
    { id: 16, image: Stellar, name: 'Stellar Model', rating: 4, collection: 'Stellar performance', price: '55,000' }
  ];

  return (
    <section id="target-section" className={styles.productsSection}>
      <h2 className={styles.productsTitle}>Wristwatch for you!</h2>
      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
