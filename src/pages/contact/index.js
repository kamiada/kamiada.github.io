import React from "react";
import "./contact.scss";
import { Layout } from "../../components";
import { Github, Linkedin } from "../../images";

const contact = () => {
  return (
    <Layout>
      <div id="contact" className="contact_container">
        <span>Find me on</span>
        <span className="border" />
        <div className="link_container">
          <a className="socialIcon" href="https://github.com/kamiada">
            <img src={Github} alt="github icon" />
          </a>
          <a
            className="socialIcon--linkedin"
            href="https://www.linkedin.com/in/adrianna-kaminska-19985a173/"
          >
            <img src={Linkedin} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default contact;
