import styled from 'styled-components';

//Styles for the header
export const StyledHeader = styled.div`
  height: 25vh;
  width: 100%;
  background: #fff;
  color: #03001c;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    height: 350px;
    width: 350px;
  }
  @media (max-width: 320px) {
    & img {
      height: 320px;
      width: 320px;
    }
  }
`;

// Styles for open button on navbar
export const OpenBtn = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 30;
  display: none;
  & button {
    background: none;
    outline: none;
    border: none;
    & img {
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: 425px) {
    display: flex;
  }
`;
// Styles for the nav bar
export const StyledNav = styled.nav`
  height: 10vh;
  width: 100%;
  background: #181818;
  z-index: 20;
  position: relative;
  & .nav-links {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    & a {
      text-decoration: none;
      color: #fff;
      font-size: 1.15rem;
      font-weight: 500;
    }
    & button {
      text-decoration: none;
      color: #fff;
      font-size: 1.05rem;
      font-weight: 400;
    }
    & .close-btn {
      color: #fff;
      font-size: 1.15rem;
      text-transform: uppercase;
      border-bottom: 1px solid #fff;
    }
  }

  @media (max-width: 425px) {
    height: 100vh;
    width: 150px;
    position: fixed;
    top: 0;
    &.closed {
      transform: translateX(-150px);
      transition: all 0.35s ease;
    }
    &.open {
      transform: translateX(0);
      transition: all 0.35s ease;
    }
    & .nav-links {
      flex-direction: column;
    }
  }
`;

// Styles for the main hero UI
export const StyledHero = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-postion: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  & .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
  }
  & .text-content {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    margin-top: 100px;
    & img {
      width: 800px;
      height: 250px;
      border-radius: 5px;
    }
    & p {
      letter-spacing: 5px;
      font-size: 4rem;
    }
    & .hero-buttons-container {
      display: flex;
      margin-top: 1rem;
      & a {
        background: #fff;
        width: 200px;
        height: 55px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        border: none;
        border-radius: 5px;
        font-family: 'Quicksand', sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        color: #000;
        transition: all 0.35s ease;
        &:hover {
          transform: scale(1.05);
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    & .text-content {
      & img {
        width: 900px;
      }
    }
  }
  @media (max-width: 768px) {
    & .text-content {
      & img {
        width: 650px;
      }
    }
  }
  @media (max-width: 425px) {
    & .text-content {
      & img {
        width: 400px;
        height: 150px;
      }
    }
    & .hero-buttons-container {
      flex-direction: column;
    }
  }
  @media (max-width: 375px) {
    & .text-content {
      & img {
        width: 365px;
        height: 155px;
      }
    }
  }
  @media (max-width: 320px) {
    & .text-content {
      & img {
        width: 310px;
        height: 125px;
      }
    }
  }
`;

// Styles for the resources bar
export const StyledResourcesBar = styled.aside`
  height: 10vh;
  width: 100%;
  background: #181818;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 40px;
      height: 40px;
      margin: 0 1rem;
    }
    & a {
      color: #fff;
      text-decoration: none;
      font-size: 1.25rem;
    }
  }
  @media (max-width: 768px) {
    & div {
      & a {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 425px) {
    & div {
      & img {
        height: 30px;
        width: 30px;
      }
      & a {
        font-size: 0.85rem;
      }
    }
  }
  @media (max-width: 375px) {
    & div {
      & img {
        height: 25px;
        width: 25px;
        margin: 0.5rem;
      }
      & a {
        font-size: 0.85rem;
      }
    }
  }
  @media (max-width: 320px) {
    & div {
      & img {
        height: 25px;
        width: 25px;
        margin: 0.5rem;
      }
      & a {
        font-size: 0.75rem;
      }
    }
  }
`;

// Styling for the certification section;
export const StlyedCertification = styled.section`
  height: 55vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #fff;
  background: #181818;
  text-decoration: italics;
  & .cert-container {
    &:nth-child(1) {
      border-right: 1px solid #fff;
    }
    & p {
      margin-bottom: 1rem;
    }
    & .email-btn {
      text-decoration: none;
      font-size: 1.15rem;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      color: #181818;
      padding: 1rem 2rem;
      background: #fff;
      &:hover {
        border: 1px solid #fff;
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    & h2 {
      color: #fff;
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
    & img {
      height: 85px;
      width: 85px;
    }
    & p {
      font-size: 1.25rem;
      & a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    & .cert-container {
      & h2 {
        font-size: 1.5rem;
      }
      & p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 425px) {
    height: 65vh;
    flex-direction: column;
    & .cert-container {
      &:nth-child(1) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      }
      & .email-btn {
        padding: 0.5rem 1rem;
      }
    }
  }
  @media (max-width: 320px) {
    & .cert-container:nth-child(2) {
      text-align: center;
      & p {
        font-size: 0.95rem;
      }
    }
  }
`;

// Styling for the about section;
export const StyledAbout = styled.section`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  & .about-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    & img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      margin: 1rem;
    }
    & span {
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    & .about-container {
      font-size: 1.4rem;
      width: 60%;
      & img {
        height: 200px;
        width: 200px;
      }
    }
  }

  @media (max-width: 425px) {
    height: 115vh;

    & .about-container {
      font-size: 1.1rem;
      width: 65%;
      & img {
        height: 150px;
        width: 150px;
      }
    }
  }
  @media (max-width: 375px) {
    height: 115vh;
    & .about-container {
      & img {
        height: 125px;
        width: 125px;
      }
      width: 70%;
    }
  }
  @media (max-width: 320px) {
    & .about-container {
      width: 75%;
      font-size: 0.95rem;
    }
  }
`;

// Styling for reviews section
export const StyledReviews = styled.section`
  height: 475px;
  width: 100%;
  background: #181818;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  text-align: center;
  & .image-slider {
    height: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & h1 {
    padding-top: 2rem;
    letter-spacing: 2px;
    font-size: 1.75rem;
  }
  & .review {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
      width: 70%;
      font-size: 1.15rem;
      margin: auto;
      &.author {
        color: #fff;
        font-size: 1.75rem;
        font-weight: 500;
        padding-bottom: 1rem;
      }
    }
    & img {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 425px) {
    & .review {
      & p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 320px) {
    height: 575px;
  }
`;

//Styling for the listings section
export const StyledListings = styled.section`
  height: 80vh;
  width: 100%;
  & h1 {
    text-align: center;
    padding-top: 2rem;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
  }
  & .image-slider {
    height: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 5px;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      &.slide-content {
        height: 450px;
        width: 50vw;
        flex-direction: column;
        & p {
          z-index: 10;
          font-size: 1.75rem;
          margin: 1rem;
        }
        & .overlay {
          background: rgba(0, 0, 0, 0.25);
          height: 600px;
          width: 50vw;
          position: absolute;
          border-radius: 5px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    & .image-slider {
      & div {
        &.slide-content {
          width: 65vw;
          & .overlay {
            width: 65vw;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    height: 100vh;
    & .image-slider {
      height: 300px;
      width: 300px;
    }
  }
  @media (max-width: 425px) {
    & .image-slider {
      transform: translateY(150px);
      width: 400px;
      & div {
        &.slide-content {
          width: 400px;

          & .overlay {
            width: 400px;
          }
        }
      }
    }
  }
  @media (max-width: 375px) {
    & .image-slider {
      width: 350px;
      & div {
        &.slide-content {
          width: 350px;
          & .overlay {
            width: 350px;
          }
        }
      }
    }
  }
  @media (max-width: 320px) {
    & .image-slider {
      width: 300px;
      & div {
        &.slide-content {
          width: 300px;
          & p {
            font-size: 1.5rem;
          }
          & .overlay {
            width: 300px;
          }
        }
      }
    }
  }
`;
//Styles for the alerts
export const StyledAlert = styled.aside`
  width: 450px;
  height: 40px;
  background: #5d9c59;
  position: absolute;
  bottom: 10%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

// Styling for the contact form
export const StyledContact = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  & div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.contact-form {
      background: #fff;
      & form {
        display: flex;
        flex-direction: column;
        & label {
          color: #000;
          font-size: 1.25rem;
          font-weight: 500;
        }
        & input,
        textarea {
          margin: 1rem;
          width: 500px;
          height: 30px;
          border-radius: 50px;
          border: none;
          display: block;
          color: #181818;
          background: #bebebe;
          padding-left: 1rem;
          font-size: 1.05rem;
          font-weight: 500;
          font-family: inherit;
          &::placeholder {
            font-size: 1.05rem;
            padding-left: 1rem;
            color: #181818;
          }
          &:focus {
            outline: 1px solid #181818;
          }
        }

        & button {
          border: none;
          border-radius: 50px;
          width: 525px;
          height: 30px;
          cursor: pointer;
          color: #fff;
          background: #000;
        }
      }
    }
    &.contact-text {
      background: url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG9mZmljZSUyMHNwYWNlfGVufDB8MHwwfHx8MA%3D%3D');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      text-align: center;
      & p {
        background: #fff;
        color: #181818;
        padding-top: 0.75rem;
        width: 80%;
        padding-left: 0.75rem;
        font-weight: 500;
        &:last-child {
          padding-top: 0;
          padding-bottom: 0.75rem;
          padding-left: 0.75rem;
        }
      }
      & .overlay {
        color: #fff;
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column-reverse;
    & .contact-form {
      padding: 1rem;
    }
    & .contact-text {
      height: 100%;
    }
  }
  @media (max-width: 425px) {
    & div {
      &.contact-form {
        padding: 1rem 0;
        & form {
          & input,
          textarea,
          button {
            width: 275px;
          }
          & label,
          input {
            font-size: 1rem;
          }
          & button {
            transform: translateX(25px);
          }
        }
      }
      &.contact-text {
        width: 100%;
      }
    }
  }
  @media (max-width: 375px) {
    & div {
      &.contact-form {
        padding: 0;
        & form {
          & input,
          textarea,
          button {
            width: 275px;
          }
          & label {
            font-size: 1rem;
          }
          & button {
            transform: translateX(25px);
          }
        }
      }
      &.contact-text {
        & p {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: 320px) {
    & div {
      &.contact-form {
        padding: 0;
        & form {
          & input,
          textarea,
          button {
            width: 250px;
          }
        }
      }
    }
  }
`;

// Styles for the FAQ page
export const StyledFaq = styled.main`
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #181818;
  background: url('https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlYWwlMjBlc3RhdGUlMjBhZ2VudHxlbnwwfDB8MHx8fDA%3D');
  background-size: cover;
  backround-position: center;
  background-repeat: no-repeat;
  position: relative;
  & .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    backdrop-filter: blur(2px);
  }
  & .header {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    & h1 {
      margin: 2rem;
      width: 20%;
    }
  }

  & .faq {
    background: #fff;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    margin: 1.5rem;
    z-index: 10;
    &:last-child {
      border: none;
    }
    & p:first-child {
      margin: 1rem;
      font-weight: 600;
    }
  }
  & div {
    width: 50%;
    text-align: center;
  }
  & div p {
    font-size: 1.15rem;
  }
  @media (max-width: 768px) {
    justify-content: center;
    & .faq {
      margin: 0.35rem;
      padding: 0.5rem;
    }
  }
  @media (max-width: 425px) {
    & .faq {
      width: 75%;
      & p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 375px) {
    height: 170vh;
  }
`;

export const StyledCalculator = styled.main`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-postion: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  & .overlay {
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(2px);
  }
  & form {
    height: 85vh;
    width: 650px;
    margin: 1rem 0rem;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    & button {
      background: #000;
      color: #fff;
      width: 450px;
      height: 45px;
      border: 1px solid #000;
      border-radius: 5px;
      font-size: 1.15rem;
      cursor: pointer;
    }
    & label {
      font-size: 1.5rem;
      margin: 0 0.5rem;
    }
    & input {
      font-size: 1.25rem;
      font-family: inherit;
    }
  }
  & div {
    & p {
      font-size: 1.55rem;
    }
  }
  @media (max-width: 425px) {
    height: 80vh;
    & h1 {
      font-size: 1.75rem;
    }
    & form {
      height: 80vh;
      width: 385px;
      box-shadow: none;

      & label {
        font-size: 1rem;
      }
      & input {
        font-size: 1rem;
      }
      & button {
        width: 300px;
        height: 35px;
      }
    }
    & div {
      p {
        font-size: 1.15rem;
      }
    }
  }
  @media (max-width: 320px) {
    & h1 {
      font-size: 1.5rem;
    }
    & form {
      width: 320px;
      & label {
        font-size: 0.95rem;
      }
      & input {
        font-size: 0.85rem;
      }
      & button {
        width: 275px;
      }
    }
  }
`;

// Styling for the "what is my home worth" page
export const StyledHomeWorth = styled.main`
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  & .overlay {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.1);
  }
  & form {
    background: #fff;
    height: 100%;
    width: 35%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
    position: relative;
    & .header {
      position: absolute;
      top: 3rem;
      & h2 {
        margin: 0.75rem 0;
      }
    }
    & label {
      font-size: 1.15rem;
      margin-right: 10rem;
      align-self: flex-end;
      &.textarea {
        margin-right: 5rem;
      }
    }
    & input {
      margin: 0 1rem;
      height: 22px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      text-align: center;
      &::placeholder {
        text-align: center;
      }
    }
    & textarea {
      width: 275px;
      margin: 0 1rem;
      font-family: 'Quicksand', sans-serif;
      padding: 5px;
    }
    small {
      text-align: center;
      margin: 10px 5px;
    }
    & button {
      height: 35px;
      width: 75%;
      margin-left: 5rem;
      background: #000;
      color: #fff;
      border: 1px solid #000;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  @media (max-width: 1440px) {
    & form {
      width: 40%;
    }
  }
  @media (max-width: 1024px) {
    & form {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    & form {
      width: 65%;
      & .header {
        top: 10px;
        left: 5%;
      }
      & label {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 425px) {
    height: 115vh;
    & form {
      width: 85%;
      padding: 2rem;
      & .header {
        font-size: 0.9rem;
        & h2 {
          margin-top: 0;
        }
      }
      & label {
        margin-right: 0;
        transform: translateX(-50px);
        &.textarea {
          margin: 0;
          transform: translateX(0);
        }
      }
      & button {
        margin-left: 1.5rem;
      }
    }
  }
  @media (max-width: 375px) {
    & form {
      width: 84%;
    }
  }
  @media (max-width: 320px) {
    & form {
      & .header {
        & h2 {
          font-size: 1.15rem;
        }
      }
      & label {
        font-size: 0.8rem;
        transform: translateX(0px);
      }
      & input {
        font-size: 0.8rem;
      }
      & textarea,
      .textarea {
        margin: 0;
        transform: translateX(5px);
      }
    }
  }
`;

// Styling for the We Buy Houses page
export const StyledBuyHouses = styled.main`
  height: 100vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1609766856939-5b5a934af3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  & .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
  }
  & .links-container {
    height: 100%;
    width: 45vw;
    background: #fff;
    overflow: scroll;
    z-index: 10;
    &::-webkit-scrollbar {
      display: none;
    }
    & h2 {
      margin: 1rem;
      text-align: center;
    }
    & .link {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 1.35rem;
      margin: 5rem 0;
      & p {
        width: 65%;
        text-align: center;
        &.header {
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
      & img {
        width: 600px;
        height: 500px;
        margin: 1rem;
      }
    }
  }

  @media (max-width: 1024px) {
    & .links-container {
      & .link {
        & img {
          width: 400px;
          height: 300px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    & .links-container {
      width: 65vw;
      & h2 {
        font-size: 1.25rem;
      }
      & .link {
        & p {
          &.header {
            font-size: 1.3rem;
          }
        }
        & img {
          width: 350px;
          height: 250px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    & .links-container {
      & h2 {
        font-size: 1rem;
      }
      & .link {
        & p {
          &.header {
            font-size: 1rem;
          }
          &.sub-header {
            font-size: 1rem;
          }
        }
        & img {
          width: 250px;
          height: 150px;
        }
      }
    }
  }

  @media (max-width: 375px) {
    & .links-container {
      width: 70vw;
    }
  }
`;

// Styling for the blog page
export const StyledBlog = styled.main`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: url('https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    position: absolute;
    bottom: 0;
  }
  & .header {
    position: absolute;
    top: 0;
    left: 0;
    margin: 2rem;
    font-size: 1.65rem;
  }
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

// Styling for individual blog post
export const StyledSingleBlog = styled.div`
  height: 200px;
  width: 800px;
  margin-top: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  position: relative;
  background: #fff;
  padding: 1rem;
  &:last-child {
    border: none;
  }
  & .post-img {
    postion: absolute;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 200px;
  }
  & .post-title {
    position: absolute;
    top: 10%;
    left: 35%;
    font-size: 1.3rem;
  }
  & .post-desc {
    position: absolute;
    top: 40%;
    left: 35%;
  }

  & .post-author {
    position: absolute;
    left: 35%;
    bottom: 10%;
  }

  & .post-tag {
    position: absolute;
    left: 65%;
    bottom: 10%;
    font-size: 0.85rem;
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    width: 700px;
    & .post-title {
      font-size: 1.1rem;
      left: 40%;
    }
    & .post-desc {
      font-size: 0.95rem;
      left: 40%;
    }
    & .post-author {
      left: 40%;
    }
    & .post-tag {
      font-size: 0.8rem;
      left: 65%;
    }
  }

  @media (max-width: 425px) {
    width: 375px;
    & .post-img {
      width: 150px;
      height: 100px;
    }
    & .post-title {
      font-size: 0.95rem;
      left: 43%;
      top: 15%;
    }
    & .post-desc {
      width: 95%;
      left: 4%;
      top: 55%;
      font-size: 0.85rem;
    }
    & .post-author {
      left: 4%;
      font-size: 0.85rem;
    }
    & .post-tag {
      left: 45%;
      font-size: 0.7rem;
    }
  }
  @media (max-width: 375px) {
    width: 320px;
    & .post-title {
      width: 50%;
      left: 50%;
    }
  }
  @media (max-width: 320px) {
    width: 280px;
    & .post-title {
      width: 45%;
      left: 55%;
      font-size: 0.85rem;
    }
    & .post-author {
      font-size: 0.75rem;
    }
    & .post-tag {
      bottom: 10%;
      font-size: 0.65rem;
    }
  }
`;

// Styling for the current listings page
export const StyledCurrentListings = styled.main`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Roboto';
  & .open-page {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #000;
    & img {
      height: 25px;
      width: 25px;
      cursor: pointer;
      margin: 1rem;
    }
  }
  & .map-container {
    width: 100%;
    height: 100%;
  }
  & .list {
    postion: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    transition: all 0.55s ease-in-out;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    & .listing {
      width: 400px;
      height: 215px;
      display: flex;
      flex-direction: column;
      margin: 1rem auto;
      border-radius: 5px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.55);
      transition: 0.35s ease;
      background: #181818;
      color: #fff;
      transition: transform 0.35s ease;
      &.selected {
        border: 5px solid #bf3131;
        transition: transform 0.35s ease;
      }
      & .listing-image {
        height: 65%;
        width: 100%;
        border-radius: 5px;
        position: relative;
        & img {
          height: 100%;
          width: 100%;
          border-radius: 5px 5px 0px 0px;
        }
      }
      & .listing-info {
        width: 100%;
        height: 35%;
        display: flex;
        justify-content: center;
        border-radius: 0 0 5px 5px;
        position: relative;
        & .price {
          font-size: 1rem;
          font-weight: 400;
          position: absolute;
          top: 0;
          left: 0;
          margin: 0.55rem;
        }
        & .home-type {
          text-transform: lowercase;
        }
        & .details {
          position: absolute;
          top: 30%;
          left: 0;
          margin: 0.5rem 0.55rem;
          font-size: 0.95rem;
        }
        & .address {
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 0.35rem 0.55rem;
          color: #fff;
          text-decoration: none;
          display: block;
          font-size: 0.85rem;
          &:hover {
            text-decoration: underline;
          }
          & img {
            height: 20px;
            width: 20px;
            margin: 0 0.5rem;
            transform: translateY(5px);
          }
        }
        & .email-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          cursor: pointer;
          background: none;
          border: none;
          & img {
            height: 25px;
            width: 25px;
          }
        }
      }
    }
  }
  @media (max-width: 1440px) {
    & .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 1024px) {
    & .list {
      & .listing {
        width: 330px;
        height: 200px;
      }
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    & .list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 425px) {
    & .list {
      grid-template-columns: repeat(1, 1fr);
      & .listing {
        width: 95%;
        height: 225px;
      }
    }
  }
  @media (max-width: 375px) {
    & .list {
      & .listing {
        & .listing-info {
          & .details {
            font-size: 0.75rem;
          }
          & .address {
            font-size: 0.8rem;
            bottom: 5%;
          }
        }
      }
    }
  }
  @media (max-width: 320px) {
    & .list {
      & .listing {
        & .listing-info {
          & .details {
            font-size: 0.75rem;
          }
          & .address {
            font-size: 0.68rem;
            bottom: 10%;
          }
        }
      }
    }
  }
`;

// Styling for capabilities page
export const StyledCapabilities = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .cap-container {
    & img {
      height: 100%;
    }
    background: url('https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2080');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 425px) {
    & .cap-container {
      & img {
        height: 80%;
        width: 100%;
      }
    }
  }
  @media (max-width: 375px) {
    & .cap-container {
      & img {
        height: 75%;
        width: 100%;
      }
    }
  }
  @media (max-width: 320px) {
    & .cap-container {
      & img {
        height: 70%;
        width: 100%;
      }
    }
  }
`;
//Styling for the footer section
export const StyledFooter = styled.footer`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  color: #fff;
  background: #181818;
  position: relative;
  & .realtor-info {
    height: 198px;
    border-right: 1px solid rgba(255, 255, 255, 0.35);
  }
  & .logo {
    & img {
      height: 350px;
      width: 300px;
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 100%;
    & p {
      margin: 5px 0;
    }

    & img {
      height: 25px;
      width: 25px;
      padding: 0px 10px;
    }
    &.socials {
      border-right: 0;
      height: 75px;
      flex-direction: row;
      & img {
        width: 250px;
        height: 75px;
        margin-top: 25px;
      }
      & a {
        color: #fff;
        text-decoration: none;
      }
    }

    & .legal {
      position: relative;
      border-left: 1px solid rgba(255, 255, 255, 0.35);
      & .legal-logos {
        display: flex;
        flex-direction: row;
        &.primary {
          position: absolute;
          bottom: 75px;
        }
      }
      &.secondary {
        height: 198px;
      }
      & img {
        margin-top: 10px;
        height: 45px;
        width: 45px;
        &.mrjLogo {
          width: 175px;
          height: 60px;
        }
      }
    }
    &.privacy-policy {
      height: 198px;
      text-align: center;
      border-left: 1px solid rgba(255, 255, 255, 0.35);
      & p:nth-child(2) {
        padding: 0.5rem 2rem;
        font-size: 0.85rem;
        line-height: 1.2rem;
      }
    }
  }
  & .copyright {
    position: absolute;
    bottom: 5px;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
    & a {
      color: #fff;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    text-align: center;
    & .privacy-policy {
      & p:nth-child(2) {
        font-size: 0.5rem;
        line-height: 0px;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & .legal,
    & .privacy-policy {
      border: none !important;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    & div {
      height: 50%;
      &.legal {
        padding-bottom: 2rem;
      }
      &.realtor-info {
        padding-top: 2rem;
      }
    }
  }

  @media (max-width: 425px) {
    & .privacy-policy {
      & p {
        font-size: 1rem;
        &.privacy-info {
          transform: translateY(-15px);
        }
      }
    }
  }
  @media (max-width: 375px) {
    & .copyright {
      position: static;
      font-size: 0.85rem;
    }
    & .privacy-policy {
      & p {
        font-size: 1rem;
        &.privacy-info {
          height: 300px;
          transform: translateY(-15px);
        }
      }
    }
  }
  @media (max-width: 320px) {
    & .copyright {
      position: static;
      font-size: 0.75rem;
    }
    & .privacy-policy {
      & p {
        font-size: 1rem;
        &.privacy-info {
          height: 300px;
          transform: translateY(-15px);
        }
      }
    }
  }
`;
