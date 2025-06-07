import React from 'react'
import '../Style/Project.css'
import Foto1 from '../images/FotoPortfolio.png'
import Foto2 from '../images/FotoPortfolio2.png'
import Foto3 from '../images/FotoPortfolio3.png'
import Foto4 from '../images/FotoPortfolio4.png'
import Foto5 from '../images/FotoPortfolio5.png'
import Foto6 from '../images/FotoPortfolio6.png'
import Foto7 from '../images/FotoPortfolio7.png'
import Foto8 from '../images/FotoPortfolio8.png'
import Foto9 from '../images/FotoPortfolio9.png'
import Foto10 from '../images/FotoPortfolio10.png'
import Foto11 from '../images/FotoPortfolio11.png'
import Foto12 from '../images/FotoPortfolio12.png'
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Project({scrollToSection, contactRef}) {
  const { t } = useTranslation();

    useGSAP(()=>{
        gsap.fromTo('.Project__1',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.Project__1',
          start:'top 99%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.Project__Card',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.Project__Card',
          start:'top 99%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.Project__2',
        {
          y:'-100%',
          opacity:0,
        },
        {
          y:'0%',
          opacity:1,
          scrollTrigger:{
            trigger:'.Project__2',
            start:'top 99%',
            scrub:1
          }
        }
      )
})


    const ProtfolioData = [
        {
            img:Foto7,
            title:'Examify',
            link:'https://examify.uz/',
        },
        {
            img:Foto11,
            title:'G-Factory',
            link:'https://g-fac.jp/',
        },
        {
            img:Foto12,
            title:'Sumitomo Pharma',
            link:'https://www.sumitomo-pharma.com/',
        },
        {
            img:Foto8,
            title:'Savol xona',
            link:'https://savol-xona.uz/',
        },
        {
            img:Foto9,
            title:'Guliston news',
            link:'http://gulistonshahar.uz/',
        },
        {
            img:Foto10,
            title:'J-cert',
            link:'http://gulistonshahar.uz/',
        },
        {
            img:Foto1,
            title:'NFT',
            link:'https://nft-st-prollax.netlify.app/',
        },
        {
            img:Foto2,
            title:'Oltin Vodiy',
            link:'https://oltinvodiyrestaurant.netlify.app/',
        },
        {
            img:Foto3,
            title:'Gallary',
            link:'https://st-gallary.netlify.app/',
        },
        {
            img:Foto4,
            title:'Darxon',
            link:'https://darxon-res.uz/',
        },
        {
            img:Foto5,
            title:'Assorti',
            link:'https://assorti.uz/',
        },
        {
            img:Foto6,
            title:'Jumanji',
            link:'https://jumanji.uz/',
        },
    ]

    return (
        <section className='Project'>
            <svg className='Svg__top' xmlns="http://www.w3.org/2000/svg" width="1700" height="266" viewBox="0 0 1700 266" fill="none">
                <path d="M0 0L1700 266H0V0Z" fill="#1E1E1E" />
            </svg>
            <div className='ProjectBig'>
               <div className='Container'>
               <h1 className='Project__1'>
                   {t('Project__title')}
                </h1>
                <div className='Project__wrapper'>
                    {ProtfolioData.map((i)=>(
                    <div className='Project__Card'>
                        <img src={i.img} alt="" />
                        <h2>{i.title}</h2>
                        <a href={i.link} target="_blank" rel="noopener noreferrer">
                        {t('Project__btn1')}
                        </a>
                    </div>
                    ))}
                </div>
                <button className='Project__btn Project__2' onClick={() => scrollToSection(contactRef)}>
                {t('Project__btn2')}
                </button>
               </div>
            </div>
            <svg className='Svg__bottom' xmlns="http://www.w3.org/2000/svg" width="1700" height="266" viewBox="0 0 1700 266" fill="none">
                <path d="M1700 266L0 0L1700 0V266Z" fill="#1E1E1E" />
            </svg>
        </section>
    )
}

export default Project