import aboutImg from "../../assets/about-img.png";
import SectionTitle from "../title/SectionTitle";
import ScrollLink from "../links/ScrollLinks";
import { RiTelegram2Fill } from "react-icons/ri";

import './about.css'

const About = () => {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-img" />
        <div className="about-content">
          <SectionTitle
            subtitle="We Are Trawind"
            title="Exploring the World, One Destination at a Time with Us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <div className="about-data">
            <div className="about-item">
              <p className="about-no">25+</p>
              <h3 className="about-title">Years of Experience</h3>
            </div>
            <div className="about-item">
              <p className="about-no">10k</p>
              <h3 className="about-title">Success Journey</h3>
            </div>
            <div className="about-item">
              <p className="about-no">12+</p>
              <h3 className="about-title"> Awards Winning</h3>
            </div>
          </div>
          <ScrollLink to="/" name="About More" className="button">
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default About;
