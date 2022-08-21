import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <span className="footer">
        This project was coded by Holly Meyers and is
        <a href="https://github.com/hmharris24/my-app." target="blank">
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://app.netlify.com/sites/cheery-puffpuff-a66b1b/deploys"
          target="blank"
        >
          hosted on Netlify
        </a>
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
