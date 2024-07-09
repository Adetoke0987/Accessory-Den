import React from 'react';
import './styles/Checkout.css';
import master from '../assets/mast.png'

const Checkout = () => {
    return (
        <div className="checkout">
            {/* <h1>Checkout</h1> */}
            <div className="checkout-content">
                <div className="billing-details">
                    <h2>Billing Details</h2>
                    <form>
                        <div className="form-group">
                            <div className="form-control">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" placeholder="First Name" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-controll">
                            <label htmlFor="street-address">Street Address</label>
                            <input type="text" id="street-address" placeholder="Street Address" />
                        </div>
                        <div className="form-group">
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="ship-different-country" className="checkbox-label">
                                <input type="checkbox" id="ship-different-country" />
                                Ship to a different country
                            </label>
                        </div>
                    </form>
                    <div className="payment-method">
                        <h2>Payment Method</h2>
                        <form>
                            <div className="form-control">
                                <input type="text" className="credit-card-input" id="credit-card" placeholder="Credit card" />
                            </div>

                            <div className="form-controll">
                                <label htmlFor="card-number">Card Number</label>
                                <input type="text" id="card-number" placeholder="1234 5678 9012 3456" />
                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="expiry-date">Expiry Date</label>
                                    <input type="text" id="expiry-date" placeholder="MM/YY" />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" placeholder="CVV" />
                                </div>
                            </div>
                            <button type="submit">Place Order</button>
                        </form>
                    </div>
                </div>
                <div className="cart-summary">
                    <h2>Cart Summary</h2>
                    <div className="cart-item">
                        <div className="item-details">
                            <img src="path/to/image" alt="Product" />
                            <div className="item-info">
                                <p>Product Name</p>
                                <p>Price</p>
                            </div>
                        </div>
                        <div className="item-total">
                            <p>Total Price</p>
                        </div>
                    </div>
                    <h3>Total: [Total Price]</h3>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
