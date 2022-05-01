import React from 'react';
import './index.css';
import MainTitle from '../../MainTitle/MainTitle';
import NavTab from '../../NavTab/NavTab';
import LandingInfoSection from '../../LandingInfoSection/LandingInfoSection';
import Promo from '../../Promo/Promo';
import Student from '../../Student/Student';
import TechnologyStack from '../../TechnologyStack/TechnologyStack';
import Footer from '../../Footer/Footer';

export default function Landing() {
  return (
    <>
      <MainTitle />
      <NavTab />
      <LandingInfoSection title="О проекте">
        <Promo />
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
