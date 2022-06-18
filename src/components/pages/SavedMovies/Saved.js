import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import { useSearch } from '../../../utils/hooks/useSearch';
import { UserAuthContext } from '../../../contexts/UserAuthContext';
import './index.css';

export default function Saved() {
  const { userMovies } = useContext(UserAuthContext);

  const getInitCheckboxState = () => {
    return localStorage.getItem('search-saved-movies-checkbox-state') === 'true'
      ? true
      : false;
  }

  const getInitSearchQuery = () => {
    const searchQuery = localStorage.getItem('search-saved-movies-query');
    return searchQuery ? searchQuery : '';
  }

  const castMoviesArrToPresentableView = (rawArr) => rawArr.map((movie) => (
      {
        id: movie.movieId,
        nameRU: movie.nameRU,
        duration: movie.duration,
        image: {
          url: `${movie['image'].replace('https://api.nomoreparties.co/beatfilm-movies','')}`,
        },
      }
  ));

  const { filterMoviesBySearchQuery } = useSearch();
  const [searchQuery, setSearchQuery] = useState(getInitSearchQuery());
  const [checkboxState, setCheckboxState] = useState(getInitCheckboxState());
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [isAfterSearch, setIsAfterSearch] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('search-saved-movies-query')) {
      setIsAfterSearch(true);
      setFilteredMovies(
        castMoviesArrToPresentableView(
          filterMoviesBySearchQuery(userMovies, searchQuery, checkboxState)
        )
      );
    }
    }, []);

  const saveSearchAttrs = () => {
    localStorage.setItem('search-saved-movies-checkbox-state', checkboxState);
    localStorage.setItem('search-saved-movies-query', searchQuery);
  };

  const handleCheckboxChange = (evt) => {
    const checkbox = evt.target;
    setCheckboxState(checkbox.checked);
  };

  const handleFormChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const delMovieCardByMovieId = (movieId) => {
    setFilteredMovies(
      filteredMovies.filter((movie) => movie.id !== movieId)
    );
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      setIsQueryValid(false);
    } else {
      setIsQueryValid(true);
      saveSearchAttrs();
      setFilteredMovies(
        castMoviesArrToPresentableView(
          filterMoviesBySearchQuery(userMovies, searchQuery, checkboxState)
        )
      );
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
        shortMetersCheckboxHandler={handleCheckboxChange}
        initCheckBoxState={checkboxState}
      />
      <MoviesSection
        movies={filteredMovies} 
        delCard={delMovieCardByMovieId}
        isAfterSearch={isAfterSearch}
      />
      <Footer />
    </>
  );
};
