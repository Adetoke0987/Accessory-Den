// src/components/BillingDetails.js
import React from 'react';
import './styles/BillingDetails.css';

const BillingDetails = () => {
  return (
    <div className="billing-details">
      <h2>Billing Details</h2>
      <form>
        <label>
          Full Name
          <input type="text" name="fullName" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Address
          <input type="text" name="address" required />
        </label>
        <label>
          City
          <input type="text" name="city" required />
        </label>
        <label>
          State
          <input type="text" name="state" required />
        </label>
        <label>
          Zip Code
          <input type="text" name="zip" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required />
        </label>
      </form>
    </div>
  );
};

export default BillingDetails;
