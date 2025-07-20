import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// index.js (ou main.js selon ton projet)

const ignoreResizeObserverError = () => {
  const observerError = "ResizeObserver loop completed with undelivered notifications.";
  const oldError = console.error;

  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes(observerError)) return;
    oldError(...args);
  };
};

ignoreResizeObserverError();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
