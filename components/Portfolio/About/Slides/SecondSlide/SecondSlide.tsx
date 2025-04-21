import React from 'react';
import * as Styled from './SecondSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import WithSparkles from '../../../WithSparkles/WithSparkles';

/**
 *Renders second slide in About Portfolio presentation
 *@function SecondSlide
 *@returns {JSX.Element} - Rendered SecondSlide component
 */
const SecondSlide = (): JSX.Element => {
  return (
    <Slide
      bgWallpaper={'/assets/background.jpg'}
      height={'100vh'}
      anchorID={'second-slide'}
    >
      <Styled.SecondSlide className="page second-page">
        <div className="left-column">
          <SectionHeader
            variant={'medium'}
            headerText={'Design'}
            margin={'0'}
            color={'#ffffff'}
          />

          <PortfolioParagraph
            margin={'0'}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          >
            💫 I am a{' '}
            <WithSparkles color={'yellow'}>
              multifaceted personality
            </WithSparkles>{' '}
            driven by the exploration of unknown. You can also call me a
            frontend, backend, full-stack web developer or by any other
            market-defined title. I am devoted to constructing inclusive, rich
            web experiences for next-gen web platforms.
          </PortfolioParagraph>
        </div>
        <div className="right-column">
          <>
            <SectionHeader
              variant={'medium'}
              headerText={'Engineering'}
              margin={'0'}
              color={'#ffffff'}
            />
            <PortfolioParagraph
              margin={'0'}
              paragraphText={
                '🚀 I have excellent knowledge of modern JS stack for building complex user interfaces for the web platform. In crafting JavaScript applications, I have a strong passion to build elegant, performant, scalable and user-friendly experiences.'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
          </>
          <>
            <SectionHeader
              variant={'medium'}
              headerText={'AI Integration'}
              margin={'0'}
              color={'#ffffff'}
            />
            <PortfolioParagraph
              margin={'0'}
              paragraphText={
                'Experienced in integrating advanced AI capabilities into web applications using modern frameworks like React.js, Next.js, and APIs from OpenAI and LangChain. Skilled at designing and implementing intelligent features such as conversational agents, task automation, recommendation systems, and real-time AI responses.'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
          </>
        </div>
      </Styled.SecondSlide>
    </Slide>
  );
};

export default SecondSlide;
