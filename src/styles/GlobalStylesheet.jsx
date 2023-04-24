import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        background: #181823;
        font-family: 'Quicksand', sans-serif;
    }
    * {
      scroll-behavior: smooth;
      color: #fff;
    }
    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  ${'' /* box-shadow: inset 0 0 5px #f5f5f5; */}
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
