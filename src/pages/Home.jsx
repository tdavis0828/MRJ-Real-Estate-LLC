import React from 'react';
import Hero from '../components/Hero';
import ResourcesBar from '../components/ResourcesBar';
import Listings from '../components/Listings';
import Certifications from '../components/Certifications';
import About from '../components/About';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQs';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <ResourcesBar />
      <About />
      <Certifications />
      <Listings />
      <Reviews />
      {/* <FAQ /> */}
      {/* <Contact /> */}
    </>
  );
}

export default Home;
