import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        background: #F5F5F5;
        font-family: 'Quicksand', sans-serif;
    }
    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f5f5f5;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #F05454;
  border-radius: 5px;
}
`;

export default GlobalStyles;
