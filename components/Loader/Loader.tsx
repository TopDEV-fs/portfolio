import React, { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import * as Styled from './Loader.styles';
import Logo from '../Portfolio/Logo/Logo';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarfieldAnimation = dynamic(
  () => import('react-starfield-animation') as Promise<ComponentType<any>>,
  {
    ssr: false,
  }
);
export interface Props {
  isOnScreen: boolean;
  loadingDuration: number;
}

/**
 *Renders main loading component
 *@function Loader
 *@param {boolean} isOnScreen - specifies whether element is on screen
 *@param {number} loadingDuration - duration of dummy loading in milliseconds, based on this duration, un-mounting animation will be toggled after duration - 500ms
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Loader = ({ isOnScreen, loadingDuration }: Props): JSX.Element => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLogoExpanded(false);
    }, loadingDuration - 1000);
  }, [loadingDuration]);
  return (
    <Styled.Container isOnScreen={isOnScreen} loadingDuration={loadingDuration}>
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />

      <Logo isExpanded={isLogoExpanded} />
      <Styled.TextContainer>
        <Styled.ScrollText>
          Creative Web Development <br />
          Artificial Intelligence <br />
          React <br />
          Next.js <br />
          Node.js <br />
        </Styled.ScrollText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Loader;
