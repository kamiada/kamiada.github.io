import React from "react";
import { Link } from "react-scroll";
import "./components.scss";

const Menu = () => {
  return (
    <div>
      <input type="checkbox" className="mobile_menu" title="Menu"></input>
      <nav id="navbar">
        <ul>
          <li id="links">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              .home
            </Link>
          </li>
          <li id="links">
            <Link to="about" spy={true} smooth={true}>
              .about me
            </Link>
          </li>
          <li id="links">
            <Link to="work" spy={true} smooth={true}>
              .work
            </Link>
          </li>
          <li id="links">
            <Link to="projects" spy={true} smooth={true}>
              .projects
            </Link>
          </li>
          <li id="links">
            <Link to="contact" spy={true} smooth={true}>
              .contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
