import React from 'react';
import './index.css';
import MainTitle from '../../MainTitle/MainTitle';
import MainInnerLinks from '../../MainInnerLinks/MainInnerLinks';
import LandingInfoSection from '../../LandingInfoSection/LandingInfoSection';
import AboutProject from '../../AboutProject/AboutProject';
import Student from '../../Student/Student';
import TechnologyStack from '../../TechnologyStack/TechnologyStack';
import Footer from '../../Footer/Footer';

export default function Landing() {
  return (
    <>
      <MainTitle />
      <MainInnerLinks />
      <LandingInfoSection title="О проекте">
        <AboutProject/>
      </LandingInfoSection>
      <LandingInfoSection title="Технологии">
        <TechnologyStack />
      </LandingInfoSection>
      <LandingInfoSection title="Студент">
        <Student />
      </LandingInfoSection>
      <Footer />
    </>
  );
};
