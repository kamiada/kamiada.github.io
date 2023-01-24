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
  return <Layout></Layout>;
};
export default AboutMe;
