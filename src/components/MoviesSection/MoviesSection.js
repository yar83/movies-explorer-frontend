import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import GhostButton from '../ui/buttons/ghost/GhostButton'; 
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function MoviesSection({ movies, handleMoreBtnClick }) {
  let location = useLocation();
  
  return (
    <section className="movies-section">
      <MoviesCardList movies={movies} />
      { movies.length > 3 && location.pathname === '/movies' &&
        <div className="movies-section__more">
          <GhostButton
            label={actionButtonText.more}
            handleClick={handleMoreBtnClick}
          />
        </div>
      }
    </section>
  );
};
