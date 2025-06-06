import React, {useState} from "react";
import "./header.css";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLinks";
import {
  RiCloseLargeFill,
  RiTelegram2Fill,
  RiMenuAddFill,
} from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { animateScroll, Link } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo" onClick={scrollTop}>
          <img src={logo} alt="" className="nav-log-img" />
        </Link>
        <div className={`${showMenu ? "show-menu" : ""} nav-menu `}>
          <ul className="nav-list">
            {links.map((link, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLink
                    to={link}
                    name={link}
                    extraProps={{ spy: true }}
                    className="nav-link"
                  />
                </li>
              );
            })}
            <li className="nav-item">
              <ScrollLink
                to="booking"
                name="Book Now"
                extraProps={{ offset: -150 }}
                className="button nav-link-button"
              >
                <RiTelegram2Fill className="button-icon" />
              </ScrollLink>
            </li>
          </ul>

          <RiCloseLargeFill className="nav-close"onClick={() => setShowMenu(!showMenu)} />
        </div>
        <div className="nav-buttons">
          <ScrollLink
            to="booking"
            name="Book Now"
            extraProps={{ offset: -150 }}
            className="button nav-button"
          >
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>
          <RiMenuAddFill
            className="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
