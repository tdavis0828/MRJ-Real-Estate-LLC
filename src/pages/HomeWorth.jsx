import React, { useState, useRef } from 'react';
import { StyledHomeWorth } from '../styles/Stylesheet';
import emailjs from '@emailjs/browser';

const HomeWorth = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    city: '',
    state: '',
    propertyType: '',
    condition: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    buildYear: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function sendEmail(e) {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      name: '',
      number: '',
      email: '',
      address: '',
      city: '',
      state: '',
      propertyType: '',
      condition: '',
      bedrooms: '',
      bathrooms: '',
      size: '',
      buildYear: '',
      additionalComments: '',
    });
  }

  return (
    <StyledHomeWorth>
      <div className="overlay" />
      <form onSubmit={sendEmail} ref={form}>
        <div className="header">
          <h2>Find out what your home is worth</h2>
          <p>
            Please provide the information below and someone will reach out with
            an evaluation
          </p>
        </div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
          />
        </label>
        <br />
        <label>
          Number:
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="555-555-5555"
            required
          />
        </label>
        <br />
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="janedoe@email.com"
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 easy street"
            required
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Pleasantville"
            required
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="CA"
            required
          />
        </label>
        <br />
        <label>
          Type of property:
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            placeholder="Residential or Commercial"
            required
          />
        </label>
        <br />
        <label>
          Number of Bedrooms:
          <input
            type="number"
            name="bedrooms"
            min="1"
            max="5"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="3"
            required
          />
        </label>
        <br />
        <label>
          Number of Bathrooms:
          <input
            type="number"
            name="bathrooms"
            min="1"
            max="5"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="2.5"
            required
          />
        </label>
        <br />
        <label>
          Aprox. Size (in square feet):
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="1565 sq ft"
          />
        </label>
        <br />
        <label>
          Build Year:
          <input
            type="number"
            name="buildYear"
            value={formData.buildYear}
            onChange={handleChange}
            placeholder="1995"
          />
        </label>
        <br />
        <label>
          Add ons:
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            placeholder="New roofing, close to a school, remodeled bathrooms"
          />
        </label>
        <br />
        <small>
          * Please be aware that this is just an estimation and is not an
          official evlauation *
        </small>
        <button type="submit">Submit</button>
      </form>
    </StyledHomeWorth>
  );
};

export default HomeWorth;
