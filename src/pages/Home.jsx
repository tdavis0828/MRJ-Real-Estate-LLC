import React from "react";
import Hero from "../components/Hero";
import ResourcesBar from "../components/ResourcesBar";
import Listings from "../components/Listings";
import Certifications from "../components/Certifications";
import About from "../components/About";
import Reviews from "../components/Reviews";

function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "REPLIERS-API-KEY": "aMLQQCBdLnhXkkVV7H9gkWfITGaY5D",
    },
  };
  async function getMLSData() {
    const res = await fetch(
      "https://sandbox.repliers.io/listings?listings=true&operator=AND&sortBy=updatedOnDesc&status=A",
      options
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
