import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import PortfolioLanding from '../../components/Portfolio/PortfolioLanding/PortfolioLanding';
import { FULL_NAME, JOB_TITLE } from '../../config/config';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={`${FULL_NAME} | ${JOB_TITLE}`}>
      <PortfolioLanding />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
