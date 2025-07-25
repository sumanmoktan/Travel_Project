import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import TourDetailsPage from "./page/TourDetailsPage";
import "./App.css";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
