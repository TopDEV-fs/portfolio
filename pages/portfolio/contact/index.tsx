import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Contact from '../../../components/Portfolio/Contact/Contact';
import { FULL_NAME, JOB_TITLE } from '../../../config/config';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={`${FULL_NAME} | ${JOB_TITLE}`}>
      <Contact />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
