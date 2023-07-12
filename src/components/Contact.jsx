import React, { useState, useRef } from "react";
import { StyledContact } from "../styles/Stylesheet";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [nameInput, setNameInput] = useState();
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [messageInput, setMessageInput] = useState();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sktr7g1",
        "template_o4ggcv1",
        form.current,
        "uHBGQxiG0Tp_1kI1r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNameInput("");
          setPhoneNumberInput("");
          setEmailInput("");
          setMessageInput("");
          setShowAlert(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        },

        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <StyledContact id="contact">
      {showAlert && <Alert />}
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              placeholder="ex. John Doe"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
            />
          </label>
          <label htmlFor="number">
            Phone Number:
            <input
              type="tel"
              name="number"
              placeholder="ex. 555-555-5555"
              value={phoneNumberInput}
              onChange={(e) => setPhoneNumberInput(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="ex. email@email.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              name="message"
              placeholder="I want to sell my house"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
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
