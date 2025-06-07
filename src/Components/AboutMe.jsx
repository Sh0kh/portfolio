import React from 'react'
import '../Style/AboutMe.css'
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutMe({scrollToSection, skilsRef }) {
  
  const { t } = useTranslation();

    useGSAP(()=>{
        gsap.fromTo('.AboutMe__1',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.AboutMe__1',
          start:'top 99%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.AboutMe__2',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.AboutMe__1',
          start:'top 99%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.AboutMe__3',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.AboutMe__3',
          start:'top 99%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.AboutMe__4',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.AboutMe__4',
          start:'top 99%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.AboutMe__5',
      {
        y:'100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.AboutMe__5',
          start:'top 99%',
        }
      }
    )
})
    return (
        <section className='AboutMe'>
            <svg className='Svg__top' xmlns="http://www.w3.org/2000/svg" width="1700" height="266" viewBox="0 0 1700 266" fill="none">
                <path d="M0 0L1700 266H0V0Z" fill="#1E1E1E" />
            </svg>
            <div className='AboutMEBig'>
                <div className='Container'>
                    <h1 className='AboutMe__1'>
                    {t('AboutMe__title')}
                    </h1>
                    <div className='AboutMe__wrapper'>
                        <p className='AboutMe__2'>
                        {t('AboutMe__text1')}
                        </p>
                        <p className='AboutMe__3'>
                        {t('AboutMe__text2')}
                        </p>
                        <p className='AboutMe__4'>
                        {t('AboutMe__text3')}
                        </p>
                        <p className='AboutMe__4'>
                        {t('AboutMe__text4')}
                        </p>
                        <button className='AboutMe__5' onClick={() => scrollToSection(skilsRef)}>
                        {t('AboutMe__btn')}
                        </button>
                    </div>
                </div>
            </div>
            <svg className='Svg__bottom' xmlns="http://www.w3.org/2000/svg" width="1700" height="266" viewBox="0 0 1700 266" fill="none">
                <path d="M1700 266L0 0L1700 0V266Z" fill="#1E1E1E" />
            </svg>
        </section>
    )
}

export default AboutMe