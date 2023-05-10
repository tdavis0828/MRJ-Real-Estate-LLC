import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resources from './pages/Resources';
// import Listings from './pages/Listings';
import WeBuyHouses from './pages/WeBuyHouses';
import MortgageCalculator from './pages/MortgageCalculator';
import WorthCalculator from './pages/WorthCalculator';
import Blog from './pages/Blog';
import Contact from './components/Contact';
import Faq from './pages/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resources" element={<Resources />} />
        {/* <Route path="listings" element={<Listings />} /> */}
        <Route path="we-buy-houses" element={<WeBuyHouses />} />
        <Route path="mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="worth-calculator" element={<WorthCalculator />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
