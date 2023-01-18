import React from "react";
import { Link } from "react-scroll";
import "./components.scss";

const Menu = () => {
  const showMenu = () => {
    let topNav = document.getElementById("topNav");
    if (topNav.style.display === "block") {
      topNav.style.display = "none";
    } else {
      topNav.style.display = "block";
    }
  };
  return (
    <div>
      <button className="mobile_menu" onClick={() => showMenu()}>
        Menu
      </button>
      <div className="topNav" id="topNav">
        <nav className="navbar">
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
    </div>
  );
};

export default Menu;
