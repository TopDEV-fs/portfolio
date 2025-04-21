import React from 'react';
import * as Styled from './Logo.styles';
import Link from 'next/link';
import { PROFILE_NAME } from '../../../config/config';
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
      {PROFILE_NAME.split('').map((item, key) =>
        key == 0 ? (
          <span key={key} className={'main-letter'}>
            {item}
          </span>
        ) : (
          <span key={key} className={'letter'}>
            {item}
          </span>
        )
      )}
      <Link href={'/portfolio'} passHref>
        <Styled.A />
      </Link>
    </Styled.Container>
  );
};

export default Logo;
