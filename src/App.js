import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
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
