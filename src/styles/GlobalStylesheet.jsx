import { createGlobalStyle } from "styled-components";

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
  background: #fff;
  width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #181818;
  border-radius: 2px;
}
`;

export default GlobalStyles;
