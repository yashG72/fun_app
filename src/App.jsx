import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TemplatePage from "./pages/TemplatePage.jsx"; // To be created next

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template/:id" element={<TemplatePage />} />
      </Routes>
    
  );
}
