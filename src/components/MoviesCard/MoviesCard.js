import React from 'react';
import './index.css';
import MoviePoster from '../ui/pictures/MoviePoster/MoviePoster';
import MovieDuration from '../ui/labels/MovieDuration/MovieDuration';
import MovieSaved from '../ui/labels/MovieSaved/MovieSaved';
import SolidButton from '../ui/buttons/solid/SolidButton';
import MovieTitle from '../ui/labels/MovieTitle/MovieTitle';
import {actionButtonText} from '../../shared/constants/buttons/button-text';

export default function MoviesCard({ id, title, duration = 0, posterUrl }) {
  return (
    <div className="movies-card">
      <div className="movies-card__screen">
        <MoviePoster url={posterUrl} />
        <div className="movies-card__label">
          <SolidButton view="gray-save" label={actionButtonText.save} />
        </div>
      </div>
      <div className="movies-card__data">
        <MovieTitle title={title} />
        <MovieDuration duration={duration} />
      </div>
    </div>
  );
}
