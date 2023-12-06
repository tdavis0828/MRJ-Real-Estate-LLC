import React, { useEffect, useMemo, useState } from 'react';
import { StyledCurrentListings } from '../styles/Stylesheet';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { nanoid } from 'nanoid';
import deafultImg from '../images/default-image-icon-missing-picture-page-vector-40546530.jpg';
import upArrow from '../images/up-arrow.png';
import downArrow from '../images/arrow-down.png';
import directionsBtn from '../images/gps.png';

function CurrentListings() {
  const [homes, setHomes] = useState([]);
  const center = useMemo(() => ({ lat: 35.393528, lng: -119.043732 }), []);
  const [currentListing, setCurrentListing] = useState({});
  const [isPageOpen, setIsPageOpen] = useState(false);
  const height = isPageOpen ? '2500px' : '750px';

  // Populates homes array
  const MY_KEY = process.env.REACT_APP_ZILLOW_API_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': MY_KEY,
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com',
    },
  };
  async function getMLSData() {
    // Formats price of the home, adds comma
    const formatNumber = (num) => {
      parseInt(num);
      const options = { maximumFractionDigits: 2 };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(num);
      return formattedNumber;
    };
    // Fetches data from API
    const res = await fetch(
      'https://zillow56.p.rapidapi.com/search?location=bakersfield%2C%20ca',
      options
    );

    const data = await res.json();
    data.results.forEach((res, i) => {
      // Formats price, inserts commas where needed
      res.price = formatNumber(res.price);
      // Removes the underscore from the home type key value pair
      if (res.homeType.includes('_')) {
        res.homeType = res.homeType.replace('_', ' ');
      }
      // Removes any listings that are plotes of land with no houses
      if (res.homeType === 'LOT') {
        data.results.splice(i, 1);
      }
      // Removes any listings without images
      if (res.imgSrc.includes('googleapis')) {
        data.results.splice(i, 1);
      }
      // Removes any listings with a price of 0
      if (res.price === 0) {
        data.results.splice(i, 1);
      }
    });
    setHomes(data.results);
  }

  useEffect(() => {
    getMLSData();
  }, []);

  return (
    <StyledCurrentListings>
      <GoogleMap
        zoom={11}
        center={center}
        mapContainerClassName="map-container"
      >
        {homes.map((home) => {
          const color =
            currentListing.streetAddress === home.streetAddress
              ? 'green'
              : 'blue';

          return (
            <MarkerF
              icon={{
                url: `http://maps.google.com/mapfiles/ms/icons/${color}.png`,
              }}
              title={home.streetAddress}
              key={nanoid()}
              position={{ lat: home.latitude, lng: home.longitude }}
              onClick={() => {
                const currentCard = document.getElementById(home.streetAddress);
                console.log(currentCard);
                currentCard.scrollIntoView();
                setCurrentListing(home);
                setIsPageOpen(true);
              }}
            />
          );
        })}
      </GoogleMap>
      <div className="open-page">
        <img
          src={!isPageOpen ? upArrow : downArrow}
          alt="upwards arrow"
          onClick={() => {
            !isPageOpen ? setIsPageOpen(true) : setIsPageOpen(false);
          }}
        />
      </div>

      <div className="list" style={{ height }}>
        {homes.map((home) => {
          return (
            <div
              key={nanoid()}
              className={
                currentListing.streetAddress === home.streetAddress
                  ? 'listing selected'
                  : 'listing'
              }
              id={home.streetAddress}
              onClick={() => {
                setCurrentListing(home);
              }}
            >
              <div className="listing-image">
                <img src={home.imgSrc ? home.imgSrc : deafultImg} alt="/" />
              </div>
              <div className="listing-info">
                <p className="price">${home.price}</p>
                <p className="details">
                  {home.bedrooms} bed | {home.bathrooms} bath |{' '}
                  {home.livingArea} sqft |{' '}
                  <span className="home-type">{home.homeType}</span>
                </p>
                <a
                  href={`https://www.google.com/search?q=${home.streetAddress}+${home.state}+${home.zipcode}`}
                  className="address"
                  target="_blank"
                  rel="noreferrer"
                >
                  {home.streetAddress}, {home.state} {home.zipcode}
                  <img src={directionsBtn} alt="/" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </StyledCurrentListings>
  );
}

export default CurrentListings;
