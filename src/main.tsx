import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <GlobalStyle />
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
