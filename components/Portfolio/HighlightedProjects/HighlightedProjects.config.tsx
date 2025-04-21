import React from 'react';
import {
  SiBootstrap,
  // SiElasticsearch,
  SiGoogleads,
  // SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiWordpress,
  SiRadixui,
} from 'react-icons/si';
import { IHighlightedProject } from '../../../types/portfolio';
import { GITHUB_URL } from '../../../config/config';

export const useHighlightedProjectsData = (): {
  highlightedProjects: IHighlightedProject[];
} => {
  const highlightedProjects: IHighlightedProject[] = [
    {
      slideNumberImg: '/assets/portfolio/1.svg',
      projectTitle: 'EVERCARS',
      projectDescription: `I constructed the EverCars car hire website using WordPress, PHP, and Bootstrap and created a responsive and user-friendly interface. I included multi-language support, search engine optimization and Google Ads campaign management to drive traffic and improve conversions. The site saw bookings increase by 3x following launch.`,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/evercars/logo.png',
      projectMobileImg: '/assets/portfolio/orcl/oracle-cpq.webp',
      liveLink: 'https://evercars.com.ua/en/',
      projectTechnologies: [
        'WordPress',
        'PHP',
        'BootStrap',
        'Google Ads',
        'MySQL',
      ],

      slideBgColor: '#010606',
      technologyIcons: [
        <SiWordpress key={1} className={'tech-icon'} />,
        <SiPhp key={2} className={'tech-icon'} />,
        <SiBootstrap key={3} className={'tech-icon'} />,
        <SiGoogleads key={4} className={'tech-icon'} />,
        <SiMysql key={5} className={'tech-icon'} />,
      ],
    },
    {
      slideNumberImg: '/assets/portfolio/2.svg',
      projectTitle: 'Care Pulse',
      projectDescription: `Designed a responsive full-stack web application for healthcare appointment scheduling that enables patients to schedule an appointment and doctors to manage availability. Scally and performantly optimized using the newest Next.js App Router features.
        `,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/healthcare/logo-full.svg',
      projectMobileImg: '/assets/portfolio/healthcare/logo-full.svg',
      liveLink: 'https://healthcare-nextjs.vercel.app/',
      githubLink: `${GITHUB_URL}/healthcare-nextjs`,
      projectTechnologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Webpack',
        'Radix UI',
      ],

      slideBgColor: '#010606',
      technologyIcons: [
        <SiNextdotjs key={1} className={'tech-icon'} />,
        <SiTypescript key={2} className={'tech-icon'} />,
        <SiTailwindcss key={4} className={'tech-icon'} />,
        <SiWebpack key={5} className={'tech-icon'} />,
        <SiRadixui key={6} className={'tech-icon'} />,
      ],
    },
    {
      slideNumberImg: '/assets/portfolio/3.svg',
      projectTitle: 'Sneaker Maniacs',
      projectDescription:
        'Sneaker-maniacs is a custom e-commerce platform powered by Next.js, Redux and MongoDB. My main goal was to build a web app that employs the best latest practices and on mobile feels like a rich native application. Try it out!',
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projectOne/SneakerManiacs.png',
      projectMobileImg: '/assets/portfolio/projectOne/sneakerManiacsPhone.png',
      githubLink: `${GITHUB_URL}/next-multibrand-store`,
      liveLink: 'https://sneaker-maniacs.vercel.app/',
      projectTechnologies: [
        'Next.js',
        'React',
        'Redux',
        'Mongo DB',
        'Styled Components',
      ],

      slideBgColor: '#010606',
      technologyIcons: [
        <SiTypescript key={1} className={'tech-icon'} />,
        <SiReact key={2} className={'tech-icon'} />,
        <SiNextdotjs key={3} className={'tech-icon'} />,
        <SiRedux key={4} className={'tech-icon'} />,
        <SiMongodb key={5} className={'tech-icon'} />,
        <SiStorybook key={6} className={'tech-icon'} />,
      ],
    },
    {
      slideNumberImg: '/assets/portfolio/4.svg',
      projectTitle: 'Department of Optics | Web-portal',
      projectDescription: `A sneak peak of a project that I'm currently building. This is a full-stack portal with 70+ pages designed and built for the department of Optics (Chernivtsi National University). It is powered by Next.js and Node.js on backend.`,
      slideHeight: '100vh',
      projectImg: '/assets/portfolio/projectTwo/vpsFullHd.png',
      projectMobileImg: '/assets/portfolio/projectTwo/vpsMobile.png',
      githubLink: `${GITHUB_URL}/next-multibrand-store`,
      liveLink: 'https://optics-vps.vercel.app/',
      projectTechnologies: ['Next.js', 'React', 'Redux', 'Mongo DB', 'Express'],

      slideBgColor: '#4831d4',
      technologyIcons: [
        <SiTypescript key={1} className={'tech-icon'} />,
        <SiReact key={2} className={'tech-icon'} />,
        <SiNextdotjs key={3} className={'tech-icon'} />,
        <SiRedux key={4} className={'tech-icon'} />,
        <SiNodedotjs key={5} className={'tech-icon'} />,
        <SiMongodb key={6} className={'tech-icon'} />,
      ],
    },
  ];
  return {
    highlightedProjects,
  };
};
