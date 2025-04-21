import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Resume from '../../../components/Portfolio/Resume/Resume';
import { FULL_NAME } from '../../../config/config';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={`${FULL_NAME} | Resume`}>
      <Resume />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
