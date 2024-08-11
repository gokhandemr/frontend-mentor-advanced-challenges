import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Style
import "./index.css";
// Router DOM
import {BrowserRouter} from "react-router-dom";
// Components
import Sidebar from "./components/sidebar/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Sidebar />
    <main>
      <App />
    </main>
  </BrowserRouter>
);
