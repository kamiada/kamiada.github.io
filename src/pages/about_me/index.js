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
                {typeof data != "undefined" ? (
                  <>
                    <p>{data.introduction}</p>
                    <ul>
                      {data.hobbies.map((hobby) => (
                        <li>{hobby}</li>
                      ))}
                    </ul>
                    <p>{data.interests}</p>
                    <p>{data.ending}</p>
                  </>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutMe;
