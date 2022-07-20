import React, { useContext } from "react";
import "./about_me.scss";
import { photo } from "../../images";
import { Layout } from "../../components";
import {
  LanguageContext,
  dictionaryList,
} from "../../components/Switcher/language-context";

const AboutMe = ({ id }) => {
  const { language } = useContext(LanguageContext);
  const data = dictionaryList[language][id];
  console.log(data);
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
              <br />
              <span className="text_itself">
                {data.length > 0 ?
                  data.map((entry) => (
                    <>
                      <p>{entry.introduction}</p>
                      {/* <ul>
                        <li>{entry.hobbies}</li>
                      </ul> */}
                    </>
                  )): ""}
                {/* I work as a frontend mobile engineer for Stint. My hobbies
                includes:
                <ul>
                  <li>
                    Programming games and building side-projects in Unity, React
                    and Python{" "}
                  </li>
                  <li>
                    Reading books - I like popular science, fantasy and
                    science-fiction and classics like Bułhakow and Dostoyevsky
                  </li>
                  <li>Learning new things</li>
                  <li>Learning and reading about history</li>
                  <li>Studying French</li>
                </ul>
                My interests are focused on the impact of technology on people's
                everyday life and how technology can improve things.
                <br />
                <br />
                To find out more about me scroll down 😊
                <br /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutMe;
