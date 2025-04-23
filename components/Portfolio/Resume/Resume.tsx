import React from 'react';
import * as Styled from './Resume.styles';
import TextList from '../TextList/TextList';

import {
  keyTechSkills,
  otherSkills,
  professionalExperience,
} from './Resume.config';
import {
  FiDownload,
  FiGithub,
  FiGlobe,
  FiMail,
  // FiPhoneOutgoing,
} from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Link from 'next/link';
import {
  EMAIL,
  GITHUB_URL,
  JOB_TITLE,
  LINKED_IN_URL,
  PROFILE_NAME,
  SURNAME,
  // TELE_NUM,
} from '../../../config/config';

/**
 *Renders resume component
 *@function Resume
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Resume = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ResumeWrapper>
        <Styled.LeftColumn>
          <Styled.ContactInfo>
            <Styled.ContactLink
              href={'https://www.vovacodes.ca/'}
              target="_blank"
              rel="noopener"
            >
              <FiGlobe />
              {`${PROFILE_NAME}'s personal site`}
            </Styled.ContactLink>

            <Styled.ContactLink href={`mailto: ${EMAIL}`}>
              <FiMail />
              {EMAIL}
            </Styled.ContactLink>
            <p>{PROFILE_NAME}</p>
          </Styled.ContactInfo>

          <TextList
            variant={'withHeader'}
            textBulletPoints={keyTechSkills}
            headerText={'key technical skills'}
          />

          <TextList
            variant={'withHeader'}
            textBulletPoints={otherSkills}
            headerText={'Other skills'}
          />
        </Styled.LeftColumn>

        <Styled.RightColumn>
          {/*HEADER WITH NAME*/}
          <Styled.SummaryHeader>
            <Styled.Name>
              {PROFILE_NAME} <span>{SURNAME}</span>, PhD
            </Styled.Name>
            <Styled.Title>{JOB_TITLE}</Styled.Title>

            {/*SOCIAL MEDIA LINKS*/}
            <Styled.SocialLinksWrapper>
              <Styled.SocialMediaLink
                href={LINKED_IN_URL}
                target={'_blank'}
                rel="noopener"
              >
                <SiLinkedin className={'social-media-icon'} />
                Linkedin
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink
                href={GITHUB_URL}
                target={'_blank'}
                rel="noopener"
              >
                <FiGithub className={'social-media-icon'} />
                GitHub
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href={`mailto: ${EMAIL}`}>
                <FiMail className={'social-media-icon'} />
                Email
              </Styled.SocialMediaLink>
              {/* <Styled.SocialMediaLink href={`tel:${TELE_NUM}`}>
                <FiPhoneOutgoing className={'social-media-icon'} />
                {TELE_NUM}
              </Styled.SocialMediaLink> */}

              {/*Download PART*/}
              <Styled.SocialMediaLink
                href={'/assets/Nguyen.pdf'}
                download="Nguyen.pdf"
              >
                <FiDownload className={'social-media-icon'} />
                Download CV
              </Styled.SocialMediaLink>
            </Styled.SocialLinksWrapper>

            <Styled.HR />
            {/*SUMMARY*/}
            <Styled.Summary>
              <Styled.ResumeHeader>Summary</Styled.ResumeHeader>
              <PortfolioParagraph
                margin={'0'}
                paragraphText={`AI-Focused Full Stack Professional with 8+ years of experience in both enterprise and startup
                  environments. Proficient in JavaScript, React.js, Next.js, Angular.js, Node.js, Python, FastAPI, Flask,
                  NLP, LLMs in full stack web application development. Mostly worked in AI-Driven Product, start-up
                  MVP, AI-SaaS Platforms. Passionate about challenging the status quo and writing a unique story in my
                  developer diary.
                  `}
                withDarkColor={true}
                variant={'medium'}
                withAnimatedPresence={false}
              />
            </Styled.Summary>
          </Styled.SummaryHeader>

          {/*EXPERIENCE*/}

          <Styled.ResumeHeader>Experience</Styled.ResumeHeader>
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I’ve worked on a handful of large-scale enterprise projects over the past five years, some of which were for the following organizations:'
            }
            withDarkColor={true}
            variant={'medium'}
            withAnimatedPresence={false}
          />

          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}
          {/*PROJECTS*/}
          <Styled.ResumeHeader>Highlighted Projects</Styled.ResumeHeader>

          <Styled.Projects>
            <p>
              Links to some of my projects and work can be found on{' '}
              <Link href={'/portfolio/projects'}>
                {`${PROFILE_NAME}/portfolio/projects`}
              </Link>{' '}
              and details can be provided upon request via a scheduled demo
              call.
            </p>
          </Styled.Projects>

          {/* EDUCATION */}
          <Styled.ResumeHeader>Education</Styled.ResumeHeader>
          <Styled.EducationDetails>
            <h4>
              Bachelor&apos;s degree, Computer Engineering
              <span>Computer Programming</span>
            </h4>
            <Styled.University>West Virginia University</Styled.University>
          </Styled.EducationDetails>
        </Styled.RightColumn>
      </Styled.ResumeWrapper>
    </Styled.Container>
  );
};

export default Resume;
