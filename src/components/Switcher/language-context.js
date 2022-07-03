import * as React from "react";
import PL from '../../text_lang/Polish.json';
import ENG from '.../../text_lang/English.json';
import FR from '../../text_lang/French.json';

export const dictionaryList = { ENG, FR, PL };

export const languageOptions = {
    ENG: 'English', FR: 'French', PL: 'Polish'
};

export const LanguageContext = React.createContext({ userLanguage: 'ENG', dictionary: dictionaryList.ENG });