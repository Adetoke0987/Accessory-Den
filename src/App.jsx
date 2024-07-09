import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductDescription from './components/ProductDescription';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout'; // Import Checkout component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header outside Routes to show on all pages */}
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/product/:productId" element={<ProductDescriptionLayout />} />
          <Route path="/cart" element={<ShoppingCartLayout />} />
          <Route path="/checkout" element={<CheckoutLayout />} /> {/* Add Checkout route */}
        </Routes>
        <Footer /> {/* Footer outside Routes to show on all pages */}
      </div>
    </Router>
  );
}

// MainLayout component to include Hero and Products
const MainLayout = () => (
  <>
    <Hero />
    <Products />
  </>
);

// ProductDescriptionLayout component to include only ProductDescription
const ProductDescriptionLayout = () => (
  <ProductDescription />
);

// ShoppingCartLayout component to include only ShoppingCart
const ShoppingCartLayout = () => (
  <ShoppingCart />
);

// CheckoutLayout component to include only Checkout
const CheckoutLayout = () => (
  <Checkout />
);

export default App;
