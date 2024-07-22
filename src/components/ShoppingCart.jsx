// src/components/ShoppingCart.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './styles/ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart">
      <nav className="breadcrumb">
        <Link to="/">Products</Link> &gt; 
        <Link to="/product/:productId">Product Details</Link> &gt; 
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

      <div className="summary-row">
        <div className="summary-item">
          <span>Discount</span>
          <span>₦0.00</span>
        </div>
        <div className="summary-item">
          <span>Delivery</span>
          <span>₦1,500.00</span>
        </div>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>{calculateSubtotal().toLocaleString()}</span>
        </div>
        <div className="summary-item">
          <span>Total</span>
          <span>{(calculateSubtotal() + 1500).toLocaleString()}</span>
        </div>
      </div>

      <div className="coupon-checkout">
        <div className="coupon">
          <label htmlFor="coupon-code">Coupon Code:</label>
          <input type="text" id="coupon-code" placeholder="Enter coupon code" />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
