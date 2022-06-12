import React, { useState } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import moviesApi from '../../../utils/api/MoviesApi';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [isGettingMovies, setIsGettingMovies] = useState(false);

  const handleFormChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      setIsQueryValid(false);
    } else {
      setIsGettingMovies(true);
      setIsQueryValid(true);
      moviesApi.getMovies()
        .then((movies) => {
          setIsGettingMovies(false);
          setMovies(movies);
        });
    }
  };
    
  return (
    <>
      <Header />
      <SearchForm
        searchQuery={searchQuery}
        handleFormChange={handleFormChange}
        submitHandler={submitHandler}
        isQueryValid={isQueryValid}
      />
      { movies.length
        ? <MoviesSection movies={movies} />
        : ''
      }
      <Footer />
    </>
  );
};
