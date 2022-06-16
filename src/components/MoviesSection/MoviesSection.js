import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import GhostButton from '../ui/buttons/ghost/GhostButton'; 
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './index.css';

export default function MoviesSection(props) {
  const {
    movies,
    handleMoreBtnClick,
    noMoreHiddenMovies,
    isGettingMovies,
  } = props;

  let location = useLocation();
  if (isGettingMovies) {
    return (
      <section className="movies-section">
        <Preloader />
      </section>
    )
  } else if (
      localStorage.getItem('filtered-movies') &&
      JSON.parse(localStorage.getItem('filtered-movies')).length === 0
    ) {
      return (
        <section className="movies-section">
          <NotFound />
        </section>
    )
  } else {
    return (
      <section className="movies-section">
        <MoviesCardList movies={movies} />
        { !noMoreHiddenMovies && location.pathname === '/movies' &&
          <div className="movies-section__more">
            <GhostButton
              label={actionButtonText.more}
              handleClick={handleMoreBtnClick}
            />
          </div>
        }
      </section>
    );
  } 
};
