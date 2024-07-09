// src/components/CartSummary.js
import React from 'react';
import './styles/CartSummary.css';

const CartSummary = () => {
  // Sample data for cart summary
  const cartItems = [
    { id: 1, name: 'Eclipse Chrono', price: 45000, quantity: 1 },
    { id: 2, name: 'Luxe Timepiece', price: 60000, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price.toLocaleString()}
          </li>
        ))}
      </ul>
      <h3>Total: {calculateTotal().toLocaleString()}</h3>
    </div>
  );
};

export default CartSummary;
