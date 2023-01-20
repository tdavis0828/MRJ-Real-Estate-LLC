import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
