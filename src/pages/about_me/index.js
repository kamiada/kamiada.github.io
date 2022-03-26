import React from "react";
import "./about_me.scss";
import { photo } from "../../images";
import { Layout } from "../../components";

const aboutMe = () => {
  return (
    <Layout>
      <div id="about" className="page_container">
        <div className="padding_between_pages">
        <div className="section_title--aboutMe">About me</div>
        <div className="exact_container"> 
        <div className="picture_container">
            <img src={photo} alt="Dynamic earth" />
          </div>
          <div className="text_container">
            <p>
              I work as a frontend mobile engineer for Stint.
              In my free time, I like to program in Unity, React and Python for fun, 
              read books, learning French and history.
              <br />
              <br />
              My interests are focused on the impact of technology on people's
              everyday life and how technology can improve things.
              <br />
              <br />
              To find out more about me scroll down 😊
              <br />
            </p>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};
export default aboutMe;
