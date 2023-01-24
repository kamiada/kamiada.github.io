import React from "react";
import { Panel, Layout } from "../../components";
import {
  NHM,
  MendleevTable,
  CAS,
  MobileApp,
  Arctica,
  Live,
  DualityOfChoice,
} from "../../images";
import "./projects.scss";
import projects from "./projects.json";

const Projects = () => {
  return (
    <Layout>
      <div  id="projects" className="section_title_projects">Some Of My Most Recent Side-Projects</div>
      <div className="projects-container">
        <div className="table">
          <Panel
            image={MendleevTable}
            alt="Screenshot of Mendleeve Table"
            projectTitle={projects.projectsDescriptions[0].title}
            link={projects.projectsDescriptions[0].github}
            tags={projects.projectsDescriptions[0].tags}
          />
          <Panel
            image={Live}
            alt="Screenshot of the web app from BBC hackathon"
            projectTitle={projects.projectsDescriptions[1].title}
            link={projects.projectsDescriptions[1].github}
            tags={projects.projectsDescriptions[1].tags}
          />
          <Panel
            image={MobileApp}
            alt="Poster of project for the dissertation"
            projectTitle={projects.projectsDescriptions[2].title}
            link={projects.projectsDescriptions[2].outsideLinks}
            tags={projects.projectsDescriptions[2].tags}
          />
          <Panel
            image={CAS}
            alt="No image, just logo of the company for which I have done this project"
            projectTitle={projects.projectsDescriptions[3].title}
            tags={projects.projectsDescriptions[3].tags}
          />
          <Panel
            image={Arctica}
            alt="Screenshot of web browser game Arctica with polar bear on it"
            projectTitle={projects.projectsDescriptions[4].title}
            link={projects.projectsDescriptions[4].links}
            tags={projects.projectsDescriptions[4].tags}
          />
          <Panel
            image={NHM}
            alt="Redesign for the website of Natural History Museum"
            projectTitle={projects.projectsDescriptions[5].title}
            link={projects.projectsDescriptions[5].github}
            tags={projects.projectsDescriptions[5].tags}
          />
          <Panel
            image={DualityOfChoice}
            alt="Text game for Global Game Jam 2022"
            projectTitle={projects.projectsDescriptions[6].title}
            link={projects.projectsDescriptions[6].github}
            tags={projects.projectsDescriptions[6].tags}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
