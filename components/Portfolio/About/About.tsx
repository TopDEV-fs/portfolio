import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './About.styles';
// import WaveDivider from '../WaveDivider/WaveDivider';
import Navbar from '../Navbar/Navbar';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import SecondSlide from './Slides/SecondSlide/SecondSlide';
import ThirdSlide from './Slides/ThirdSlide/ThirdSlide';
import FourthSlide from './Slides/FourthSlide/FourthSlide';
// import FifthSlide from './Slides/FifthSlide/FifthSlide';
import SixthSlide from './Slides/SixthSlide/SixthSlide';
import FirstSlide from './Slides/FirstSlide/FirstSlide';

/**
 *Renders About section in resume
 *@function About
 *@returns {JSX.Element} - Rendered CardContent component
 */
const About = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLogoExpanded, setIsLogoExpanded] = useState(true);
  const [isWaveVisible] = useIntersectionObserver(ref, { threshold: 0.5 });

  useEffect(() => {
    if (isWaveVisible) setIsLogoExpanded((p) => !p);
  }, [isWaveVisible]);

  return (
    <Styled.Container>
      {/*   NAVIGATION    */}
      <Navbar isLogoExpanded={isLogoExpanded} />
      {/*   FIRST SLIDE   */}
      <FirstSlide />
      {/*THIS EMPTY DIV IS USED TO TOGGLE COLLAPSE EFFECT OF LOGO*/}
      {/*   SECOND SLIDE   */}
      <SecondSlide />
      <div ref={ref} />
      {/*   THIRD SLIDE   */}
      <ThirdSlide />
      {/*   FOURTH SLIDE   */}
      <FourthSlide />
      {/*   FIFTH SLIDE   */}

      {/* <FifthSlide /> */}

      {/*   SIXTH SLIDE   */}
      <SixthSlide />
    </Styled.Container>
  );
};

export default About;
