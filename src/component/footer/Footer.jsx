import footerlog from "../../assets/footer-logo.png";
import ScrollLink from "../links/ScrollLinks";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { links, footerGallery } from "../../Data";
import "./footer.css";
import { animateScroll, Link } from "react-scroll";

const Footer = () => {
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <Link to="/" className="footer-logo" onClick={scrollTop}>
            <img src={footerlog} alt="" className="footer-logo-img" />
          </Link>
          <p className="footer-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eius
            maiores consequatur possimus.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer-social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer-social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.x.com/"
              target="_blank"
              className="footer-social-link"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links grid">
            {links.map((link, index) => {
              return (
                <li className="footer-item" key={index}>
                  <ScrollLink to={link} name={link} className="footer-link" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Contact</h3>
          <div className="footer-contact grid">
            <div className="footer-item">
              <FaMapMarkerAlt className="footer-icon" />
              <p className="footer-info">
                Swayambhu-15,Kathmandu,Nepal
              </p>
            </div>
            <div className="footer-item">
              <FaPhone className="footer-icon" />
              <p className="footer-info">977-01-4989174/9851008745</p>
            </div>
            <div className="footer-item">
              <FaEnvelopeOpenText className="footer-icon" />
              <p className="footer-info">info@asicsnepaltreks.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Gallery</h3>
          <div className="footer-gallery grid">
            {footerGallery.map((gallary, index) => {
              return (
                <img
                  src={gallary}
                  alt="photo"
                  key={index}
                  className="footer-img"
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
