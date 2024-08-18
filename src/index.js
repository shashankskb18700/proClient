import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    {" "}
    <App></App>
  </BrowserRouter>
);
