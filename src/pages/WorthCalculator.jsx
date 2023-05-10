import React, { useState } from 'react';
import { StyledWorthCalculator } from '../styles/Stylesheet';
import { set } from 'react-hook-form';

function WorthCalculator() {
  // Initialize state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyCondition, setPropertyCondition] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [squareFootage, setSquareFootage] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit() {
    console.log('submitted');
  }

  return (
    <StyledWorthCalculator>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Find out what your home is worth</h3>
          <p>
            Please provide the information below and we will reach out with a
            valuation of your home.
          </p>
        </div>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Last"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@email.com"
            required
          />
        </label>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            type="text"
            name="number"
            id="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="555-555-5555"
          />
        </label>

        <label htmlFor="address">
          Address:
          <input
            type="address"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Easy Street, Pleasantville, CA 55555"
          />
        </label>

        <label htmlFor="propertyType">
          Property Type:
          <input
            type="text"
            name="propertyType"
            id="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            placeholder="House, Land, Commercial, etc..."
          />
        </label>

        <label htmlFor="condition">
          Property Condition:
          <input
            type="text"
            name="condition"
            id="condition"
            value={propertyCondition}
            onChange={(e) => setPropertyCondition(e.target.value)}
            placeholder="Good, Fair, Needs work, Bad, etc..."
          />
        </label>

        <label htmlFor="bedrooms">
          Number of bedrooms:
          <input
            type="number"
            name="bedrooms"
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            placeholder="4"
          />
        </label>

        <label htmlFor="bathrooms">
          Number of bathrooms:
          <input
            type="number"
            name="bathrooms"
            id="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            placeholder="3"
          />
        </label>

        <label htmlFor="squareFootage">
          Approximate square footage:
          <input
            type="text"
            name="squareFootage"
            id="squareFootage"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
            placeholder="1,965"
          />
        </label>

        <label htmlFor="additionalFeatures">
          Any other note-worthy things about your property?
          <textarea
            name="additionalFeatures"
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </StyledWorthCalculator>
  );
}

export default WorthCalculator;
