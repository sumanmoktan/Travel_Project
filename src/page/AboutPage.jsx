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
          {/* <p>Your travel companion to the unexplored beauty of Nepal</p> */}
        </div>
      </header>

      <section class="about">
        <div class="container">
          <h2>About Asics Nepal Treks</h2>
          <p>
            Asics Nepal Mountain International Treks & Tours, based in
            Swayambhu-15, Kathmandu, crafts unforgettable Himalayan
            adventures.With local expertise, we offer personalized treks to
            iconic destinations like Everest Base Camp and Annapurna, blending
            breathtaking mountain beauty with vibrant Nepalese culture. From
            thrilling treks and cultural temple tours to serene lake retreats
            and jungle safaris, our passionate team ensures safe, sustainable
            journeys that connect you with Nepal’s soul.
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
