import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import moviesApi from '../../../utils/api/MoviesApi';
import { useSearch } from '../../../utils/hooks/useSearch';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [isGettingMovies, setIsGettingMovies] = useState(false);
  const [filteredMovies, setFilteredMoies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const {
    getInitMoviesCount,
    filterMoviesBySearchQuery,
    getMoviesByCount,
  } = useSearch();

  const handleFormChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const handleMoreBtnClick = () => {
    setMoviesCount(moviesCount + getInitMoviesCount().additionalCount);
  };

  useEffect(() => {
    setMovies(getMoviesByCount(filteredMovies, moviesCount));
  }, [moviesCount]);

  useEffect(() => {
    setMovies(getMoviesByCount(filteredMovies, moviesCount));
  }, [filteredMovies]);

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      setIsQueryValid(false);
    } else {
      setMoviesCount(getInitMoviesCount().initialCount);
      setIsGettingMovies(true);
      setIsQueryValid(true);
      moviesApi.getMovies()
        .then((rawMovies) => {
          setFilteredMoies(filterMoviesBySearchQuery(rawMovies, searchQuery));
          setIsGettingMovies(false);
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
        ? <MoviesSection
            movies={movies}
            handleMoreBtnClick={handleMoreBtnClick}
            noMoreHiddenMovies={filteredMovies.length === movies.length}
          />
        : ''
      }
      <Footer />
    </>
  );
};
