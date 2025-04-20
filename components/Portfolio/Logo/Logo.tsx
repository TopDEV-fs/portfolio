import React from 'react';
import * as Styled from './Logo.styles';
import Link from 'next/link';

export interface Props {
  isExpanded: boolean;
}

/**
 *Renders my animated logo
 *@function Logo
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Logo component
 */
const Logo = ({ isExpanded }: Props): JSX.Element => {
  return (
    <Styled.Container isExpanded={isExpanded}>
      <span className={'letter'}>J</span>
      <span className={'letter'}>A</span>
      <span className={'letter'}>M</span>
      <span className={'letter'}>E</span>
      <span className={'letter'}>S</span>
      <Link href={'/portfolio'} passHref>
        <Styled.A />
      </Link>
    </Styled.Container>
  );
};

export default Logo;
