import React from 'react';
import MainTitle from '../../MainTitle/MainTitle';
import NavTab from '../../NavTab/NavTab';
import LandingInfoSection from '../../LandingInfoSection/LandingInfoSection';
import Promo from '../../Promo/Promo';
import Student from '../../Student/Student';
import TechnologyStack from '../../TechnologyStack/TechnologyStack';
import Footer from '../../Footer/Footer';

export default function Main() {
  return (
    <>
      <MainTitle />
      <NavTab />
      <LandingInfoSection title="О проекте" link="about">
        <Promo />
      </LandingInfoSection>
      <LandingInfoSection title="Технологии" link="technologies">
        <TechnologyStack />
      </LandingInfoSection>
      <LandingInfoSection title="Студент" link="student">
        <Student />
      </LandingInfoSection>
      <Footer />
    </>
  );
};
