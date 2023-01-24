import React, { Fragment, useContext } from "react";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";
import { Layout } from "../../components";
import {
  LanguageContext,
  dictionaryList,
} from "../../components/Switcher/language-context";

const Profile = ({ id, id2 }) => {
  const { language } = useContext(LanguageContext);
  const text = dictionaryList[language][id2];
  return (
    <Fragment>
      <Layout>
        <div className="master_container" id="home">
          <svg id="top_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#49018C"
              fill-opacity="1"
              d="M0,224L13.3,192C26.7,160,53,96,80,96C106.7,96,133,160,160,186.7C186.7,213,213,203,240,213.3C266.7,224,293,256,320,277.3C346.7,299,373,309,400,293.3C426.7,277,453,235,480,229.3C506.7,224,533,256,560,234.7C586.7,213,613,139,640,133.3C666.7,128,693,192,720,192C746.7,192,773,128,800,106.7C826.7,85,853,107,880,106.7C906.7,107,933,85,960,74.7C986.7,64,1013,64,1040,80C1066.7,96,1093,128,1120,154.7C1146.7,181,1173,203,1200,197.3C1226.7,192,1253,160,1280,170.7C1306.7,181,1333,235,1360,261.3C1386.7,288,1413,288,1427,288L1440,288L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
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
            <div className="little_profile">
            <span>{text.introduction}</span>
            </div>
            <div className="little_profile">
            <span>{text.rest}</span>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};
export default Profile;
