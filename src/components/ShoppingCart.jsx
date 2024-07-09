import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/ShoppingCart.css';

const ShoppingCart = () => {
  // Sample products in cart
  const initialCart = [
    { id: 1, image: 'path/to/image1', description: 'Eclipse Chrono', price: 45000, quantity: 1 },
    { id: 2, image: 'path/to/image2', description: 'Luxe Timepiece', price: 60000, quantity: 1 },
  ];

  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, delta) => {
    setCart(prevCart => prevCart.map(product =>
      product.id === id
        ? { ...product, quantity: Math.max(1, product.quantity + delta) }
        : product
    ));
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <nav className="breadcrumb">
        <Link to="/">Products</Link> &gt; 
        <Link to="/product/:productId"> Product Details</Link> &gt; 
        <span>Shopping Cart</span>
      </nav>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.description} /></td>
              <td>{product.description}</td>
              <td>{product.price.toLocaleString()}</td>
              <td>
                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                {product.quantity}
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </td>
              <td>{(product.price * product.quantity).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: {calculateSubtotal().toLocaleString()}</h2>
    </div>
  );
};

export default ShoppingCart;
