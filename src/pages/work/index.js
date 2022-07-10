import React, { useContext } from "react";
import "./works.scss";
import { Layout, Tile } from "../../components";
import { BBCNews, BBC, Napier, CAS, WCS, UoE, Stint } from "../../images";
import data from "./experience.json";
import {
  LanguageContext,
  dictionaryList,
} from "../../components/Switcher/language-context";

const Work = ({ id, id2 }) => {
  const { language } = useContext(LanguageContext);
  const jobExperience = dictionaryList[language][id];
  const educationb = dictionaryList[language][id2];

  return (
    <Layout>
      <div className="work_container" id="work">
        <div className="holder">
          <div className="section_title">Work Experience</div>
          {jobExperience.length > 0
            ? jobExperience.map((entry) => 
                <Tile
                  image={Stint}
                  alt="logo of Stint"
                  company={entry.title}
                  job_title={entry.job}
                  points={entry.points}
                  skills={entry.skills}
                />
              )
            : ""}
          <Tile
            image={Stint}
            alt="logo of Stint"
            company={data.jobExperience[5].title}
            job_title={data.jobExperience[5].job}
            points={data.jobExperience[5].points}
            skills={data.jobExperience[5].skills}
          />
          <Tile
            image={BBCNews}
            alt="logo of BBC News"
            company={data.jobExperience[0].title}
            job_title={data.jobExperience[0].job}
            points={data.jobExperience[0].points}
            skills={data.jobExperience[0].skills}
          />
          <Tile
            image={BBC}
            alt="logo of BBC"
            company={data.jobExperience[1].title}
            job_title={data.jobExperience[1].job}
            points={data.jobExperience[1].points}
            skills={data.jobExperience[1].skills}
          />
          <Tile
            image={Napier}
            alt="logo of Edinburgh Napier University"
            company={data.jobExperience[2].title}
            job_title={data.jobExperience[2].job}
            points={data.jobExperience[2].points}
            skills={data.jobExperience[2].skills}
          />
          <Tile
            image={CAS}
            alt="logo of CAS Ltd"
            company={data.jobExperience[3].title}
            job_title={data.jobExperience[3].job}
            points={data.jobExperience[3].points}
            skills={data.jobExperience[3].skills}
          />
          <Tile
            image={UoE}
            alt="logo of University of Edinburgh"
            company={data.jobExperience[4].title}
            job_title={data.jobExperience[4].job}
            points={data.jobExperience[4].points}
            skills={data.jobExperience[4].skills}
          />

          <div className="section_title">Education</div>
          <Tile
            image={Napier}
            alt="logo of Edinburgh Napier University"
            company={data.education[0].institution}
            job_title={data.education[0].course}
            grade={data.education[0].grade}
            final_project={data.education[0].final_project}
          />
          <Tile
            image={WCS}
            alt="logo of West College Scotland"
            company={data.education[1].institution}
            job_title={data.education[1].course}
            grade={data.education[1].grade}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Work;
