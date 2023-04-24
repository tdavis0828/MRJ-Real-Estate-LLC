import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStylesheet";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
