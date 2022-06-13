import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import moviesApi from '../../../utils/api/MoviesApi';

export default function Movies() {

  const getInitMoviesCount = () => {
    switch (true) {
      case window.innerWidth >= 1280:
        return 12;
      case window.innerWidth >= 768:
        return 8;
      default:
        return 5;
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [isGettingMovies, setIsGettingMovies] = useState(false);
  const [filteredMovies, setFilteredMoies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(getInitMoviesCount());

  const handleFormChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const filterMoviesBySearchQuery = (rawMovies) => {
    return rawMovies;
  };

  const getMoviesByCount = (filteredMovies) => {
    let upToCountMovies = [];
    if (filteredMovies.length <= moviesCount) return filteredMovies;
    for (let i = 0; i < moviesCount; i++) upToCountMovies.push(filteredMovies[i]);
    return upToCountMovies;
  };

  const handleMoreBtnClick = () => {
    console.log('Count = ', moviesCount);
    setMoviesCount(moviesCount + 3);
  };

  useEffect(() => {
    setMovies(getMoviesByCount(filteredMovies));
  }, [moviesCount]);

  useEffect(() => {
    setMovies(getMoviesByCount(filteredMovies));
  }, [filteredMovies]);

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      setIsQueryValid(false);
    } else {
      setIsGettingMovies(true);
      setIsQueryValid(true);
      moviesApi.getMovies()
        .then((rawMovies) => {
          setFilteredMoies(filterMoviesBySearchQuery(rawMovies));
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
          />
        : ''
      }
      <Footer />
    </>
  );
};
