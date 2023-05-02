import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import AppSuccessor from "./AppSuccessor/AppSuccessor";
import LoginForm from "./AppSuccessor/LoginForm";
import Lintas from "./Lintas/Lintas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginForm/> */}
    {/* <AppSuccessor/> */}
    <Lintas/>
  </React.StrictMode>
);

