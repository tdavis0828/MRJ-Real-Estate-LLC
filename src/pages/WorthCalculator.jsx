import React, { useState, useRef } from 'react';
import { StyledWorthCalculator } from '../styles/Stylesheet';
import Alert from '../components/Alert';
import emailjs from 'emailjs-com';

function WorthCalculator() {
  const form = useRef();

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
  const [alertIsVisible, setAlertIsVisible] = useState(false);
  const [isErr, setIsErr] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sktr7g1',
        'template_ihijgv7',
        form.current,
        'uHBGQxiG0Tp_1kI1r'
      )
      .then(
        (result) => {
          setIsErr(false);
          setAlertIsVisible(true);
          setTimeout(() => {
            setAlertIsVisible(false);
          }, 3000);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setIsErr(true);
        }
      );
  }

  return (
    <StyledWorthCalculator>
      <form ref={form} onSubmit={handleSubmit}>
        {alertIsVisible && <Alert isErr={isErr ? 'false' : 'success'} />}
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </label>

        <label htmlFor="additionalFeatures">
          Any other note-worthy things about your property?
          <textarea
            name="additionalFeatures"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </StyledWorthCalculator>
  );
}

export default WorthCalculator;
