import React, { useContext } from "react";
import "./works.scss";
import { Layout, Tile } from "../../components";
import { BBCNews, BBC, Napier, CAS, WCS, UoE, Stint } from "../../images";
import {
  LanguageContext,
  dictionaryList,
} from "../../components/Switcher/language-context";

const Work = ({ id, id2 }) => {
  const { language } = useContext(LanguageContext);
  const jobExperience = dictionaryList[language][id];
  const educationb = dictionaryList[language][id2];

  const generateImage = (title) => {
    if (title === "BBC News") {
      return BBCNews;
    }
    if (title === "BBC Archive Services") {
      return BBC;
    }
    if (title === "Computer Application Services") {
      return CAS;
    }
    if (title === "University of Edinburgh") {
      return UoE;
    }
    if (title === "Stint") {
      return Stint;
    } 
    if( title === "West College Scotland"){
      return WCS;
    }
    else return Napier;
  };

  return (
    <Layout>
      <div className="work_container"  id="work_id">
        <div className="holder">
          <div className="section_title">Work Experience</div>
          {jobExperience.length > 0
            ? jobExperience.map((entry, key) => (
                <Tile
                  key={`${key} +${entry}`}
                  image={generateImage(entry.title)}
                  alt={entry.image}
                  company={entry.title}
                  job_title={entry.job}
                  points={entry.points}
                  skills={entry.skills}
                />
              ))
            : ""}
          <div className="section_title">Education</div>

          {educationb.length > 0
            ? educationb.map((entry, key) => (
                <Tile
                  key={`${key} +${entry}`}
                  image={generateImage(entry.institution)}
                  alt={entry.image}
                  company={entry.institution}
                  job_title={entry.course}
                  points={entry.points}
                  grade={entry.grade}
                />)
              )
            : ""}
        </div>
      </div>
    </Layout>
  );
};
export default Work;
