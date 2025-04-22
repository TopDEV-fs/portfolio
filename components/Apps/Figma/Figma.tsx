import React from 'react';
import Iframe from '../../Iframe/Iframe';

/**
 *Returns embedded figma project iframe
 *@function Figma
 *@returns {JSX.Element} - Rendered Figma component
 */
const Figma = (): JSX.Element => {
  return (
    <Iframe
      iframeSrc={'https://figma.com/'}
      iframeSize={{ width: '100%', height: '100%' }}
      title={'Figma'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default Figma;
