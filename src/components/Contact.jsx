import React from 'react';
import { StyledContact } from '../styles/Stylesheet';

const Contact = () => {
  return (
    <StyledContact>
      <div className="contact-form">
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" placeholder="ex. John Doe" />
          </label>
          <label htmlFor="number">
            Phone Number:
            <input type="text" name="number" placeholder="ex. 555-555-5555" />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="ex. email@email.com"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-text">
        <div className="overlay">
          <p>Let's chat more about your goals.</p>
          <p>Submit your contact information here.</p>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
