import React, { useState, useRef } from 'react';
import { StyledContact } from '../styles/Stylesheet';
// import emailjs from '@emailjs/browser';

const Contact = () => {
  const [nameInput, setNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'service_sktr7g1',
    //     'template_ihijgv7',
    //     form.current,
    //     'uHBGQxiG0Tp_1kI1r'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }

  return (
    <StyledContact id="contact">
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="from_name"
              placeholder="ex. John Doe"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </label>
          <label htmlFor="number">
            Phone Number:
            <input
              type="tel"
              name="from_number"
              placeholder="ex. 555-555-5555"
              value={phoneNumberInput}
              onChange={(e) => setPhoneNumberInput(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="from_email"
              placeholder="ex. email@email.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-text">
        <div className="overlay">
          <p>Let's chat more about your goals.</p>
          <p>Submit your contact information here and we'll be in touch.</p>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
