import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Blog from './pages/Blog';
import Contact from './components/Contact';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import Calculator from './pages/Calculator';
import HomeWorth from './pages/HomeWorth';
import BuyHouses from './pages/BuyHouses';
import CurrentListings from './pages/CurrentListings';

function App() {
  const { isLoggedIn } = useSelector((state) => state.navbar, shallowEqual);
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<AdminPanel />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="calculator" element={<Calculator />} />
        <Route path="home-worth" element={<HomeWorth />} />
        <Route path="we-buy-houses" element={<BuyHouses />} />
        <Route path="current-listings" element={<CurrentListings />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
