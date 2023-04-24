import styled from "styled-components";

//Styles for the header
export const StyledHeader = styled.div`
  height: 35vh;
  width: 100%;
  background: #fff;
  color: #000;
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
  height: 10vh;
  width: 100%;
  background: #20262e;
  z-index: 20;
  & .nav-links {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
      font-size: 1.15rem;
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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8");
  background-postion: center;
  background-repeat: no-repeat;
  background-size: 100% 110%;
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
  & .dark-text {
    color: #000;
    transition: all 0.35s ease;
  }
  & .logo {
    position: absolute;
    top: -45px;
    left: 0;
    margin: 2rem;
    & img {
      height: 250px;
      width: 225px;
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
    font-family: "Alkatra", cursive;
    & p {
      background: rgba(0, 0, 0, 0.25);
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
        font-family: "Quicksand", sans-serif;
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
  & .menu-icon {
    position: fixed;
    top: 0;
    right: 0;
    margin: 3rem;
    & button {
      background: none;
      border: none;
      cursor: pointer;
      color: #fff;
      & img {
        height: 55px;
        width: 55px;
      }
    }
  }
  & .contact-links {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 1rem;
    & a {
      color: #fff;
      margin: 1rem;
      & img {
        height: 30px;
        width: 30px;
      }
    }
  }
  & .dre-number {
    width: 30%;
    position: fixed;
    bottom: 0;
    right: 0;
    color: #fff;
    margin: 2.5rem 0.55rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    & p {
      width: 60%;
      margin: 0;
      transition: all 0.35s ease;
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
  background: #222831;
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
      font-family: "Alkatra", cursive;
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
        font-family: "Alkatra", cursive;
      }
    }
    & img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      margin: 1rem;
    }
    & span {
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 500;
    }
  }
`;

// Styling for reviews section
export const StyledReviews = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222831;
  & h1 {
    font-family: "Alkatra", cursive;
  }
  & .reviews-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 80%;
  }
  & .review {
    background: #222831;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
      width: 75%;
      font-size: 1.15rem;
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
  background: #000;
`;

// Styling for the contact form
export const StyledContact = styled.section`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      background: url("https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      & p {
        font-family: "Alkatra", cursive;
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
  color: #fff;
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
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div {
    width: 50%;
    text-align: center;
  }
  & h1 {
    font-family: "Alkatra", cursive;
  }
  & div p {
    font-size: 1.15rem;
  }
`;
