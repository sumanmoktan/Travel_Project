import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../Data";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <>
      <header class="about-hero">
        <div class="overlay"></div>
        <div class="hero-content">
          <h1>About Us</h1>
          <p>Your travel companion to the unexplored beauty of Nepal</p>
        </div>
      </header>

      <section class="about">
        <div class="container">
          <h2>Who We Are</h2>
          <p>
            At Adventure Trails, we're passionate explorers who help you
            discover Nepal’s hidden gems through unique travel experiences. Our
            team is committed to offering safe, fun, and unforgettable journeys
            whether you're hiking, biking, or sightseeing. We started in 2020
            with a mission to promote eco-tourism and now serve hundreds of
            happy travelers each year.
          </p>
        </div>
      </section>

      <section class="team">
        <div class="container">
          <h2>Meet Our Team</h2>
          <div class="team-grid">
            {teamMembers.map((team, index) => (
              <div className="team-member" key={index}>
                <img src={team.img} alt={team.name} />
                <h3>{team.name}</h3>
                <p>{team.position}</p>
                <p>{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className="back-home-container"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <Link to="/" className="button back-home-button">
          ⬅ Back to Home
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
