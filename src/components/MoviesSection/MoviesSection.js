import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import GhostButton from '../ui/buttons/ghost/GhostButton'; 
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import ExternalError from '../ExternalError/ExternalError';
import './index.css';

export default function MoviesSection(props) {
  const {
    movies,
    handleMoreBtnClick,
    noMoreHiddenMovies,
    isGettingMovies,
    externalError,
    delCard,
    isAfterSearch
  } = props;

  let location = useLocation();

  switch (true) {
    case isGettingMovies:
      return (
        <section className="movies-section">
          <Preloader />
        </section>
      )
    case movies.length === 0 && isAfterSearch:
        return (
          <section className="movies-section">
            <NotFound />
          </section>
        )
    case externalError:
      return (
        <section className="movies-section">
          <ExternalError />
        </section>
      )
    default:
      return (
        <section className="movies-section">
          <MoviesCardList movies={movies} delCard={delCard} />
          { !noMoreHiddenMovies && location.pathname === '/movies' &&
            <div className="movies-section__more">
              <GhostButton
                label={actionButtonText.more}
                handleClick={handleMoreBtnClick}
              />
            </div>
          }
        </section>
      )
  } 
};
