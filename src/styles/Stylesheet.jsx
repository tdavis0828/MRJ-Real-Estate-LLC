import styled from 'styled-components';

// Styles for the main hero UI
export const StyledHero = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
  background-postion: center;
  background-repeat: no-repeat;
  background-size: 100% 110%;
  position: relative;
  & .dark-text {
    color: #000;
    transition: all 0.35s ease;
  }
  & .logo {
    position: fixed;
    top: -45px;
    left: 0;
    margin: 1rem;
    & img {
      height: 200px;
      width: 175px;
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
    & button {
      background: #fff;
      padding: 1rem 2rem;
      border: none;
      border-radius: 5px;
      font-family: 'Quicksand', sans-serif;
      font-size: 1.25rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.35s ease;
      &:hover {
        transform: scale(1.05);
        text-decoration: underline;
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
    margin: 2rem;
    & a {
      color: #fff;
      margin: 1rem;
      & img {
        height: 50px;
        width: 50px;
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
      }
    }
    & img {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      margin: 1rem;
    }
    & span {
      color: #f05454;
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
  background: #fff;
  & .reviews-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 60%;
  }
  & .review {
    background: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
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
        color: #f05454;
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
      background: #f05454;
      & form {
        display: flex;
        flex-direction: column;
        & label {
          color: #fff;
          font-size: 1.25rem;
        }
        & input {
          margin: 1rem;
          width: 500px;
          height: 30px;
          border-radius: 50px;
          border: none;
          display: block;
          &::placeholder {
            font-size: 1.15rem;
            padding-left: 1rem;
          }
        }
        & button {
          border: none;
          border-radius: 50px;
          width: 525px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
    &.contact-text {
      background: url('https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
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
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  & a {
    color: #f05454;
  }
`;
