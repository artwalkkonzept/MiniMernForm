import React from 'react';
import ReactDOM from 'react-dom';
//import App from "./App";
import AppRecord from "./AppRecord";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRecord />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);