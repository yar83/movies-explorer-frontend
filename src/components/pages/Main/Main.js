import React, { useState } from 'react';
import MainTitle from '../../MainTitle/MainTitle';
import NavTab from '../../NavTab/NavTab';
import LandingInfoSection from '../../LandingInfoSection/LandingInfoSection';
import Promo from '../../Promo/Promo';
import Student from '../../Student/Student';
import TechnologyStack from '../../TechnologyStack/TechnologyStack';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';

export default function Main() {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  const openNavigation = () => {
    setNavigationOpen(true);
  };

  const closeNavigation = () => {
    setNavigationOpen(false);
  };
  return (
    <>
      <MainTitle burgerBtnClickHandler={openNavigation} />
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
      <Navigation
        isOpen={isNavigationOpen}
        onClose={closeNavigation}
      />
    </>
  );
};
