import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Category from "./component/category/Category";
import About from "./component/about/About";
import Destinations from "./component/destinations/Destinations";
import Tours from "./component/tours/Tours";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Category />
      <About />
      <Destinations />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
