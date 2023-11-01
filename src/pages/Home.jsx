import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ResourcesBar from '../components/ResourcesBar';
import Listings from '../components/Listings';
import Certifications from '../components/Certifications';
import About from '../components/About';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <>
      <Hero />
      <ResourcesBar />
      <About />
      <Certifications />
      <Listings />
      <Reviews />
    </>
  );
}

export default Home;
