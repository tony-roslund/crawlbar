import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import BrandOptions from "./BrandOptions.jsx";
import "./index.css";

const Component = window.location.pathname === "/brand" ? BrandOptions : App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>,
);
