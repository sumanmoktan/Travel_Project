import React from "react";
import './header.css'
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLinks";
import {
  RiCloseLargeFill,
  RiTelegram2Fill,
  RiMenuAddFill,
} from "react-icons/ri";
import logo from "../../assets/logo.svg";


const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          <img src={logo} alt="" className="nav-log-img" />
        </a>
        <div className="nav-menu">
          <ul className="nav-list">
            {links.map((link, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLink to={link} name={link} className="nav-link" />
                </li>
              );
            })}
          </ul>

          <RiCloseLargeFill className="nav-close" />
        </div>
        <div className="nav-buttons">
          <ScrollLink
            to="booking"
            name="Book Now"
            className="button nav-button"
          >
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>
          <RiMenuAddFill className="nav-toggle" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
