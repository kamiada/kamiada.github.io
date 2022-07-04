import React, { Fragment, useContext } from "react";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";
import { Layout } from "../../components";
import {
  LanguageContext,
  dictionaryList,
} from "../../components/Switcher/language-context";

const Profile = ({ id }) => {
  const { language } = useContext(LanguageContext);
  console.log(language);
  return (
    <Fragment>
      <Layout>
        <div className="master_container" id="home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F05268"
              fill-opacity="1"
              d="M0,0L10,53.3C20,107,40,213,60,213.3C80,213,100,107,120,64C140,21,160,43,180,69.3C200,96,220,128,240,165.3C260,203,280,245,300,240C320,235,340,181,360,138.7C380,96,400,64,420,48C440,32,460,32,480,37.3C500,43,520,53,540,48C560,43,580,21,600,58.7C620,96,640,192,660,202.7C680,213,700,139,720,106.7C740,75,760,85,780,90.7C800,96,820,96,840,133.3C860,171,880,245,900,234.7C920,224,940,128,960,85.3C980,43,1000,53,1020,101.3C1040,149,1060,235,1080,240C1100,245,1120,171,1140,133.3C1160,96,1180,96,1200,122.7C1220,149,1240,203,1260,234.7C1280,267,1300,277,1320,261.3C1340,245,1360,203,1380,197.3C1400,192,1420,224,1430,240L1440,256L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"
            ></path>
          </svg>
          <div className="profile_container">
            
            <div className="text-holder">
            <img
                src={profilePic}
                alt="woman who build and owns this website"
              />
              <span>{dictionaryList[language][id]}</span>
            </div>
            <div className="profile-button-scroll">
              <Link to="about" spy={true} smooth={true} title="Scroll down!">
                Scroll down to find out about me!
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};
export default Profile;
