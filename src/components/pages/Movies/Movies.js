import React from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';

export default function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesSection />
      <Footer />
    </>
  );
};
