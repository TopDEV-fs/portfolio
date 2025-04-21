import type { NextPage } from 'next';
import React from 'react';
import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import About from '../../../components/Portfolio/About/About';
import { FULL_NAME, JOB_TITLE } from '../../../config/config';

const PortfolioAboutPage: NextPage = () => {
  return (
    <PortfolioLayout title={`${FULL_NAME} | ${JOB_TITLE}`}>
      <About />
    </PortfolioLayout>
  );
};

export default PortfolioAboutPage;
