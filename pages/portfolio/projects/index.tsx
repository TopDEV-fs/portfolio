import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import HighlightedProjects from '../../../components/Portfolio/HighlightedProjects/HighlightedProjects';
import { FULL_NAME, JOB_TITLE } from '../../../config/config';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={`${FULL_NAME} | ${JOB_TITLE}`}>
      <HighlightedProjects />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
