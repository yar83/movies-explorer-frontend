import React, { useState } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';

export default function Movies() {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  const openNavigation = () => {
    setNavigationOpen(true);
  };

  const closeNavigation = () => {
    setNavigationOpen(false);
  };

  return (
    <>
      <Header openNavigation={openNavigation} />
      <SearchForm />
      <MoviesSection />
      <Footer />
      <Navigation
        isOpen={isNavigationOpen}
        onClose={closeNavigation}
      />
    </>
  );
};
