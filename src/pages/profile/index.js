import React, { Fragment } from "react";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";
import { Layout } from "../../components";

const Profile = () => {
  return (
    <Fragment>
      <Layout>
        <div className="master_container" id="home">
          <div className="top_wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F54F5B"
                fillOpacity="1"
                d="M0,160L10.4,181.3C20.9,203,42,245,63,224C83.5,203,104,117,125,69.3C146.1,21,167,11,188,26.7C208.7,43,230,85,250,133.3C271.3,181,292,235,313,245.3C333.9,256,355,224,376,224C396.5,224,417,256,438,240C459.1,224,480,160,501,128C521.7,96,543,96,563,90.7C584.3,85,605,75,626,64C647,53,668,43,689,37.3C709.6,32,730,32,751,42.7C772.2,53,793,75,814,117.3C834.8,160,856,224,877,245.3C897.4,267,918,245,939,213.3C960,181,981,139,1002,133.3C1022.6,128,1043,160,1064,197.3C1085.2,235,1106,277,1127,282.7C1147.8,288,1169,256,1190,234.7C1210.4,213,1231,203,1252,208C1273,213,1294,235,1315,240C1335.7,245,1357,235,1377,202.7C1398.3,171,1419,117,1430,90.7L1440,64L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="profile_circle">
            <img src={profilePic} alt="woman who build and owns this website" />
          </div>

          <div className="profile_container">
            <div className="text-holder">
              <p>
                Hello! My name is Adrianna. I am software engineer currently
                working for Stint
              </p>
            </div>
            <div class="profile-button-scroll">
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
