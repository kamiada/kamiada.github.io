import React from "react";
import { Link } from "react-scroll";
import "./components.scss";

const Menu = () => {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li id="links">
            <a href="#work_id">work.</a>
          </li>
          <li id="links">
            <a href="#projects">.projects</a>
          </li>
          <li id="links">
            <a href="#contact">.contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
