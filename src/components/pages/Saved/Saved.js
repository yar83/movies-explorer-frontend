import React from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import './index.css';

export default function Saved() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesSection />
      <Footer />
    </>
  );
};
