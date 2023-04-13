import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import AppSuccessor from "./AppSuccessor/AppSuccessor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppSuccessor/>
  </React.StrictMode>
);

