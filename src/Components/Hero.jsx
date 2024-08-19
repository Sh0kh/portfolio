import React from 'react'
import '../Style/Hero.css'
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero({scrollToSection, aboutMeRef}) {

    const { t } = useTranslation();


    useGSAP(()=>{
        gsap.fromTo('.Hero__1',
            { y: '-100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
        )
        gsap.fromTo('.Hero__2',
            { opacity: 0 }, 
            {  opacity: 1, duration: 8, ease: 'power2.out' }
        )
        gsap.fromTo('.Hero__3',
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
        )
        gsap.fromTo('.Hero__4',
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 4, ease: 'power2.out' }
        )
    })
    return (
        <section id='section1' className='Hero'>
            <div className='Container'>
                <div className='Hero__wrapper'>
                    <h3 className='Hero__1'>
                       {t('Hero__Hello')}
                    </h3>
                    <h1 className='Hero__2'>
                        {t('Hero__Title')}
                    </h1>
                    <p className='Hero__3'>
                    {t('Hero__SubTitle')}
                    </p>
                    <button className='Hero__4' onClick={() => scrollToSection(aboutMeRef)}>
                        {t('Hero__Btn')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero