import React from 'react'
import '../Style/Footer.css'
import { useTranslation } from 'react-i18next';

function Footer({ scrollToSection,  aboutMeRef, skilsRef, projectRef, contactRef }) {
    const { t } = useTranslation();

    return (
        <footer>
            <svg className='Svg__top' xmlns="http://www.w3.org/2000/svg" width="1700" height="266" viewBox="0 0 1700 266" fill="none">
                <path d="M0 0L1700 266H0V0Z" fill="#1E1E1E" />
            </svg>
            <div className='FooterContent'>
                <div className='Container'>
                    <div className='Footer__wrapper'>
                        <div className='Footer__logo'>
                            <h1>
                                ST
                            </h1>
                        </div>
                        <nav className='Header__nav footerNav'>
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
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer