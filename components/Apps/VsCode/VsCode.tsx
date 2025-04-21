import React from 'react';
import Iframe from '../../Iframe/Iframe';
import { VSCODE_GITHUB_URL } from '../../../config/config';

/**
 *Returns embedded VS Code iframe
 *@function Component
 *@returns {JSX.Element} - Rendered VsCode component
 */
const VsCode = (): JSX.Element => {
  return (
    <Iframe
      iframeSrc={VSCODE_GITHUB_URL}
      iframeSize={{ width: '100%', height: '100%' }}
      title={'VS Code'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default VsCode;
