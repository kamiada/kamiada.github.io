import React, { useContext } from "react";
import { Container, SwitchButton } from './Switcher.styles';
import { LanguageContext } from './language-context';


export const Switcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);
    return (
        <Container>
            <SwitchButton onClick={toggleLanguage}>
                {language}
            </SwitchButton>
        </Container>
    )
}