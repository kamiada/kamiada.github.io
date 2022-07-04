import { Profile, Projects, AboutMe, Work, Contact } from "../src/pages";
import { Menu } from "../src/components";
import "./app.scss";
import { Fragment, useState } from "react";
import { Switcher } from "../src/components";
import { LanguageContext } from "./components/Switcher/language-context";

function App() {
  const [language, setLanguage] = useState("ENG");
  const toggleLanguage = () => {
    setLanguage((language) => {
      if (language === "ENG") {
        return setLanguage("PL");
      }
      if (language === "PL") {
        return setLanguage("FR");
      }
      if (language === "FR") {
        return setLanguage("ENG");
      }
    });
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
    <Fragment>
      <div className="App">
      <Switcher onClick={() => setLanguage()} />
        <Menu />
        <Profile id="profile" />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000046"
            fillOpacity="1"
            d="M0,192L13.3,165.3C26.7,139,53,85,80,58.7C106.7,32,133,32,160,32C186.7,32,213,32,240,58.7C266.7,85,293,139,320,144C346.7,149,373,107,400,106.7C426.7,107,453,149,480,160C506.7,171,533,149,560,128C586.7,107,613,85,640,112C666.7,139,693,213,720,224C746.7,235,773,181,800,170.7C826.7,160,853,192,880,186.7C906.7,181,933,139,960,144C986.7,149,1013,203,1040,213.3C1066.7,224,1093,192,1120,149.3C1146.7,107,1173,53,1200,74.7C1226.7,96,1253,192,1280,208C1306.7,224,1333,160,1360,138.7C1386.7,117,1413,139,1427,149.3L1440,160L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"
          ></path>
        </svg>
      </div>
      <footer>
      <span>&#169;</span> Adrianna Kaminska
      </footer>
    </Fragment>
    </LanguageContext.Provider>

  );
}

export default App;
