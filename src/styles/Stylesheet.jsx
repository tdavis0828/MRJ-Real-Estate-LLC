import styled from "styled-components";

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
  height: 10vh;
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
  & .MuiMenu-list {
    background: blue;
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
  & .text-content {
    color: #fff;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    margin-top: 100px;
    // font-family: "Corinthia", cursive;
    font-family: "Alkatra", cursive;
    & p {
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
      font-weight: 600;
    }
  }
`;

// Styling for reviews section
export const StyledReviews = styled.section`
  height: 60vh;
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
    font-family: "Alkatra", cursive;
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
  ${"" /* background: #181818; */}
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
  height: 70vh;
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

// Styles for the FAQ page
export const StyledFaq = styled.main`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #181818;
  & .faq {
    & p:first-child {
      margin: 1rem;
      font-weight: 500;
    }
  }
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

export const StyledCalculator = styled.main`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url("https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-postion: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  & .overlay {
    position: absolute;
    bottom: -20px;
    height: 85vh;
    width: 100%;
    backdrop-filter: blur(2px);
    z-index: 5;
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
    z-index: 10;
    & button {
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
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
    margin: 1rem;
    & p {
      font-size: 1.55rem;
    }
  }
`;

// Styling for the "what is my home worth" page
export const StyledHomeWorth = styled.main`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
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
    backdrop-filter: blur(2px);
    z-index: 5;
  }
  & form {
    background: #fff;
    height: 100%;
    width: 35%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 10;
    position: relative;
    & .header {
      position: absolute;
      top: 0;
      & h2 {
        margin: 0.75rem 0;
      }
    }
    & label {
      font-size: 1.15rem;
      margin-right: 10rem;
      align-self: flex-end;
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
      font-family: "Quicksand", sans-serif;
      padding: 5px;
    }
    small {
      text-align: center;
      margin: 10px;
    }
    & button {
      height: 35px;
      width: 75%;
      margin-left: 5rem;
      background: rgb(180, 132, 132);
      background: linear-gradient(
        0deg,
        rgba(180, 132, 132, 1) 0%,
        rgba(255, 255, 255, 1) 48%,
        rgba(180, 132, 132, 1) 100%
      );
      color: #000;
      border: 1px solid #000;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

// Styling for the We Buy Houses page
export const StyledBuyHouses = styled.main`
  height: 100vh;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  & .links-container {
    height: 100%;
    width: 45vw;
    background: #fff;
    overflow: scroll;
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
`;

// Styling for the blog page
export const StyledBlog = styled.main`
  height 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: scroll;
  & .header {
    position: absolute;
    top: 0;
    left: 0;
    margin: 2rem;
    font-size: 1.65rem;
  }
`;

// Styling for individual blog post
export const StyledSingleBlog = styled.div`
  height: 225px;
  width: 750px;
  margin-top: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  position: relative;
  &:last-child {
    border: none;
  }
  & .post-img {
    postion: absolute;
    bottom: 0;
    left: 0;
    width: 185px;
    height: 185px;
  }
  & .post-title {
    position: absolute;
    top: 0;
    left: 30%;
    font-size: 1.5rem;
  }
  & .post-desc {
    position: absolute;
    top: 30%;
    left: 30%;
  }

  & .post-author {
    position: absolute;
    left: 30%;
    bottom: 20%;
  }

  & .post-tag {
    position: absolute;
    left: 65%;
    bottom: 20%;
  }
`;

//Styling for the footer section
export const StyledFooter = styled.footer`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  color: #fff;
  background: #181818;
  position: relative;
  & .logo {
    & img {
      height: 300px;
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
    border-right: 1px solid rgba(255, 255, 255, 0.35);
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
      & a {
        color: #fff;
        text-decoration: none;
        margin: 0 1rem;
      }
    }
    & .legal {
      & .legal-logos {
        display: flex;
        flex-direction: row;
      }
      & img {
        margin-top: 10px;
        height: 65px;
        width: 65px;
      }
    }
  }

  & .copyright {
    position: absolute;
    bottom: 15px;
    font-size: 1rem;
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
`;
