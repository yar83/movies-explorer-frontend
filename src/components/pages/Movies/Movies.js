import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import moviesApi from '../../../utils/api/MoviesApi';
import { useSearch } from '../../../utils/hooks/useSearch';

export default function Movies() {
  const setMetersCheckboxInitState = () => {
    return localStorage.getItem('search-movies-checkbox-state') === 'true'
      ? true
      : false;
  }

  const setSearchQueryInitState = () => {
    const savedSearchQuery = localStorage.getItem('search-movies-query');
    return savedSearchQuery || ''; 
  }

  const setMoviesInitState = () => {
    const savedMovies = localStorage.getItem('filtered-movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  }

  const [searchQuery, setSearchQuery] = useState(setSearchQueryInitState());
  const [movies, setMovies] = useState([]);
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [isGettingMovies, setIsGettingMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [checkboxState, setCheckboxState] = useState(setMetersCheckboxInitState());
  const [externalError, setExternalError] = useState(false);
  const [isAfterSearch, setIsAfterSearch] = useState(false);
  const {
    getInitMoviesCount,
    filterMoviesBySearchQuery,
    getMoviesByCount,
  } = useSearch();

  const shortMetersCheckboxHandler = (evt) => {
    const checkbox = evt.target;
    setCheckboxState(checkbox.checked);
  };

  const handleFormChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const handleMoreBtnClick = () => {
    setMoviesCount(moviesCount + getInitMoviesCount().additionalCount);
  };

  const saveSearchAttrs = (searchQuery, filteredMovies, checkboxState) => {
    localStorage.setItem('search-movies-query', searchQuery);
    localStorage.setItem('filtered-movies', JSON.stringify(filteredMovies));
    localStorage.setItem('search-movies-checkbox-state', checkboxState);
  };

  useEffect(() => {
    setMovies(getMoviesByCount(filteredMovies, moviesCount));
  }, [moviesCount]);

  useEffect(() => {
    setMovies(getMoviesByCount(filteredMovies, moviesCount));
  }, [filteredMovies]);

  useEffect(() => {
    setMoviesCount(getInitMoviesCount().initialCount);
    setFilteredMovies(setMoviesInitState());
  }, []);

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
          const filteredMovies = filterMoviesBySearchQuery(rawMovies, searchQuery, checkboxState);
          saveSearchAttrs(searchQuery, filteredMovies, checkboxState);
          setIsAfterSearch(true);
          setFilteredMovies(filteredMovies);

          setIsGettingMovies(false);
        })
        .catch(() => {
          setExternalError(true);
        })
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
        shortMetersCheckboxHandler={shortMetersCheckboxHandler}
        initCheckBoxState={checkboxState}
      />
      <MoviesSection
        movies={movies}
        handleMoreBtnClick={handleMoreBtnClick}
        noMoreHiddenMovies={filteredMovies.length === movies.length}
        isGettingMovies={isGettingMovies}
        externalError={externalError}
        isAfterSearch={isAfterSearch}
      />
      <Footer />
    </>
  );
};
