import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeDefault } from "./context/themeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeDefault>
      <App />
    </ThemeDefault>
  </React.StrictMode>,
  document.getElementById("root")
);
