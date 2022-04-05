import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ThemeDefault } from "./context/themeContext";
import { Footer } from "./patterns/Footer";
import { Header } from "./patterns/Header";
import { Login } from "./routes/Login";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeDefault>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeDefault>
  </React.StrictMode>,
  document.getElementById("root")
);
