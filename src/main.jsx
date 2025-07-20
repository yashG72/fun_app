import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Toaster } from 'react-hot-toast';
import { ApologyProvider } from "./context/ApologyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ApologyProvider>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </ApologyProvider>
  </BrowserRouter>
);
