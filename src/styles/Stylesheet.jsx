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
`;

// Styles for the nav bar
export const StyledNav = styled.nav`
  height: 5vh;
  width: 100%;
  background: #181818;
  z-index: 20;
  & .nav-links {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    & a {
      text-decoration: none;
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.05rem;
      font-weight: 500;
    }
    & button {
      text-decoration: none;
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.05rem;
      font-weight: 400;
    }
  }
  & .nav-info {
    width: 90%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(180, 132, 132);
    background: linear-gradient(
      0deg,
      rgba(180, 132, 132, 1) 0%,
      rgba(255, 255, 255, 1) 48%,
      rgba(180, 132, 132, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    & p {
      margin: 0.75rem;
      font-size: 1.15rem;
      font-weight: 500;
    }
  }
`;

// Styles for the main hero UI
export const StyledHero = styled.main`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
  background-postion: center;
  background-repeat: no-repeat;
  background-size: 100% 110%;
  ${'' /* background-attachment: fixed; */}
  position: relative;
  & .background-video-container {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    & .overlay {
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 0;
    }
    & video {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }
  }
  & .text-content {
    color: #fff;
    font-size: 3rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    margin-top: 100px;
    font-family: 'Alkatra', cursive;
    & p {
      ${'' /* background: rgba(0, 0, 0, 0.25); */}
      letter-spacing: 5px;
    }
    & .hero-buttons-container {
      display: flex;
      & a {
        background: #fff;
        padding: 1rem 2rem;
        margin: 2rem;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    & h2 {
      text-decoration: underline;
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Alkatra', cursive;
      font-size: 1.75rem;
    }
    & img {
      height: 85px;
      width: 85px;
    }
    & p {
      font-size: 1.25rem;
      & a {
        background: rgb(180, 132, 132);
        background: linear-gradient(
          0deg,
          rgba(180, 132, 132, 1) 0%,
          rgba(255, 255, 255, 1) 48%,
          rgba(180, 132, 132, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

// Styling for the about section;
export const StyledAbout = styled.section`
  height: 85vh;
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
    & .dre-info {
      font-size: 1.15rem;
      text-align: center;
      & p {
        margin: 0;
        font-family: 'Alkatra', cursive;
      }
    }
    & img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      margin: 1rem;
    }
    & span {
      ${
        '' /* background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      }
      font-weight: 600;
    }
  }
`;

// Styling for reviews section
export const StyledReviews = styled.section`
  height: 60vh;
  width: 100%;
  background: #181818;
  border-bottom: 1px solid #fff;
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
    font-family: 'Alkatra', cursive;
    padding-top: 2rem;
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
        background: rgb(180, 132, 132);
        background: linear-gradient(
          0deg,
          rgba(180, 132, 132, 1) 0%,
          rgba(255, 255, 255, 1) 48%,
          rgba(180, 132, 132, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
`;

//Styling for the listings section
export const StyledListings = styled.section`
  height: 80vh;
  width: 100%;
  ${'' /* background: #181818; */}
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
`;

// Styling for the contact form
export const StyledContact = styled.section`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  & div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.contact-form {
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      & form {
        display: flex;
        flex-direction: column;
        & label {
          color: #000;
          font-size: 1.25rem;
        }
        & input {
          margin: 1rem;
          width: 500px;
          height: 30px;
          border-radius: 50px;
          border: none;
          display: block;
          color: #bebebe;
          background: #bebebe;
          &::placeholder {
            font-size: 1.15rem;
            padding-left: 1rem;
            color: #000;
          }
        }
        & button {
          border: none;
          border-radius: 50px;
          width: 525px;
          height: 30px;
          cursor: pointer;
          color: #000;
        }
      }
    }
    &.contact-text {
      background: url('https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      & p {
        font-family: 'Alkatra', cursive;
        width: 80%;
      }
      & .overlay {
        color: #fff;
        font-size: 2rem;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

//Styling for the footer section
export const StyledFooter = styled.footer`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  color: #000;
  ${'' /* background: #181818; */}
  & a {
    background: rgb(180, 132, 132);
    background: linear-gradient(
      0deg,
      rgba(180, 132, 132, 1) 0%,
      rgba(255, 255, 255, 1) 48%,
      rgba(180, 132, 132, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// Styles for the FAQ page
export const StyledFaq = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  & div {
    width: 50%;
    text-align: center;
  }
  & h1 {
    font-family: 'Alkatra', cursive;
  }
  & div p {
    font-size: 1.15rem;
  }
`;

// Styles for Home Worth Calculator
export const StyledWorthCalculator = styled.main`
  height: 100vh;
  width: 100%;
  background: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    & h3 {
      margin-bottom: 0.5rem;
    }
    & p {
      font-size: 0.85rem;
    }
  }
  & form {
    height: 90%;
    width: 35vw;
    background: #fff;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & #bedrooms,
    #bathrooms,
    #squareFootage {
      width: 55%;
    }
    & input,
    textarea {
      margin-left: 1rem;
    }
    & input {
      width: 70%;
      height: 25px;
    }
    & textarea {
      width: 95%;
      height: 75px;
      margin-top: 0.5rem;
    }
    & button {
      height: 35px;
      background: #181818;
      color: #fff;
      border: none;
      border-radius: 5px;
      transition: all 0.65s ease;
      cursor: pointer;
      &:hover {
        background: linear-gradient(
          0deg,
          rgba(180, 132, 132, 1) 0%,
          rgba(255, 255, 255, 1) 48%,
          rgba(180, 132, 132, 1) 100%
        );
        color: #000;
        transition: all 0.65s ease;
      }
    }
  }
`;
