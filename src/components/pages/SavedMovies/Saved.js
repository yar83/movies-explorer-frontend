import React, { useContext } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import { UserAuthContext } from '../../../contexts/UserAuthContext';
import './index.css';

export default function Saved() {
  const { userMovies } = useContext(UserAuthContext);
  const baseMoviesArray = userMovies.map((movie) => (
      {
        id: movie.movieId,
        nameRU: movie.nameRU,
        duration: movie.duration,
        image: {
          url: `${movie['image'].replace('https://api.nomoreparties.co/beatfilm-movies','')}`,
        },
      }
  ));

  return (
    <>
      <Header />
      <SearchForm />
      <MoviesSection movies={baseMoviesArray} />
      <Footer />
    </>
  );
};
