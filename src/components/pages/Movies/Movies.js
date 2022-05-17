import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  const openNavigation = () => {
    setNavigationOpen(true);
  };

  const closeNavigation = () => {
    setNavigationOpen(false);
  };

  useEffect(() => {fetch('https://api.nomoreparties.co/beatfilm-movies',
    {
      method: 'GET',
    })
    .then(res => res.json())
    .then(json => {
      let moviesArr = [];
      for (let i = 0; i < 12; i++ ) {
        moviesArr.push({
          id: json[i].id,
          title: json[i].nameRU,
          duration: json[i].duration,
          posterUrl: json[i].image.url,
        });
      };
      setMovies(moviesArr);
      })
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header openNavigation={openNavigation} />
      <SearchForm />
      <MoviesSection movies={movies} />
      <Footer />
      <Navigation
        isOpen={isNavigationOpen}
        onClose={closeNavigation}
      />
    </>
  );
};
