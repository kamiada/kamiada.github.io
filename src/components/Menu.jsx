import React from "react";
import { Link } from "react-scroll";
import "./components.scss";

const Menu = () => {
  return (
    <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                .home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                .about me
              </Link>
            </li>
            <li>
              <Link to="work" spy={true} smooth={true}>
                .work
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                .projects
              </Link>
            </li>
            <li>
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
