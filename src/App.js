import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import Calculator from "./pages/Calculator";
import HomeWorth from "./pages/HomeWorth";
import BuyHouses from "./pages/BuyHouses";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="home-worth" element={<HomeWorth />} />
        <Route path="we-buy-houses" element={<BuyHouses />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
