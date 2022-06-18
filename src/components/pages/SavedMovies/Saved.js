import React, { useState, useContext } from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesSection from '../../MoviesSection/MoviesSection';
import Footer from '../../Footer/Footer';
import { useSearch } from '../../../utils/hooks/useSearch';
import { UserAuthContext } from '../../../contexts/UserAuthContext';
import './index.css';

export default function Saved() {
  const getInitCheckboxState = () => {
    return localStorage.getItem('search-saved-movies-checkbox-state') === 'true'
      ? true
      : false;
  }
  const { userMovies } = useContext(UserAuthContext);
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

  const [searchQuery, setSearchQuery] = useState('');
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [checkboxState, setCheckboxState] = useState(getInitCheckboxState());
  const { filterMoviesBySearchQuery } = useSearch();

  const saveSearchAttrs = (checkboxState) => {
    localStorage.setItem('search-saved-movies-checkbox-state', checkboxState);
  };

  const handleCheckboxChange = (evt) => {
    const checkbox = evt.target;
    setCheckboxState(checkbox.checked);
  };

  const handleFormChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      setIsQueryValid(false);
    } else {
      setIsQueryValid(true);
      saveSearchAttrs(checkboxState);
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
      <MoviesSection movies={filteredMovies} />
      <Footer />
    </>
  );
};
