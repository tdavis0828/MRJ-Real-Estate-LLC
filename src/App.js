import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Listings from "./pages/Listings";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resources" element={<Resources />} />
        <Route path="listings" element={<Listings />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
