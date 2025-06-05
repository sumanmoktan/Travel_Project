import React from "react";
import ScrollLink from "../links/ScrollLinks";
import Booking from "./Booking";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";
import homeImage from '../../assets/home-img.png'

const Home = () => {
  return (
    <section className="home section">
      <div className="home-container container grid">
        <div className="home-data">
          <h3 className="home-subtitle">
            <PiGlobeHemisphereWestFill />
            Let's Start Your Journey
          </h3>
          <h1 className="home-title">
            Your Journey Begins Here - Find, Book, Travel!
          </h1>
          <p className="home-description">
            Discover, plan, and book unforgettable journeys with our expert
            recommendations and travel inspiration.
          </p>
          <ScrollLink
            to="about"
            name="About Us"
            className="button button-white"
          >
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>
        </div>
        <img src={homeImage} alt="" className="home-img" />
      </div>
      <Booking icon={<RiTelegram2Fill/>}/>
    </section>
  );
};

export default Home;
