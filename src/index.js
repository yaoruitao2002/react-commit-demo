import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// history模式
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
