import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
    <nav className="navbar sticky-bottom bg-body-tertiary">
      <div className="container-fluid">
        <footer>
          <a
            href="https://github.com/L-itslocked/my-app"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code on GitHub{" "}
          </a>{" "}
          by Laura Doyon
        </footer>
      </div>
    </nav>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
