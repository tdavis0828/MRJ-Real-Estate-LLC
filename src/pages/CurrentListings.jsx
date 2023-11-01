import React, { useEffect, useMemo, useState } from 'react';
import { StyledCurrentListings } from '../styles/Stylesheet';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { nanoid } from 'nanoid';
import deafultImg from '../images/default-image-icon-missing-picture-page-vector-40546530.jpg';
import upArrow from '../images/up-arrow.png';
import downArrow from '../images/arrow-down.png';
import directionsBtn from '../images/gps.png';

// import Listing from '../components/Listing';
function CurrentListings() {
  let homes = [
    {
      bathrooms: 2,
      bedrooms: 4,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      daysOnZillow: 0,
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'SINGLE_FAMILY',
      imgSrc:
        'https://maps.googleapis.com/maps/api/staticmap?mobile=false&sensor=true&maptype=satellite&size=575x242&zoom=17&center=35.297000885009766,-119.12068939208984&key=AIzaSyBJsNQO5ZeG-XAbqqWLKwG08fWITSxg33w&signature=8ohLMXtIoKiJhPQb0UOoNfiL7Q4=',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: false,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.297,
      listing_sub_type: {
        is_FSBA: true,
      },
      livingArea: 1832,
      longitude: -119.12069,
      lotAreaUnit: 'sqft',
      lotAreaValue: 7840,
      price: 415000,
      priceForHDP: 415000,
      rentZestimate: 2400,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: '6315 Tempe Pass Ct',
      taxAssessedValue: 395000,
      zestimate: 415300,
      zipcode: '93311',
      zpid: 69244088,
    },
    {
      bathrooms: 0,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      daysOnZillow: 0,
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'LOT',
      imgSrc:
        'https://photos.zillowstatic.com/fp/e85fce5d39796a639590d6a84682e6d5-p_e.jpg',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: false,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.36094,
      listing_sub_type: {
        is_FSBA: true,
      },
      longitude: -119.02799,
      lotAreaUnit: 'acres',
      lotAreaValue: 0.26056014692378326,
      price: 150000,
      priceForHDP: 150000,
      rentZestimate: 1275,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: '2223 Palm',
      zipcode: '93304',
      zpid: 2086426475,
    },
    {
      bathrooms: 2,
      bedrooms: 4,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      datePriceChanged: 1696316400000,
      daysOnZillow: 0,
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'SINGLE_FAMILY',
      imgSrc:
        'https://photos.zillowstatic.com/fp/35139d7e0e4cc9ae5a7262fbccdac69b-p_e.jpg',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: false,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.3977,
      listing_sub_type: {
        is_FSBA: true,
      },
      livingArea: 1826,
      longitude: -119.09533,
      lotAreaUnit: 'sqft',
      lotAreaValue: 6969,
      price: 405000,
      priceChange: -14000,
      priceForHDP: 405000,
      priceReduction: '$14,000 (Oct 3)',
      rentZestimate: 2394,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: '4200 Almond Grove Ln',
      taxAssessedValue: 358376,
      zestimate: 405600,
      zipcode: '93312',
      zpid: 61356536,
    },
    {
      bathrooms: 1,
      bedrooms: 1,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      daysOnZillow: 0,
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'MANUFACTURED',
      imgSrc:
        'https://photos.zillowstatic.com/fp/1a059fcde1f095fa70e6b071054672ec-p_e.jpg',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: false,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.393734,
      listing_sub_type: {
        is_FSBA: true,
      },
      livingArea: 624,
      longitude: -119.040634,
      price: 34990,
      priceForHDP: 34990,
      rentZestimate: 644,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: '3219 Gulf St SPACE 2',
      unit: 'Space 2',
      zestimate: 129500,
      zipcode: '93308',
      zpid: 18983420,
    },
    {
      bathrooms: 2,
      bedrooms: 3,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      daysOnZillow: 0,
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'SINGLE_FAMILY',
      imgSrc:
        'https://maps.googleapis.com/maps/api/staticmap?mobile=false&sensor=true&maptype=satellite&size=575x242&zoom=17&center=35.32914352416992,-119.0265121459961&key=AIzaSyBJsNQO5ZeG-XAbqqWLKwG08fWITSxg33w&signature=ea8fDI2h0823eZcoEGKTgR80OaI=',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: false,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.329144,
      listing_sub_type: {
        is_FSBA: true,
      },
      livingArea: 1920,
      longitude: -119.02651,
      lotAreaUnit: 'sqft',
      lotAreaValue: 7840,
      price: 329999,
      priceForHDP: 329999,
      rentZestimate: 2175,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: '2114 Oakwood Dr',
      taxAssessedValue: 270300,
      zestimate: 332200,
      zipcode: '93304',
      zpid: 18896070,
    },
    {
      bathrooms: 2,
      bedrooms: 4,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      datePriceChanged: 1695884400000,
      daysOnZillow: -1,
      group_type: 'BUILDER_COMMUNITY',
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'SINGLE_FAMILY',
      imgSrc:
        'https://photos.zillowstatic.com/fp/27d8a98faf35b573455108c43bc6854d-p_e.jpg',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: true,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.40825,
      listing_sub_type: {
        is_newHome: true,
      },
      livingArea: 2023,
      longitude: -118.884,
      newConstructionType: 'BUILDER_PLAN',
      price: 441990,
      priceChange: 2000,
      priceForHDP: 441990,
      priceSuffix: '+',
      providerListingID: '28941686',
      rentZestimate: 2600,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: 'Verbena Plan, Lantana',
      unit: '# BEJGSO',
      zipcode: '93306',
      zpid: 2065412033,
    },
    {
      bathrooms: 1,
      bedrooms: 2,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      daysOnZillow: 3,
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'SINGLE_FAMILY',
      imgSrc:
        'https://photos.zillowstatic.com/fp/80a5373a1127412fa46de341d19b5a4c-p_e.jpg',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: false,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.364357,
      listing_sub_type: {
        is_FSBA: true,
      },
      livingArea: 753,
      longitude: -118.95784,
      lotAreaUnit: 'sqft',
      lotAreaValue: 7405,
      price: 259950,
      priceForHDP: 259950,
      rentZestimate: 1250,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: '710 McClean Ave',
      taxAssessedValue: 24694,
      zestimate: 258700,
      zipcode: '93307',
      zpid: 18938473,
    },
    {
      bathrooms: 2,
      bedrooms: 4,
      city: 'Bakersfield',
      country: 'USA',
      currency: 'USD',
      datePriceChanged: 1695884400000,
      daysOnZillow: -1,
      group_type: 'BUILDER_COMMUNITY',
      homeStatus: 'FOR_SALE',
      homeStatusForHDP: 'FOR_SALE',
      homeType: 'SINGLE_FAMILY',
      imgSrc:
        'https://photos.zillowstatic.com/fp/84840c081fd1cb379be32539170d5e0b-p_e.jpg',
      isFeatured: false,
      isNonOwnerOccupied: true,
      isPreforeclosureAuction: false,
      isPremierBuilder: true,
      isShowcaseListing: false,
      isUnmappable: false,
      isZillowOwned: false,
      latitude: 35.28861,
      listing_sub_type: {
        is_newHome: true,
      },
      livingArea: 2270,
      longitude: -119.11604,
      newConstructionType: 'BUILDER_PLAN',
      price: 497990,
      priceChange: -5886,
      priceForHDP: 497990,
      priceReduction: '$5,886 (Sep 28)',
      priceSuffix: '+',
      providerListingID: '29350231',
      rentZestimate: 2500,
      shouldHighlight: false,
      state: 'CA',
      streetAddress: 'Orchid Plan, Sendero Ranch',
      unit: '# FFWL39',
      zipcode: '93311',
      zpid: 2064340665,
    },
  ];

  // Will eventually replace the 'homes' array
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0cc29cce87msh85a4f650fff05e6p1ec97bjsn7783d537ee80',
      'X-RapidAPI-Host': 'zillow56.p.rapidapi.com',
    },
  };
  async function getMLSData() {
    const res = await fetch(
      'https://zillow56.p.rapidapi.com/search?location=bakersfield%2C%20ca',
      options
    );
    const data = await res.json();
    homes = data;
    console.log(data);
  }
  useEffect(() => {
    // getMLSData();
  }, []);

  //Formats price of the home, adds comma
  const formatNumber = (num) => {
    // const num = 123456;
    const options = { maximumFractionDigits: 2 };
    const formattedNumber = Intl.NumberFormat('en-US', options).format(num);
    return formattedNumber;
  };

  // Removes lots/listings with no home
  homes.forEach((home, i) => {
    home.price = formatNumber(home.price);
    if (home.homeType === 'LOT') {
      homes.splice(i, 1);
    }
  });

  // Removes any listings that do not have images
  homes.forEach((home, i) => {
    if (home.imgSrc.includes('googleapis')) {
      homes.splice(i, 1);
    }
  });

  // Formats the home type, removes the underscore
  homes.forEach((home, i) => {
    if (home.homeType.includes('_')) {
      home.homeType = home.homeType.replace('_', ' ');
    }
  });

  const center = useMemo(() => ({ lat: 35.393528, lng: -119.043732 }), []);
  const [currentListing, setCurrentListing] = useState({});
  const [isPageOpen, setIsPageOpen] = useState(false);
  const height = isPageOpen ? '2500px' : '550px';
  console.log(homes);
  return (
    <StyledCurrentListings>
      <GoogleMap
        zoom={10.5}
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
                  href={`https://www.google.com/maps/dir/search?q=${home.streetAddress}+${home.state}+${home.zipcode}`}
                  target="_blank"
                  className="address"
                  rel="noreferrer"
                >
                  {home.streetAddress}, {home.state} {home.zipcode}
                  <img src={directionsBtn} alt="/" />
                </a>
                <button className="email-btn">Email Agent</button>
              </div>
            </div>
          );
        })}
      </div>
    </StyledCurrentListings>
  );
}

export default CurrentListings;
