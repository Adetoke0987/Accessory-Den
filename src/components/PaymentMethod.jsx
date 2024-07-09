// src/components/PaymentMethod.js
import React from 'react';
import './styles/PaymentMethod.css';

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <h2>Payment Method</h2>
      <form>
        <label>
          <input type="radio" name="payment" value="creditCard" required />
          Credit Card
        </label>
        <label>
          <input type="radio" name="payment" value="paypal" required />
          PayPal
        </label>
        <label>
          <input type="radio" name="payment" value="bankTransfer" required />
          Bank Transfer
        </label>
      </form>
    </div>
  );
};

export default PaymentMethod;
