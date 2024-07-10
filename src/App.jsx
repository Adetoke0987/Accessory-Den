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
        <Header /> 
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/product/:productId" element={<ProductDescriptionLayout />} />
          <Route path="/cart" element={<ShoppingCartLayout />} />
          <Route path="/checkout" element={<CheckoutLayout />} /> 
          <Route path="/target" element={<Products />}/>
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}


const MainLayout = () => (
  <>
    <Hero />
    <Products />
  </>
);


const ProductDescriptionLayout = () => (
  <ProductDescription />
);


const ShoppingCartLayout = () => (
  <ShoppingCart />
);


const CheckoutLayout = () => (
  <Checkout />
);

export default App;
