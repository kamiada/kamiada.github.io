import React, { Component, useState } from "react";
import { Link } from "react-scroll";
import "./components.scss";
import { Switcher } from "./Switcher";
import { LanguageContext } from "./Switcher/language-context";

const Menu = () => {
  const [language, setLanguage] = useState("ENG");
  const toggleLanguage = () => {
    setLanguage((language) => {
      if (language === "ENG") {
        console.log('pl');
        return setLanguage("PL");
      }
      if (language === "PL") {
        return setLanguage("FR");
      }
      if (language === "FR") {
        return setLanguage("ENG");
      }
    });
  };

  return (
    <div className="menu-container">
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
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
            <li>
            <Switcher onClick={() => setLanguage()} />
            </li>
          </ul>
        </nav>
      </LanguageContext.Provider>
    </div>
  );
};

export default Menu;
