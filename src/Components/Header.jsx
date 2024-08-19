import React from 'react'
import '../Style/Header.css'
import Logo from '../images/logo.jpg'
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
import i18n from '../i18n';

function Header({ scrollToSection,  aboutMeRef, skilsRef, projectRef, contactRef }) {

    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    const handleLenguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
        } else if (language === 'ru') {
            i18n.changeLanguage('en');
            setLanguage('en');
        }
    };
  return (
    <header>
        <div className='Container'> 
            <div className='Header__wrapper'> 
                <div className='Header__logo'> 
                    <img className='Header__logo__img' src={Logo} alt="" />
                </div>
                <nav className='Header__nav'>
                    <a href="#section2" onClick={() => scrollToSection(aboutMeRef)}>
                        {t('Hero__Btn')}
                    </a>
                    <a href="#section3" onClick={() => scrollToSection(skilsRef)}>
                    {t('AboutMe__btn')}
                    </a>
                    <a href="#section2" onClick={() => scrollToSection(projectRef)}>
                    {t('MySkills__btn')}
                    </a>
                    <a href="#section2" onClick={() => scrollToSection(contactRef)}>
                    {t('Project__btn2')}
                    </a>
                </nav>
                <button className='Header__btn' onClick={handleLenguageChange}>
                {/* {t('change to')}{' '} */}
                {language === 'ru' ? t('english') : t('russian')}
                </button>
            </div>
        </div>
    </header>
)
}

export default Header