import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Quicksand', sans-serif;
    }
    * {
      scroll-behavior: smooth;
      margin: 0;
      padding: 0;
    }
    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(
      0deg,
      rgba(180, 132, 132, 1) 0%,
      rgba(255, 255, 255, 1) 48%,
      rgba(180, 132, 132, 1) 100%
    );
  border-radius: 5px;
}
`;

export default GlobalStyles;
