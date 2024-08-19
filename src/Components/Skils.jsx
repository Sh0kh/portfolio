import React from 'react';
import '../Style/Skils.css';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Skils({scrollToSection, projectRef}) {
    const { t } = useTranslation();

    useGSAP(()=>{
        gsap.fromTo('.Skils__1',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.Skils__1',
          start:'top 99%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.Skils__Card',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.Skils__Card',
          start:'top 99%',
          scrub:1
        }
      }
    )
    gsap.fromTo('.Skils__2',
        {
          y:'-100%',
          opacity:0,
        },
        {
          y:'0%',
          opacity:1,
          scrollTrigger:{
            trigger:'.Skils__2',
            start:'top 99%',
            scrub:1
          }
        }
      )
})
    const SkilsData = [
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <g fill="none">
                        <rect width={256} height={256} fill="#e14e1d" rx={60}></rect>
                        <path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"></path>
                        <path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"></path>
                    </g>
                </svg>
            ),
            title: 'HTML',
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#0277bd" rx={60}></rect><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"></path><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"></path></g></svg>
            ),
            title:'CSS'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="url(#skillIconsTailwindcssDark0)" fillRule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clipRule="evenodd"></path><defs><linearGradient id="skillIconsTailwindcssDark0" x1={86.5} x2={163.5} y1={74} y2={185.5} gradientUnits="userSpaceOnUse"><stop stopColor="#32b1c1"></stop><stop offset={1} stopColor="#14c6b7"></stop></linearGradient></defs></g></svg>
            ),
            title:'Tailwind'
        },
        {
            svg:(
               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="url(#skillIconsBootstrap0)" rx={60}></rect><g filter="url(#skillIconsBootstrap2)"><path fill="url(#skillIconsBootstrap1)" d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"></path><path stroke="#fff" strokeWidth={2} d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"></path></g><defs><linearGradient id="skillIconsBootstrap0" x1={0} x2={256} y1={0} y2={256} gradientUnits="userSpaceOnUse"><stop stopColor="#9013fe"></stop><stop offset={1} stopColor="#6b11f4"></stop></linearGradient><linearGradient id="skillIconsBootstrap1" x1={85.793} x2={148.541} y1={68.962} y2={175.084} gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#f1e5fc"></stop></linearGradient><filter id="skillIconsBootstrap2" width={137.529} height={170.157} x={59} y={47} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy={4}></feOffset><feGaussianBlur stdDeviation={8}></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_158_100"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_158_100" result="shape"></feBlend></filter></defs></g></svg>
            ),
            title:'Bootstrap'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#cd6799" d="M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.47 4.47 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331q-.148.08-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.83 5.83 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5 5 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.5 10.5 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.16 2.16 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.8 7.8 0 0 0-2.946.587q-.225.093-.437.2Zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17 17 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.66 4.66 0 0 1-1.111 4.565"></path></svg>
            ),
            title:'SCSS'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#f5de19" d="M2 2h28v28H2z"></path><path d="M20.809 23.875a2.87 2.87 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.89 3.89 0 0 1 3.742 2.107L25 18.128A1.79 1.79 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.06 5.06 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"></path></svg>
            ),
            title:'JavaScript'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"></path><path stroke="#00d8ff" strokeWidth={8.91} d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clipRule="evenodd"></path><path stroke="#00d8ff" strokeWidth={8.91} d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clipRule="evenodd"></path><path stroke="#00d8ff" strokeWidth={8.91} d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd"></path></g></svg>
            ),
            title:'React'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><circle cx={64} cy={64} r={64}></circle><path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"></path><path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="deviconNextjs0" x1={109} x2={144.5} y1={116.5} y2={160.5} gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#fff" stopOpacity={0}></stop></linearGradient><linearGradient id="deviconNextjs1" x1={121} x2={120.799} y1={54} y2={106.875} gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#fff" stopOpacity={0}></stop></linearGradient></defs></svg>
            ),
            title:'NEXT.JS'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1.16em" height="1em" viewBox="0 0 256 221"><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"></path><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"></path><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"></path></svg>
            ),
            title:'VUE'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#00dc82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.4 12.4 0 0 0 4.554-4.515a12.24 12.24 0 0 0-.006-12.332l-46.185-79.286a12.4 12.4 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.4 12.4 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.4 12.4 0 0 0-4.555-4.513a12.54 12.54 0 0 0-12.444 0a12.4 12.4 0 0 0-4.555 4.513L36.67 170.834a12.24 12.24 0 0 0-.005 12.332a12.4 12.4 0 0 0 4.554 4.515a12.5 12.5 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86"></path></g></svg>
            ),
            title:'NUXT.JS'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#akarIconsGithubFill0)"><path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12" clipRule="evenodd"></path></g><defs><clipPath id="akarIconsGithubFill0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg>
            ),
            title:'GitHub'
        },
        {
            svg:(
                <svg xmlns="http://www.w3.org/2000/svg" width="0.67em" height="1em" viewBox="0 0 256 384"><path fill="#0acf83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"></path><path fill="#a259ff" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"></path><path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"></path><path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"></path><path fill="#1abcfe" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"></path></svg>
            ),
            title:'Figma'
        },
    ];

    return (
        <section className='Skils'>
            <div className='Container'>
                <div className='Skils__box'>
                    <h1 className='Skils__1'>{t('MySkills__title')}</h1>
                    <div className='Skils__wrapper'>
                        {SkilsData.map((item, index) => (
                            <div  className='Skils__Card' key={index}>
                                <div>{item.svg}</div>
                                <h2>{item.title}</h2>
                            </div>
                        ))}
                    </div>
                    <button className='Skils__2' onClick={() => scrollToSection(projectRef)}>
                    {t('MySkills__btn')}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Skils;
