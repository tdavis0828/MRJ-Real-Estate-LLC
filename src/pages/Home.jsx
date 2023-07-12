import React from "react";
import Hero from "../components/Hero";
import ResourcesBar from "../components/ResourcesBar";
import Listings from "../components/Listings";
import Certifications from "../components/Certifications";
import About from "../components/About";
import Reviews from "../components/Reviews";

function Home() {
  async function getMLSData() {
    const res = await fetch(
      "https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21"
    );
    const data = await res.json();
    console.log(data);
  }
  getMLSData();
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
