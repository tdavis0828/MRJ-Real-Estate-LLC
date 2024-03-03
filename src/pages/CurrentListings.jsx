import React, { useEffect, useMemo, useState } from 'react';
import { StyledCurrentListings } from '../styles/Stylesheet';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { nanoid } from 'nanoid';
import deafultImg from '../images/default-image-icon-missing-picture-page-vector-40546530.jpg';
import upArrow from '../images/up-arrow.png';
import downArrow from '../images/arrow-down.png';

function CurrentListings() {
  const [homes, setHomes] = useState([]);
  const [filteredHomes, setFilteredHomes] = useState([]);
  const [delano, setDelano] = useState(false);
  const [bakersfield, setBakersfield] = useState(false);
  const [shafter, setShafter] = useState(false);
  const [tehachapi, setTehachapi] = useState(false);
  const center = useMemo(() => ({ lat: 35.393528, lng: -119.043732 }), []);
  const [currentListing, setCurrentListing] = useState({});
  const [isPageOpen, setIsPageOpen] = useState(false);
  const height = isPageOpen ? '2500px' : '350px';

  // Populates homes array
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0cc29cce87msh85a4f650fff05e6p1ec97bjsn7783d537ee80',
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com',
    },
  };
  async function getMLSData() {
    // (Helper function) Formats price of the home, adds comma
    const formatNumber = (num) => {
      parseInt(num);
      const options = { maximumFractionDigits: 2 };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(num);
      return formattedNumber;
    };
    // Fetches data from API
    let [res, res2] = await Promise.all([
      fetch(
        'https://zillow56.p.rapidapi.com/search?location=kern%20county&page=1&status=forSale&sortSelection=days&isLotLand=false&price_min=100&sqft_min=100&onlyWithPhotos=true&lotSize_min=100&keywords=bakersfield%2Cdelano%2Ctehachapi%2Cshafter',
        options
      ),
      fetch(
        'https://zillow56.p.rapidapi.com/search?location=kern%20county&page=2&status=forSale&sortSelection=days&isLotLand=false&price_min=100&sqft_min=100&onlyWithPhotos=true&lotSize_min=100&keywords=bakersfield%2Cdelano%2Ctehachapi%2Cshafter',
        options
      ),
    ]);

    const data = await res.json();
    const data2 = await res2.json();

    // (FILTERING DATA)
    // Removes the underscore from the home type key value pair
    data.results.forEach((res) => {
      if (res.homeType.includes('_')) {
        res.homeType = res.homeType.replace('_', ' ');
      }
    });
    data2.results.forEach((res) => {
      if (res.homeType.includes('_')) {
        res.homeType = res.homeType.replace('_', ' ');
      }
    });

    // Removes any listings without images
    // (UPDATED//REDUNDANCY) Request url should remove these by default
    data.results.forEach((res, i) => {
      if (res.imgSrc.includes('googleapis')) {
        data.results.splice(i, 1);
      }
    });
    data2.results.forEach((res, i) => {
      if (res.imgSrc.includes('googleapis')) {
        data.results.splice(i, 1);
      }
    });

    // Formats price, inserts commas where needed
    data.results.forEach((res) => {
      res.price = formatNumber(res.price);
    });
    data2.results.forEach((res) => {
      res.price = formatNumber(res.price);
    });

    setHomes([...data.results, ...data2.results]);
  }

  useEffect(() => {
    getMLSData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterHomes = (param) => {
    if (param === 'Delano') {
      const filteredHomes = homes.filter((home) => home.city === 'Delano');
      setFilteredHomes(filteredHomes);
    } else if (param === 'Bakersfield') {
      const filteredHomes = homes.filter((home) => home.city === 'Bakersfield');
      setFilteredHomes(filteredHomes);
    } else if (param === 'Shafter') {
      const filteredHomes = homes.filter((home) => home.city === 'Shafter');
      setFilteredHomes(filteredHomes);
    } else if (param === 'Tehachapi') {
      const filteredHomes = homes.filter((home) => home.city === 'Tehachapi');
      setFilteredHomes(filteredHomes);
    } else if (param === 'See All') {
      setFilteredHomes(homes);
    }
  };

  return (
    <StyledCurrentListings>
      <GoogleMap zoom={9} center={center} mapContainerClassName="map-container">
        {filteredHomes.length
          ? filteredHomes.map((home) => {
              const color =
                currentListing.streetAddress === home.streetAddress
                  ? 'red'
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
                    const currentCard = document.getElementById(
                      home.streetAddress
                    );
                    console.log(currentCard);
                    currentCard.scrollIntoView();
                    setCurrentListing(home);
                    setIsPageOpen(true);
                  }}
                />
              );
            })
          : homes.map((home) => {
              const color =
                currentListing.streetAddress === home.streetAddress
                  ? 'red'
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
                    const currentCard = document.getElementById(
                      home.streetAddress
                    );
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
      <div className="button-container">
        <button
          className={delano ? 'filter-btn active' : 'filter-btn'}
          onClick={() => {
            !delano ? setDelano(true) : setDelano(false);
            setShafter(false);
            setBakersfield(false);
            setTehachapi(false);
            filterHomes('Delano');
          }}
        >
          Delano
        </button>
        <button
          className={shafter ? 'filter-btn active' : 'filter-btn'}
          onClick={() => {
            !shafter ? setShafter(true) : setShafter(false);
            setDelano(false);
            setBakersfield(false);
            setTehachapi(false);
            filterHomes('Shafter');
          }}
        >
          Shafter
        </button>

        <button
          className={bakersfield ? 'filter-btn active' : 'filter-btn'}
          onClick={() => {
            !bakersfield ? setBakersfield(true) : setBakersfield(false);
            setShafter(false);
            setDelano(false);
            setTehachapi(false);
            filterHomes('Bakersfield');
          }}
        >
          Bakersfield
        </button>
        <button
          className={tehachapi ? 'filter-btn active' : 'filter-btn'}
          onClick={() => {
            !tehachapi ? setTehachapi(true) : setDelano(false);
            setDelano(false);
            setShafter(false);
            setBakersfield(false);
            filterHomes('Tehachapi');
          }}
        >
          Tehachapi
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setDelano(false);
            setShafter(false);
            setBakersfield(false);
            setTehachapi(false);
            filterHomes('See All');
          }}
        >
          See All
        </button>
      </div>
      <div className="list" style={{ height }}>
        {filteredHomes.length
          ? filteredHomes.map((home) => {
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
                      {home.streetAddress}, {home.city} {home.state}{' '}
                      {home.zipcode}
                    </a>
                  </div>
                </div>
              );
            })
          : homes.map((home) => {
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
                      {home.streetAddress}, {home.city} {home.state}{' '}
                      {home.zipcode}
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
