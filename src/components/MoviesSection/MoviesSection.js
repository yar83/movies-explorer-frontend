import React, { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import GhostButton from '../ui/buttons/ghost/GhostButton'; 
import { actionButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function MoviesSection({ movies }) {

  return (
    <section className="movies-section">
      <MoviesCardList movies={movies} />
      { movies.length > 3 &&
        <div className="movies-section__more">
          <GhostButton label={actionButtonText.more} />
        </div>
      }
    </section>
  );
};
