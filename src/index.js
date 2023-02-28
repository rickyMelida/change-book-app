import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { App } from "./App";
import './assets/styles/styles.css'

const auth = localStorage.getItem('uid');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App auth={auth ? 'Y' : 'N'}/>);
